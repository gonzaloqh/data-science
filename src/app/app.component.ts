import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TIPOS_DATA, TopicNode } from '../assets/data';
import { FormControl } from '@angular/forms';
import { map, Observable, of, startWith } from 'rxjs';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  optionSearch: { id: string, nombre: string }[] = [];
  optionSearchPath: string[][] = [];
  myControl = new FormControl('');
  filteredOptions: Observable<{ id: string, nombre: string }[]> = of([]);
  tipo: any = null;
  node: TopicNode = {
    id: '',
    title: '',
    subtitle: '',
    content: [
      { type: 'text', value: '' }
    ],
    children: []
  }
  children_label: TopicNode[] = []
  title = 'data-science';

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  //Search functionality
  options: string[] = ['One', 'Two', 'Three'];

  constructor(public route: ActivatedRoute) { }
  ngOnInit() {
    let path = window.location.pathname;
    const repoBase = '/data-science/';
    if (path.startsWith(repoBase)) {
      path = path.slice(repoBase.length);
    } else if (path.startsWith('/')) {
      path = path.slice(1);
    }
    const id = path.split('/')[0];
    console.log("id:",id)
    if (id.length > 0) {
      this.node = this.getNodeById(id);
    }
    else {
      this.node = this.getNodeById("main");
    }
    this.tipo = TIPOS_DATA.find(t => t.id === id);

    //init optionsearch 
    this.optionSearch = this.getListTitles();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.optionSearchPath = this.getOptionSearchPath(this.tipo);

  }

  private getNodeById(id: string): any {
    console.log("ID recibido manual:", id);
    this.children_label = []
    let node_retrieved: TopicNode | undefined = TIPOS_DATA.find(item => item.id === id);
    if (node_retrieved) {
      console.log(node_retrieved.title);
    } else {
      alert("Nodo no encontrado: " + id);
    }
    if (node_retrieved) {
      for (let i = 0; i < node_retrieved.children.length; i++) {
        const childId = node_retrieved.children[i];
        const node_child: TopicNode | undefined = TIPOS_DATA.find(item => item.id === childId);
        if (node_child) {
          this.children_label.push(node_child);
        }
        else {
          console.error("Child node not found: " + childId);
        }
      }
    }
    console.log(this.children_label)
    return node_retrieved
  }

  //Search functionality
  private _filter(value: string): { id: string, nombre: string }[] {
    const filterValue = value.toLowerCase();
    return this.optionSearch.filter(option => option.nombre.toLowerCase().includes(filterValue));
  }

  private getListTitles(): { id: string, nombre: string }[] {
    return TIPOS_DATA.map(item => ({
      id: item.id,
      nombre: item.title
    }));
  }

  private getOptionSearchPath(tipo: any): string[][] {
    if (tipo) {
      return [["id2", "id3"], ["id4"]]
    }
    else {
      return []
    }
  }

  private returnSearchPathLabel(item: String[]): string {
    return "";
  }

  goToHome() {
    window.location.href = '/';
  }

  goToChild(child: TopicNode) {
    const path = child.id;
    console.log("Going to child:", path);
    window.location.href = `/${path}`;
  }
}
