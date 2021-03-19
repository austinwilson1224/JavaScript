import { UserService } from './../../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  template: `
      {{ users | json }}
      <div *ngIf="users">
        <div *ngFor="let user of users">
          {{ user.login }}

        </div>
      </div>
  `,
  styles: [
  ]
})
export class UserListComponent implements OnInit {

  users;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(users => {
        console.log(users);
        this.users = users;
      })
  }

}
