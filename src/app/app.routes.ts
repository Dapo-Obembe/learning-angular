import { Routes } from '@angular/router';
import { Profile } from './profile/profile';
import { Login } from './login/login';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full'
    },
    {
        path: 'profile',
        component: Profile
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: '**',
        component: NotFound
    }
];
