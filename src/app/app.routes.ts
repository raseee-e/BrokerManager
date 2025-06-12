import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'stocks',
    loadComponent: () =>
      import("./components/stock-list/stock-list.component").then(m => m.StockListComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import("./components/user-register/user-register.component").then(m => m.UserRegisterComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import("./components/user-login/user-login.component").then(m => m.UserLoginComponent),
  }
];
