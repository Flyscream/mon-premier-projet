import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-accueil',
  standalone: true, 
  imports: [RouterLink], 
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss'
})
export class Accueil {
  protected readonly title = signal('mon-premier-projet');
  competences = signal(['HTML','CSS','Java','JavaScript','Angular','Python','PHP','MySQL',"CSV"]);
}