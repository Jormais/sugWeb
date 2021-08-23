import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/user.service';
import { User } from 'src/app/utils/models.utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userService : UsersService) { }

  ngOnInit(): void {
  }

  user : User = {
    name : "Katiflow",
    subname : "Del monte",
    employee_number : "1234",
    job_category : "Conductora",
    email : "Kati@delmonte.com",
    password : "123456789",
    terms_conditions : 0,
    rol : 0
  }

  postUser() {
    this.userService.postUser(this.user)
    .then(user => console.log(user));
  }

}
