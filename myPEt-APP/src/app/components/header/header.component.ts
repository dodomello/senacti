import { Component } from '@angular/core'

@Component({
    //selector é o nome que eu quero
    //para o meu componente
    selector: 'header',
    //aqui você define quem sera
    //o arquivo HTML que será
    //renderizado
    templateUrl: './header.component.html'
})

export class HeaderComponent {

    //string interpolation
    public teste: string = 'Valor'
    

}

