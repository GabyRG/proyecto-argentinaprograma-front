import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-habilidad-dura',
  templateUrl: './habilidad-dura.component.html',
  styleUrls: ['./habilidad-dura.component.css']
})
export class HabilidadDuraComponent {
  @Input() porcentaje: number=0;
  @Input() color: string="rgb(0,0,0)";
  @Input() nombre: string="";
}
