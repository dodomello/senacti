import { Animal } from "./animal";

export default class Zoo{
    private endereco: string
    private listaDeAnimais: Array<Animal>

    //Todo parâmetro e/ou atributo
    //definido no inicio do meu
    //método ou função
    //só poderá ser acessado
    //por ele mesmo
    constructor( 
        list: Array<Animal>){            
            this.listaDeAnimais = list
    }

    public definirEndereco(end: string): void{
        this.endereco = end
    }

    public mostrarEndereco(): string{
           return this.endereco 
    }

    public mostrarLista(): Array<Animal>{
            return this.listaDeAnimais
    }

}