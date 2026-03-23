import { Component } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  categories = [
    {
      name: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular']
    },
    {
      name: 'Backend',
      skills: ['Node.js / Express', 'PHP', 'API REST']
    },
    {
      name: 'Base de données',
      skills: ['MySQL']
    },
    {
      name: 'Outils',
      skills: ['Git', 'Docker', 'Linux', 'Windows', 'VSCode']
    }
  ];

}
