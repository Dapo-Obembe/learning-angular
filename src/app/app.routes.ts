import { Routes } from '@angular/router';
import { Profile } from './profile/profile';
import { Login } from './login/login';
import { NotFound } from './not-found/not-found';
import { ControlFlow } from './control-flow/control-flow';
import { DynamicCssClass } from './dynamic-css-class/dynamic-css-class';

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
        path: 'control-flow',
        component: ControlFlow
    },
    {
        path: 'dynamic-css-class',
        component: DynamicCssClass
    },
    {
        path: '**',
        component: NotFound
    }
];
