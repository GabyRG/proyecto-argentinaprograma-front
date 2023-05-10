import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.css']
})
export class RedesSocialesComponent {
  @Input() src: string = "";
  @Input() alt: string = "";
}
