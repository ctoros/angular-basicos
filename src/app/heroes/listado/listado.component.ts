import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
 heroes: string[] = ['SpiderMan', 'Ironman', 'hulk', 'thor', 'Capitan America' ];
heroesBorrados: string = '';
 borrarHeroe(): void{
   this.heroesBorrados = this.heroes.shift() || '';
 }
}
