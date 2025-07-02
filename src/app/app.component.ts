import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl } from '@angular/forms';
import { map, Observable, of, startWith, filter } from 'rxjs';
import { TIPOS_DATA, TopicNode, TopicTree } from '../assets/data';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

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
  hierchical: boolean = false;

  node: TopicNode = {
    id: '',
    name: '',
    subtitle: '',
    content: [{ type: 'text', value: '' }],
    children: []
  };

  children_label: TopicNode[] = [];
  TIPOS_DATA_TREE: TopicTree[] = [];
  treeControl = new NestedTreeControl<TopicTree>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TopicTree>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    // Detecta cambios en la URL con NavigationEnd
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
      const id = this.getCurrentId();
      this.loadNodeById(id);
    });

    // Carga inicial
    const initialId = this.getCurrentId();
    this.loadNodeById(initialId);
    this.loadTree();
  }

  loadTree() {
    const idToNodeMap = new Map<string, TopicNode>();
    const allChildIds = new Set<string>();
    TIPOS_DATA.forEach(node => {
      idToNodeMap.set(node.id, node);
      node.children.forEach(childId => allChildIds.add(childId));
    });
    const rootNodes = TIPOS_DATA.filter(node => !allChildIds.has(node.id));

    // Función recursiva para construir árbol
    const buildTree = (node: TopicNode): TopicTree => {
      return {
        id: node.id,
        name: node.name,
        subtitle: node.subtitle,
        children: node.children
          .map(childId => idToNodeMap.get(childId))
          .filter((child): child is TopicNode => !!child)
          .map(child => buildTree(child))
      };
    };
    let result = rootNodes.map(root => buildTree(root))
    console.log(result)
    this.dataSource.data = result
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

    this.optionSearch = TIPOS_DATA.map(item => ({ id: item.id, nombre: item.name }));
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
    );
    this.optionSearchPath = this.getOptionSearchPath(this.tipo);
    this.hierchical = false;
    this.myControl.setValue('');
  }

  goToChild(child: TopicNode) {
    this.router.navigate([child.id], { relativeTo: this.route });
  }

  goToHome() {

    this.router.navigate(['/'], {
      relativeTo: this.route,
      replaceUrl: true
    });
  }

  private _normalize(str: string): string {
    return str
      .normalize("NFD")              // descompone letras con tilde (á → a + ́)
      .replace(/[\u0300-\u036f]/g, "") // elimina los signos diacríticos (tildes)
      .toLowerCase()
      .replace(/ñ/g, 'n');            // opcional: trata "ñ" como "n"
  }

  private _filter(value: string): { id: string, nombre: string }[] {
    const filterValue = this._normalize(value);

    return this.optionSearch.filter(option =>
      this._normalize(option.nombre).includes(filterValue)
    );
  }

  onSelected(selectedId: string): void {
    const selectedItem = this.optionSearch.find(item => item.id === selectedId);
    if (selectedItem) {
      this.router.navigate([selectedItem.id], { relativeTo: this.route });

    }
  }

  displayFn = (id: string): string => {
    const selected = this.optionSearch.find(option => option.id === id);
    return selected ? selected.nombre : '';
  }

  private getOptionSearchPath(tipo: any): string[][] {
    return tipo ? [['id2', 'id3'], ['id4']] : [];
  }

  onHierarchyClick() {
    this.hierchical = !this.hierchical;
    this.treeControl.collapseAll();

    if (this.node) {
      this.expandAllPathsTo(this.node.id);
    }
  }

  expandAllPathsTo(targetId: string) {
    const expandPaths = (nodes: TopicTree[], path: TopicTree[] = []) => {
      for (const node of nodes) {
        const newPath = [...path, node];

        if (node.id === targetId) {
          // Expandir toda la ruta encontrada
          newPath.forEach(n => this.treeControl.expand(n));
          // No retornamos — seguimos buscando otros caminos
        }

        if (node.children?.length) {
          expandPaths(node.children, newPath);
        }
      }
    };

    expandPaths(this.dataSource.data);
  }


  generate_tree(children: string[]): TopicNode[] {
    const map = new Map<string, TopicNode>();
    TIPOS_DATA.forEach(node => map.set(node.id, node));

    return children
      .map(id => map.get(id))
      .filter((node): node is TopicNode => !!node);
  }

  hasChild = (_: number, node: TopicNode) => !!node.children && node.children.length > 0;

  onNodeClick(node: TopicTree): void {
    this.router.navigate([node.id], { relativeTo: this.route });
  }

  isHighlighted(node: TopicTree): boolean {
    return node.id === this.node?.id;
  }
}
