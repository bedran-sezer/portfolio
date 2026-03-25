import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Dojo',
      description: 'Projet de diplôme Bachelor à l\'HEPIA/HES-SO de Genève. Création d\'une interface web et amélioration d\'un CLI existant. Plateforme d\'échange d\'exercices et énoncés entre professeurs et étudiants, avec une étude sur la gamification de la plateforme.',
      techs: ['Angular', 'TypeScript', 'MySQL', 'PHPMyAdmin', 'Postman', 'Figma'],
      github: '',
      image : '',
      live: '',
      type: 'Projet de diplôme'
    },
    {
      title: 'Ekmek Teknesi',
      description: 'Site vitrine pour le commerce de famille. Projet personnel pour mettre en avant les produits et services de la boulangerie.',
      techs: ['HTML', 'CSS', 'JavaScript'],
      github: '',
      image : '',
      live: '',
      type: 'Projet personnel'
    },
    {
      title: 'IB Plâtrerie',
      description: 'Site vitrine pour une société de plâtrerie. Projet réalisé pour prendre en main WordPress et Elementor.',
      techs: ['WordPress', 'Elementor'],
      github: '',
      image : '',
      live: '',
      type: 'Projet freelance'
    }
  ];
}
