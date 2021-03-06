import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/user.service';
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
    terms_conditions : 1,
    rol : 0,
    driver_number : ""
  };

  constructor(private userService : UsersService,private router : Router) {
    if (window.sessionStorage.getItem("loginEmail") != null && window.sessionStorage.getItem("loginPassword") != null) {
      console.log("YA ESTA LOGEADO");

        window.sessionStorage.setItem("isLogged", "true");
    }
    console.log(window.sessionStorage.getItem("loginEmail"));
    console.log(window.sessionStorage.getItem("loginPassword"));
    
    
  }

  ngOnInit() {
  }

  async login() {
    if(this.email === ""){
      alert("el usuario o contraseña no son correctos, inténtelo de nuevo");
    }

    const res = await this.userService.getUserAcepted(this.email);
    console.log(res);
    if (this.user.email === "" ) {
      console.log("carga la db");
      
      console.log(res);
      if(res === undefined){
        alert("el usuario o contraseña no son correctos, inténtelo de nuevo");
      } else {
        this.user = res;
        if (this.email === this.user.email && this.password === this.user.password) {
          console.log("El login es correcto");
          window.sessionStorage.setItem("loginEmail", this.user.email);
          window.sessionStorage.setItem("loginPassword", this.user.password);
          window.sessionStorage.setItem("isLogged", "true");
          if(this.user.rol === 1){
            window.sessionStorage.setItem("isAdmin", "true");
          }
          location.reload();
          this.user = {
            name : "",
            subname : "",
            employee_number : "",
            job_category : "",
            email : "",
            password : "",
            terms_conditions : 1,
            rol : 0,
            driver_number : ""
          };
          
        } else {
          alert("el usuario o contraseña no son correctos, inténtelo de nuevo");
        }
      }
    } else {
      console.log(res);
      
      if(res === undefined){
        alert("el usuario o contraseña no son correctos, inténtelo de nuevo");
      } else {
        console.log("no carga la db");
        console.log(this.user);
        if (this.user.email === this.email && this.user.password === this.password) {
          console.log("El login es correcto");
          window.sessionStorage.setItem("loginEmail", this.user.email);
          window.sessionStorage.setItem("loginPassword", this.user.password);
          window.sessionStorage.setItem("isLogged", "true");
          if(this.user.rol === 1){
            window.sessionStorage.setItem("isAdmin", "true");
          }
          location.reload();
          this.user = {
            name : "",
            subname : "",
            employee_number : "",
            job_category : "",
            email : "",
            password : "",
            terms_conditions : 1,
            rol : 0,
            driver_number : ""
          };
        } else {
          alert("el usuario o contraseña no son correctos, inténtelo de nuevo");
        }
      }
    }
  }

}
