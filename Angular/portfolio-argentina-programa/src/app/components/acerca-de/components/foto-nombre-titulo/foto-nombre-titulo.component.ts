import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-foto-nombre-titulo',
  templateUrl: './foto-nombre-titulo.component.html',
  styleUrls: ['./foto-nombre-titulo.component.css']
})
export class FotoNombreTituloComponent implements OnInit {
  persona: persona = new persona("","","");
  constructor(public personaService: PersonaService){}

  ngOnInit(): void {
      this.personaService.getPersona().subscribe(data =>{this.persona = data})
  }
}
