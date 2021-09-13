import { Injectable } from '@angular/core';
import axios from 'axios';
import { Mail } from '../../utils/models.utils';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  sendMail(mail : Mail){
    return axios.post("http://localhost:3000/email", mail)
    .then(res => console.log(res.data)
    );
  }
}
