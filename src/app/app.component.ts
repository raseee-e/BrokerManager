import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StockListComponent } from "./components/stock-list/stock-list.component"
import { NotificationComponent } from "./components/notification/notification.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HomeComponent, StockListComponent, NotificationComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
