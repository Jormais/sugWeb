import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { User } from 'src/app/utils/models.utils';

@Component({
  selector: 'app-afiliate',
  templateUrl: './afiliate.component.html',
  styleUrls: ['./afiliate.component.scss']
})
export class AfiliateComponent implements OnInit {

  constructor(private userService : EmpleadosService) {
    //this.postUser();
    this.deleteUser();
    
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

  ngOnInit(): void {
  }

  getAll() {
  }

  postUser() {
    this.userService.postUser(this.user)
    .then(user => console.log(user));
  }

  deleteUser() {
    this.userService.deleteUser('1234')
    .then(user => console.log(user));
}

}