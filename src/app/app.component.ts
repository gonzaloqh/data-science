import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';
import { map, Observable, of, startWith, filter } from 'rxjs';
import { TIPOS_DATA, TopicNode } from '../assets/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myControl = new FormControl('');
  filteredOptions: Observable<{ id: string, nombre: string }[]> = of([]);
  optionSearch: { id: string, nombre: string }[] = [];
  optionSearchPath: string[][] = [];
  tipo: any = null;

  node: TopicNode = {
    id: '',
    title: '',
    subtitle: '',
    content: [{ type: 'text', value: '' }],
    children: []
  };

  children_label: TopicNode[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    // Detecta cambios en la URL con NavigationEnd
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
      const id = this.getCurrentId();
      this.loadNodeById(id);
    });

    // Carga inicial
    const initialId = this.getCurrentId();
    this.loadNodeById(initialId);
  }

  /** Extrae el ID desde la ruta actual */
  getCurrentId(): string {
    const repoBase = '/data-science/';
    let path = this.location.path();

    if (path.startsWith(repoBase)) {
      path = path.slice(repoBase.length);
    } else if (path.startsWith('/')) {
      path = path.slice(1);
    }

    return path.split('/')[0] || 'main';
  }

  /** Carga los datos desde el ID */
  loadNodeById(id: string) {
    const found = TIPOS_DATA.find(n => n.id === id);
    if (!found) {
      alert('Nodo no encontrado: ' + id);
      return;
    }

    this.node = found;
    this.tipo = TIPOS_DATA.find(t => t.id === id);

    this.children_label = [];
    for (const childId of found.children) {
      const child = TIPOS_DATA.find(n => n.id === childId);
      if (child) this.children_label.push(child);
    }

    this.optionSearch = TIPOS_DATA.map(item => ({ id: item.id, nombre: item.title }));
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
    this.optionSearchPath = this.getOptionSearchPath(this.tipo);
  }

 goToChild(child: TopicNode) {
  this.router.navigate([child.id], { relativeTo: this.route });
}

  goToHome() {
    this.router.navigate(['/data-science']);
  }

  private _filter(value: string): { id: string, nombre: string }[] {
    const filterValue = value.toLowerCase();
    return this.optionSearch.filter(option =>
      option.nombre.toLowerCase().includes(filterValue)
    );
  }

  private getOptionSearchPath(tipo: any): string[][] {
    return tipo ? [['id2', 'id3'], ['id4']] : [];
  }
}
