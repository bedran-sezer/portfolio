import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/hero/hero.component').then(m => m.HeroComponent)
  },
  // Le portfolio est une SPA avec scroll,
  // les routes servent pour d'éventuelles pages dédiées (ex: détail projet)
  {
    path: 'projects/:id',
    loadComponent: () =>
      import('./features/projects/projects.component').then(m => m.ProjectsComponent)
  },
  { path: '**', redirectTo: '' }
];