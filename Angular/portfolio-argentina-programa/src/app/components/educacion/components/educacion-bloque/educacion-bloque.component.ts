import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-educacion-bloque',
  templateUrl: './educacion-bloque.component.html',
  styleUrls: ['./educacion-bloque.component.css']
})
export class EducacionBloqueComponent {
  @Input() src: string=""
  @Input() alt: string=""
  @Input() instituto: string=""
  @Input() carrera: string=""
  @Input() tiempo: string=""
}
