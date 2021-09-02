import { Injectable } from '@angular/core';
import axios from 'axios';
import { User } from '../utils/models.utils';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  isLogged : boolean = false;

  constructor() {
  }

  getAllUsers() {
    return axios.get("http://localhost:3000/users")
    .then( users => {
      return users.data;
    });
  }

  getOneUser(email : string) {
    return axios.get(`http://localhost:3000/users/${email}`)
    .then( user => {
      //console.log(user.data);
      return user.data;
    });
  }

  postUser(user : User) {
    return axios.post("http://localhost:3000/users", user)
    .then(res => res.data);
  }

  deleteUser(num : string){
    return axios.delete(`http://localhost:3000/users/${num}`).then(res => {
      return "OK";
    })
  }
}
