import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mon-premier-projet');

  isVisible = signal(false);

toggle() {
  this.isVisible.set(!this.isVisible());
}

competences = signal(['HTML','CSS','Java','JavaScript','Angular','Python','PHP','MySQL',"CSV"]);

}


