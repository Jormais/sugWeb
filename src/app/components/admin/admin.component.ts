import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/user.service';
import { User } from 'src/app/utils/models.utils';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  users : User[] = [{
    name : "",
    subname : "",
    employee_number : "",
    job_category : "",
    email : "",
    password : "",
    terms_conditions : true,
    rol : false
  }];
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
    userService.getAllUsers().then( users => {
      this.users = users
      console.log(this.users[0].name);
      console.log(users[0].nombre);
      
    });
  }

  ngOnInit(): void {
  }

  aceptar(user : any){
    this.user = user;
    console.log("Se ha pulsado aceptar " + user.name);
    this.userService.postUserAcepted(user)
    .then(user => console.log(user));
    this.userService.deleteUser(user.employee_number);
    location.reload();
  }

  eliminar(user : any){
    console.log("Se ha pulsado eliminar " + user.name);
    this.userService.deleteUser(user.employee_number);
    location.reload();
  }

}
