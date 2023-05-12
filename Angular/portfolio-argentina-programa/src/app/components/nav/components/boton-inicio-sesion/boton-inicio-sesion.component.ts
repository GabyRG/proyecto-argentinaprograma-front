import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boton-inicio-sesion',
  templateUrl: './boton-inicio-sesion.component.html',
  styleUrls: ['./boton-inicio-sesion.component.css']
})
export class BotonInicioSesionComponent {
  constructor(private router:Router){

  }

  ngOnInit(): void{

  }

  login(){
    this.router.navigate(['/login'])
  }
}
