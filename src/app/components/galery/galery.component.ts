import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit {

  isLoged : boolean = false;

  constructor(private userService : UsersService) { }

  ngOnInit(): void {
    
    if (window.sessionStorage.getItem("isLogged") === "true"){
      this.isLoged = true;
    } else if(window.sessionStorage.getItem("isLogged") === "false"){
      this.isLoged = false;
    }

  }

}
