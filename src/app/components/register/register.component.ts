import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/user.service';
import { User } from 'src/app/utils/models.utils';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  road_has_been_selected : boolean = false;
  palabraSecreta = "palabra"
  clave = "clave"
  toDecript = "";

  constructor(private userService : UsersService,  private router : Router) {
    // this.toDecript = this.encrypt(this.clave);
    // console.log(this.encrypt(this.clave));
    // console.log(this.decrypt(this.toDecript));
    // //userService.sendMail();
  }

  ngOnInit(): void {
  }

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
  }

  postUser() {
    this.userService.postUser(this.user)
    .then(user => console.log(user));
  }

  register(){
    this.postUser();
    // window.sessionStorage.setItem("loginEmail", this.user.email);
    // window.sessionStorage.setItem("loginPassword", this.user.password);
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

  encrypt(value : string) : string{
    return CryptoJS.AES.encrypt(value, this.palabraSecreta.trim()).toString();
  }

  decrypt(textToDecrypt : string){
    return CryptoJS.AES.decrypt(textToDecrypt, this.palabraSecreta.trim()).toString(CryptoJS.enc.Utf8);
  }

}
