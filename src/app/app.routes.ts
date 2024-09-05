import { Routes } from '@angular/router';
import { Pagina1Component } from './components/pagina1/pagina1.component';
import { Pagina2Component } from './components/pagina2/pagina2.component';

export const routes: Routes = [
  {
    path:'',
    component:Pagina1Component
  },
  {
    path:'pagina2',
    component:Pagina2Component
  }
];
