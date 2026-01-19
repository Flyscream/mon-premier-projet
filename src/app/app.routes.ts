import { Routes } from '@angular/router';
import { Accueil } from './accueil/accueil'; 
import { MesProjets } from './mes-projets/mes-projets';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: 'accueil', component: Accueil },
  { path: 'projets', component: MesProjets },
  { path: 'contact', component: Contact },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' }

];