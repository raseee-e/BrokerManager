import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="home-section">
      <h1>Welcome to BrokerManager</h1>
      <p class="subtitle">Your dashboard for stocks</p>
      <div class="home-actions">
        <a routerLink="/stocks" class="home-btn">View Stocks</a>
      </div>
    </section>
  `,
  styles: [`
    .home-section {
      max-width: 600px;
      margin: 0.5rem auto 0 auto;
      background: #fff;
      border-radius: 1rem;
      box-shadow: 0 4px 24px rgba(0,0,0,0.07);
      padding: 1.2rem 1rem 1rem 1rem;
      text-align: center;
    }
    .home-section h1 {
      color: #3f51b5;
      margin-bottom: 0.5rem;
      font-size: 2.2rem;
    }
    .subtitle {
      color: #555;
      margin-bottom: 1.2rem;
      font-size: 1.1rem;
    }
    .home-actions {
      display: flex;
      justify-content: center;
      gap: 1.2rem;
      margin-top: 1.2rem;
    }
    .home-btn {
      background: #3f51b5;
      color: #fff;
      padding: 0.7rem 1.5rem;
      border-radius: 0.5rem;
      text-decoration: none;
      font-weight: 500;
      font-size: 1rem;
      transition: background 0.2s;
      box-shadow: 0 2px 8px rgba(63,81,181,0.08);
    }
    .home-btn:hover {
      background: #283593;
    }
    @media (max-width: 600px) {
      .home-section {
        margin: 0.5rem 0 0 0;
        padding: 0.7rem 0.3rem 0.7rem 0.3rem;
      }
      .home-actions {
        flex-direction: column;
        gap: 0.7rem;
      }
    }
  `]
})
export class HomeComponent {}