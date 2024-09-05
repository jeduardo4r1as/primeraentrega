import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../modulos/material/material.module';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-pagina1',
  standalone: true,
  imports: [MaterialModule, FormsModule,RouterLink],
  templateUrl: './pagina1.component.html',
  styleUrl: './pagina1.component.css'
})
export class Pagina1Component {

  @Input() imagenDelPadre: string = '';
  @Output () emisor = new EventEmitter<string>();

  imagen = 'https://images8.alphacoders.com/131/thumb-1920-1317374.jpeg';


}
