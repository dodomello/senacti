export default class arma {

    private calibre: string
    private marca: string
    private tipo: string
    private capacidade: number
    protected projeteisNoPente: number

    constructor(projeteis: number,capacidade: number){

        this.capacidade = capacidade
        this.projeteisNoPente = projeteis
    }

    public atirar(n:number = 1): void{

        if (this.projeteisNoPente == 0) {

            console.log('Não há balas, por favor recarregue') 
        }
        else { this.projeteisNoPente = this.projeteisNoPente - n 
            console.log('Bang!!!') 
        }
    }

    public recarregar(): void {

        this.projeteisNoPente = this.capacidade
    }

    public informarBalas(): number {

        return this.projeteisNoPente
    }

}

