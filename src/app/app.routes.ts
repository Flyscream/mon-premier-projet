import { Routes } from '@angular/router';
import { Accueil } from './accueil/accueil'; 
import { MesProjets } from './mes-projets/mes-projets';
import { MiniJeu } from './mini-jeu/mini-jeu';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: 'accueil', component: Accueil },
  { path: 'projets', component: MesProjets },
  { path: 'mini-jeu', component: MiniJeu },
  { path: 'contact', component: Contact },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' }

];