import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'chats',
        loadComponent: () => import('./pages/chats/chats.component').then(m => m.ChatsComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: '',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
    }
];
