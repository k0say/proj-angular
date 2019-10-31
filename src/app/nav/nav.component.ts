import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  showMenu = true;
  @Output() onNewUser = new EventEmitter();
  private isUserLoggedIn = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.isUserLoggedIn = this.auth.isUserLoggedIn()
  }

  newUser() {
    this.onNewUser.emit()
  }

  logout(e)  {
    e.preventDefault();
    this.auth.logout();
    this.router.navigate(['login']);
  }

  signIn(e)  {
    e.preventDefault();
    this.router.navigate(['login']);
  }

  signUp(e) {
    e.preventDefault();
    this.router.navigate(['signup'])
  }

  toggleMenu()  {
    this.showMenu = !this.showMenu;
  }
}
