import { Routes} from '@angular/router';
import { AuthGuard } from './guards/auth.guard';//protected route
import { AuthenticatedGuard } from './guards/authenticated.guard';

export const routes: Routes = [

  { path: '', title: 'API-CHANGE', loadComponent: () => import('./page/landin-page/landin-page.component'), }, // Landing page
  { path: 'documentacion',title: 'Documentacion',  loadComponent: () => import('./page/documentation/documentation.component'),  }, // Documentation
  { path: 'pricing',title: 'Pricing', loadComponent: () => import('./page/pricing/pricing.component') }, // Pricing
  { path: 'faq',title: 'FAQ', loadComponent: () => import('./page/faq/faq.component') }, // FAQ
  { path: 'login',title: 'Loadin',loadComponent: () => import('./page/login/login.component'),canActivate:[AuthenticatedGuard]},//Login protected route
  { path: 'registro',title: 'Registro', loadComponent: () => import('./page/register/register.component') }, // Register
  { path: 'dasboard',title: 'dasboard', loadComponent: () => import('./page/dasboard/dasboard.component'),canActivate:[AuthGuard] }, //Dashboard protected route

];

