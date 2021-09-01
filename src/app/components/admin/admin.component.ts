import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  users : [] = [];

  constructor(private userService : UsersService) {
    userService.getAllUsers().then( users => console.log(users));
  }

  ngOnInit(): void {
  }

}
