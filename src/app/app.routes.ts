import { Routes } from '@angular/router';
import { authGuard } from '../auth/auth.guard';

export const routes: Routes = [
  {
    path: 'chats',
    loadComponent: () =>
      import('./chats/chats.component').then((m) => m.ChatsComponent),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('../auth/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: '',
    loadComponent: () =>
      import('../auth/login/login.component').then((m) => m.LoginComponent),
  },
];
