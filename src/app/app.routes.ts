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
    path: 'notifications',
    loadComponent: () => import("./components/notification/notification.component").then(m => m.NotificationComponent),
  },
];
