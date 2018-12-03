
import { Component } from '@angular/core'

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

    public variavelDoMain: number = 3

    public texto: string

    public Definirtexto(x: string): void {

        this.texto = x
    }
}
