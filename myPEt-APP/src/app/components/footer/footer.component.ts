import { Component } from '@angular/core'

@Component({
    //selector é o nome que eu quero
    //para o meu componente
    selector: 'footer',
    templateUrl: './footer.component.html'
})

export class FooterComponent {

    texto1: string = 'Ola mundo'
    texto2: string = ''

    enviar(valor: Event): void {

        console.log(<HTMLInputElement>valor.target).value)
    }

}