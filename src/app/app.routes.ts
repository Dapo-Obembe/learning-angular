import { Routes } from '@angular/router';
import { Profile } from './profile/profile';
import { Login } from './login/login';

export const routes: Routes = [
    {
        path: 'profile',
        component: Profile
    },
    {
        path: 'login',
        component: Login
    }
];
