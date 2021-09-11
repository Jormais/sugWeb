import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/user.service';
import { User } from 'src/app/utils/models.utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  road_has_been_selected : boolean = false;

  constructor(private userService : UsersService,  private router : Router) { }

  ngOnInit(): void {
  }

  user : User = {
    name : "",
    subname : "",
    employee_number : "",
    job_category : "",
    email : "",
    password : "",
    terms_conditions : true,
    rol : false,
    driver_number : ""
  }

  postUser() {
    this.userService.postUser(this.user)
    .then(user => console.log(user));
  }

  register(){
    this.postUser();
    window.sessionStorage.setItem("loginEmail", this.user.email);
    window.sessionStorage.setItem("loginPassword", this.user.password);
    this.router.navigateByUrl("/login").then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }

  isDriver(){
    console.log("ES CONDUCTO " + this.user.job_category);
    if(this.user.job_category === "Carretera"){
      this.road_has_been_selected = true;
    } else {
      this.road_has_been_selected = false;
    }
  }
}
