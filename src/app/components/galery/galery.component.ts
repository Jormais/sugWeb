import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit {

  isLoged : boolean = false;

  constructor(private userService : UsersService) { }

  ngOnInit(): void {
    this.isLoged = this.userService.isLogged;
  }

}
