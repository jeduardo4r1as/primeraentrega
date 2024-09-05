import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Pagina1Component } from '../pagina1/pagina1.component';
import { MaterialModule } from '../../modulos/material/material.module';

@Component({
  selector: 'app-pagina2',
  standalone: true,
  imports: [Pagina1Component,RouterLink,MaterialModule],
  templateUrl: './pagina2.component.html',
  styleUrl: './pagina2.component.css'
})
export class Pagina2Component {


  imagenes = [
    "https://images8.alphacoders.com/131/thumb-1920-1317374.jpeg",
    "https://www.gratistodo.com/wp-content/uploads/2016/09/Naruto-Wallpapers-11.jpg",
    "https://th.bing.com/th/id/R.509cf678c93f4f4c2816ad5b22beff4d?rik=5nJMn4lEqfUXrQ&pid=ImgRaw&r=0",
    "https://wegotthiscovered.com/wp-content/uploads/2023/06/gaara.png?w=1200"

    ]
    imagenActual = this.imagenes[0];

  enviarImagen(indice: number){

    this.imagenActual = this.imagenes[indice]

    }
}
