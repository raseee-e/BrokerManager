import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotificationComponent } from './components/notification/notification.component';
import { StockListComponent } from './components/stock-list/stock-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'stocks', component: StockListComponent },
  { path: 'notifications', component: NotificationComponent }
];