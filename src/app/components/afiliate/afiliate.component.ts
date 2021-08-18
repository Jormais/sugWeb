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
  }

  getAll() {
    axios.get("http://localhost:3000/users")
    .then( users => {
      console.log(users.data);
    })
  }

}
