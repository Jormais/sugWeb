import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UsersService } from 'src/app/services/user.service';

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

  constructor(private userService : UsersService) {
    this.resultado = `${this.diasSemana[this.diaDeLaSemana]} ${this.diaDelMes} del ${this.mes + 1} de ${this.año} - ${this.horas} : ${this.minutos} : ${this.segundos}`;
    if (window.sessionStorage.getItem("loginEmail") != null && window.sessionStorage.getItem("loginPassword") != null) {
      this.hidden = false;

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
    if (this.userService.isLogged == true) {
      document.getElementsByClassName("navbar__login")[0].textContent = "Salir"
    }
  } 

  logOut() {
    if(document.getElementsByClassName("navbar__login")[0].textContent === "Salir"){
      sessionStorage.clear();
      this.userService.isLogged = false;
      //location.reload();
    }
  }

}
