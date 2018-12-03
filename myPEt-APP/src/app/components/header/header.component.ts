import { Component } from '@angular/core'
import { Pessoa } from '../../pessoas/pessoa.pessoas'

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
    //public teste: string = 'Valor'

    pessoa = [ new Pessoa(1, 'Mercury')];

    enviar(valor: Event): void {

        console.log((<HTMLInputElement>valor.target).value)
       
    }


    

    

}

