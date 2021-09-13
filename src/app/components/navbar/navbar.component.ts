import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  diasSemana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]
  fecha : Date = new Date();
  diaDelMes : number = this.fecha.getDate();
  diaDeLaSemana : number = this.fecha.getDay();
  mes : number = this.fecha.getMonth();
  año : number = this.fecha.getFullYear();
  horas : number = this.fecha.getHours();
  minutos : number = this.fecha.getMinutes();
  segundos : number = this.fecha.getSeconds();
  resultado = "";
  hidden = true;
  isAdminHidden = true;

  constructor(private userService : UsersService,private router : Router) {
    this.resultado = `${this.diasSemana[this.diaDeLaSemana]} ${this.diaDelMes} del ${this.mes + 1} de ${this.año} - ${this.horas} : ${this.minutos} : ${this.segundos}`;

    if (window.sessionStorage.getItem("loginEmail") != null && window.sessionStorage.getItem("loginPassword") != null &&  window.sessionStorage.getItem("isLogged") === "true") {
      this.hidden = false;
    }
    if(window.sessionStorage.getItem("isAdmin") === "true") {
      this.isAdminHidden = false;
    }
    
  }

  ngOnInit(): void {
    setInterval(() => {
      this.fecha = new Date();
      this.diaDelMes = this.fecha.getDate();
      this.diaDeLaSemana = this.fecha.getDay();
      this.mes = this.fecha.getMonth();
      this.año = this.fecha.getFullYear();
      this.horas = this.fecha.getHours();
      this.minutos = this.fecha.getMinutes();
      this.segundos = this.fecha.getSeconds();
      this.resultado = `${this.diasSemana[this.diaDeLaSemana]} ${this.diaDelMes} del ${this.mes + 1} de ${this.año} - ${this.horas} : ${this.minutos} : ${this.segundos}`;
    }, 1000)
    if (window.sessionStorage.getItem("isLogged") === "true") {
      document.getElementsByClassName("navbar__login")[0].textContent = "Salir";
    }
  } 

  logOut() {
    if(document.getElementsByClassName("navbar__login")[0].textContent === "Salir"){
      sessionStorage.clear();
      window.sessionStorage.setItem("isLogged", "false");
      this.router.navigateByUrl("/").then(e => {
        if (e) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
          location.reload();
        }
      });
    }
  }

}
