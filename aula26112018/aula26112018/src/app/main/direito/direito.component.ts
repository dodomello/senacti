import { Component, OnInit, EventEmitter, Output } from '@angular/core'

@Component({
    //selector é o nome que eu quero
    //para o meu componente
    selector: 'app-direito',
    //aqui você define quem sera
    //o arquivo HTML que será
    //renderizado
    templateUrl: './direito.component.html'
})

export class DireitoComponent implements OnInit {

    @Output() public DefinirTextoNoMain: EventEmitter<string> = new EventEmitter

    FilhoPai(): void {

        this.DefinirTextoNoMain.emit("texto emitido")
    }

    ngOnInit(){

        this.enviarTexto()
    }
    enviarTexto(): any {
        throw new Error("Method not implemented.");
    }
}
