import { Component, OnInit } from '@angular/core'
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

export class HeaderComponent implements OnInit {

    //string interpolation
    //public teste: string = 'Valor'
    public pessoa = new Pessoa()
    public pessoas : Pessoa[] = []
    public numeroArray: Number = 0 

    constructor() { 
        this.limparAtributos()
      }
    
      ngOnInit() {
      }
    
      enviarCadastro(){
        this.pessoas.push(this.pessoa)
        this.numeroArray = this.pessoas.length
        this.pessoa = new Pessoa()  
        this.limparAtributos()
        
      }
      definirNome(texto): void{
        this.pessoa.Nome = ((<HTMLInputElement>texto.target).value)
      }
      definirSobrenome(texto): void{
        this.pessoa.Sobrenome = ((<HTMLInputElement>texto.target).value)
      }
      limparAtributos(): void{
        this.pessoa.Nome = ''
        this.pessoa.Sobrenome = ''
      }
    
    }
    

    //pessoa = [ new Pessoa(1, 'Mercury')];

    //enviar(valor: Event): void {

        //console.log((<HTMLInputElement>valor.target).value)
       
   // }

   

    

    

}

