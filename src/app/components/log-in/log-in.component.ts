import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/user.service';
import { User } from 'src/app/utils/models.utils';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  email : string = "";
  password : string = "";
  user : User = {
    name : "",
    subname : "",
    employee_number : "",
    job_category : "",
    email : "",
    password : "",
    terms_conditions : true,
    rol : false
  };

  constructor(private userService : UsersService) { }

  ngOnInit(): void {
  }

  async login() {
    if (this.user.email === "") {
      console.log("carga la db");
      
      console.log(`email : ${this.email} \n password : ${this.password}`);
      const res = await this.userService.getOneUser(this.email);

      this.user.email = res[0].email;
      this.user.employee_number = res[0].numero_empleado;
      this.user.job_category = res[0].zona_de_trabajo;
      this.user.name = res[0].nombre;
      this.user.password = res[0].constraseña;
      this.user.rol = res[0].rol_admin;
      this.user.subname = res[0].apellido;
      this.user.terms_conditions = res[0].terminos_y_condiciones;
      
      console.log(this.user);
      if (this.email === this.user.email && this.password === this.user.password) {
        console.log("El login es correcto");
        this.user = {
          name : "",
          subname : "",
          employee_number : "",
          job_category : "",
          email : "",
          password : "",
          terms_conditions : true,
          rol : false
        };
        //almacenar en una coockie si se esta logueado
        //al estar logueado cambiar la interfaz para los usuarios, tanto la navbar como las paginas 
        //(igual es una buena idea ocultar las paginas a los usuarios que no estan logueados)
        //al admin cargarle una pestaña adicional para administrar los usuarios registrados
      } else {
        console.log("el login no es correcto");
      }
    } else {
      console.log("no carga la db");
      console.log(`email : ${this.email} \n password : ${this.password}`);
      console.log(this.user);
      if (this.user.email === this.email && this.user.password === this.password) {
        console.log("El login es correcto");
        this.user = {
          name : "",
          subname : "",
          employee_number : "",
          job_category : "",
          email : "",
          password : "",
          terms_conditions : true,
          rol : false
        };
      } else {
        console.log("el login no es correcto");
      }
    }
  }

}
