import { Component, OnInit, Input } from '@angular/core'

@Component({
    //selector é o nome que eu quero
    //para o meu componente
    selector: 'app-esquerdo',
    //aqui você define quem sera
    //o arquivo HTML que será
    //renderizado
    templateUrl: './esquerdo.component.html'
})

export class EsquerdoComponent implements OnInit {

    @Input() public Numero: number

    ngOnInit() {
        
    }
}
