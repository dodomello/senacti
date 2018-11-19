import arma from "./arma";


export default class metralhadora extends arma {

    private tiroPorSegundo: number

    constructor(projeteis: number,capacidade: number, tiroPorSegundo: number){

        super(projeteis, capacidade);
        this.tiroPorSegundo = tiroPorSegundo

    }

    public atirar(): void{

        if (this.projeteisNoPente == 0) {
            for(var x=0; x<this.tiroPorSegundo; x++){
            console.log('Não há balas, por favor recarregue')
            }
        }
        else {

            this.projeteisNoPente -= this.tiroPorSegundo
            for(var x=0; x<this.tiroPorSegundo; x++){
                console.log('RATATATATATATATA')
            }
            console.log(this.informarBalas())
        }
    }
}