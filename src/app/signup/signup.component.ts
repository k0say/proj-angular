import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit() {
  }

  signUp(form: NgForm)  {
    let result = this.auth.signUp(form.value.name, form.value.email, form.value.password);
    if(!result) {
      return;
    }
    this.route.navigate([''])
  }

}
