import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { loginGuard } from './guards/login.guard';
import { authGuardFn } from '@auth0/auth0-angular';
import { LoginComponent } from './pages/login/login.component';


export const routes: Routes = [
    {path: 'home', component: HomeComponent, canActivate: [authGuardFn]},
    {path: 'profile', component: UserPageComponent, canActivate: [authGuardFn]},
    {path: '', component: LoginComponent}

];

