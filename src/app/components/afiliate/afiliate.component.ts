import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-afiliate',
  templateUrl: './afiliate.component.html',
  styleUrls: ['./afiliate.component.scss']
})
export class AfiliateComponent implements OnInit {

  constructor(private userService : UsersService) {
  }

  ngOnInit(): void {
  }

  getAll() {
  }

  deleteUser() {
    this.userService.deleteUser('1234')
    .then(user => console.log(user));
}

}