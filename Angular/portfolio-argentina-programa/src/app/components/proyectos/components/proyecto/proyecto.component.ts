import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent {
  @Input() nombre: string="Proyecto";
  @Input() descripcion: string="Descripción acá";
  @Input() href: string="#";
}
