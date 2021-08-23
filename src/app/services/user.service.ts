import { Injectable } from '@angular/core';
import axios from 'axios';
import { User } from '../utils/models.utils';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() {
  }

  getAllUsers() {
    return axios.get("http://localhost:3000/users")
    .then( users => {
      console.log(users.data);
    });
  }

  postUser(user : User) {
    return axios.post("http://localhost:3000/users", user)
    .then(res => res.data);
  }

  deleteUser(num : string){// revisar, esta mal
    return axios.delete(`http://localhost:3000/users/${num}`).then(res => {
      return "OK";
    })
  }
}
