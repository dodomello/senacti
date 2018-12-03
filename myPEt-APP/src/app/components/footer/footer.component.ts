import { Component } from '@angular/core'

@Component({
    //selector é o nome que eu quero
    //para o meu componente
    selector: 'footer',
    templateUrl: './footer.component.html'
})

export class FooterComponent {
    
    //property binding
    imagem: string = 'assets/img/goku.jpg'

    mostrarImagem(): void {

        //caso nao exista
        if (this.imagem == '') 
            this.imagem = 'assets/img/goku.jpg'
        
        //caso exista
        else 
            this.imagem = ''
        
    }
    texto1: string = 'Oi eu sou Goku'
    texto2: string = ''

    enviar(valor: Event): void{

        console.log((<HTMLInputElement>valor.target).value)
        this.texto2 = (<HTMLInputElement>valor.target).value
    }


}