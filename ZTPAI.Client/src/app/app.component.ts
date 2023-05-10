import { Component, OnChanges, OnInit } from '@angular/core';
import { AuthService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'frontend';

  ngOnInit(): void {
    this.checkIfTokenExists();
  }

  constructor(private authService: AuthService) { }

  private checkIfTokenExists(): void {
    var token = localStorage.getItem('tokenZTPAI');
    var isLoggedIn = (token !== null);
    this.authService.updateLoggedIn(isLoggedIn);
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  logout(): void {
    this.authService.updateLoggedIn(false);
    localStorage.removeItem('tokenZTPAI');
  }
}
