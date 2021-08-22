import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-afiliate',
  templateUrl: './afiliate.component.html',
  styleUrls: ['./afiliate.component.scss']
})
export class AfiliateComponent implements OnInit {

  constructor() {
    this.getAll();
  }

  ngOnInit(): void {
    this.deleteUser();
  }

  getAll() {
    return axios.get("http://localhost:3000/users")
    .then( users => {
      console.log(users.data);
    });
  }

  postUser() {
    return axios.post("http://localhost:3000/users", "'Nilsa','Brito Santana','1518','Otros','NilsaBrito@gmail.com','987654321','1','1','4'")
    .then(res => {
      return "Ok";
    });
  }

  deleteUser(){// revisar, esta mal
    return axios.delete("http://localhost:3000/users").then(res => {
      return "OK";
    })
  }

}
