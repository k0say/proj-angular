import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../classes/user';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  public title: string = "User Detail"

  @Input() User: User;
  //inject the AcrivatedRoute to use in subscribe
  constructor(private route: ActivatedRoute, 
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  //in ngOnInit we subscribe
    this.route.params.subscribe(
      (p) => {
        this.User = this.userService.getUser(+p.id);
      }
    );
  }

  backToUsers() {
    this.router.navigate(['users']);
  }

}
