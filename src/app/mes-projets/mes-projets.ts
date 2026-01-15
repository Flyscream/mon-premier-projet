import { Component, signal } from '@angular/core';

interface Project {
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-mes-projets',
  standalone: true,
  imports: [],
  templateUrl: './mes-projets.html',
  styleUrl: './mes-projets.scss',
})
export class MesProjets {
  showProjects = signal(false);

  projects = signal<Project[]>([
    { 
      title: 'Mon Portfolio', 
      description: 'HTML, CSS', 
      link: 'https://github.com/Flyscream/PortfolioAlexandre-main' 
    },
    { 
      title: 'Projet Universitaire', 
      description: 'Analyse de données en Python.', 
      link: '' 
    },
    { 
      title: 'Application Java', 
      description: 'Gestion de bibliothèque en POO.', 
      link: '' 
    },
    { 
      title: 'TEST', 
      description: '', 
      link: '' 
    },
    { 
      title: 'TEST', 
      description: '', 
      link: '' 
    },
    { 
      title: 'TEST', 
      description: '', 
      link: '' 
    },
    { 
      title: 'TEST', 
      description: '', 
      link: '' 
    }, 
    { 
      title: 'TEST', 
      description: '', 
      link: '' 
    }, 
    { 
      title: 'TEST', 
      description: '', 
      link: '' 
    },
    { 
      title: 'TEST', 
      description: '', 
      link: '' 
    },
    { 
      title: 'TEST', 
      description: '', 
      link: '' 
    }, 
    { 
      title: 'TEST', 
      description: '', 
      link: '' 
    }
  ]);

  toggleProjects() {
    this.showProjects.set(!this.showProjects());
  }
}