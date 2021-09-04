import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/user.service';
import { User } from 'src/app/utils/models.utils';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  email : string = "";
  password : string = "";
  user : User = {
    name : "",
    subname : "",
    employee_number : "",
    job_category : "",
    email : "",
    password : "",
    terms_conditions : true,
    rol : false
  };

  constructor(private userService : UsersService) { 
    if (window.sessionStorage.getItem("loginEmail") != null && window.sessionStorage.getItem("loginPassword") != null) {
      console.log("YA ESTA LOGEADO");
      this.userService.isLogged = true;
    }
    console.log(window.sessionStorage.getItem("loginEmail"));
    console.log(window.sessionStorage.getItem("loginPassword"));
    console.log(this.userService.isLogged);
    
  }

  ngOnInit(): void {
  }

  async login() {
    if (this.user.email === "") {
      console.log("carga la db");
      
      const res = await this.userService.getOneUser(this.email);

      this.user = res[0];
      
      console.log(this.user);
      if (this.email === this.user.email && this.password === this.user.password) {
        console.log("El login es correcto");
        window.sessionStorage.setItem("loginEmail", this.user.email);
        window.sessionStorage.setItem("loginPassword", this.user.password);
        this.userService.isLogged = true;
        location.reload();
        this.user = {
          name : "",
          subname : "",
          employee_number : "",
          job_category : "",
          email : "",
          password : "",
          terms_conditions : true,
          rol : false
        };
        
      } else {
        console.log("el login no es correcto");
      }
    } else {
      console.log("no carga la db");
      console.log(this.user);
      if (this.user.email === this.email && this.user.password === this.password) {
        console.log("El login es correcto");
        window.sessionStorage.setItem("loginEmail", this.user.email);
        window.sessionStorage.setItem("loginPassword", this.user.password);
        this.userService.isLogged = true;
        location.reload();
        this.user = {
          name : "",
          subname : "",
          employee_number : "",
          job_category : "",
          email : "",
          password : "",
          terms_conditions : true,
          rol : false
        };
      } else {
        console.log("el login no es correcto");
      }
    }
  }

}
