import { Routes } from '@angular/router';
import { MesProjets } from './mes-projets/mes-projets';
import { Contact } from './contact/contact'; 
export const routes: Routes = [
  { path: 'projets', component: MesProjets },
  { path: 'contact', component: Contact }, 
  { path: '', redirectTo: 'projets', pathMatch: 'full' } 
];