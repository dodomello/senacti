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

    //property binding
    imagem: string = '/assets/img/icone.png'
    //property binding
    exibirImagem(): void {

    
        if (this.imagem == '')
            
            this.imagem = '/assets/img/icone.png'
        
        else 

            this.imagem = ''

    }
}