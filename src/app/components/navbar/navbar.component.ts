import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  result : string = new Date().toLocaleString();

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.result = new Date().toLocaleString();
    }, 1000)
  } 


}
