import { Component } from '@angular/core'
import { Hero } from '../../models/hero.model'

@Component({
    //selector é o nome que eu quero
    //para o meu componente
    selector: 'main',
    //aqui você define quem sera
    //o arquivo HTML que será
    //renderizado
    templateUrl: './main.component.html'
})

export class MainComponent {

   heroes = [

    //new Hero(1, 'Windstorm'),
    //new Hero(13, 'Bombasto'),
    //new Hero(15, 'Magneta'),
    //new Hero(20, 'Tornado')
   ];

   //meuHeroi = this.heroes[1].NumeroId + ' ' + this.heroes[1].NomeHeroi
}