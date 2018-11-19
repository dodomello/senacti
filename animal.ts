export class Animal{
    private quantidadeDeDentes: number = 0
    private quantidadeDeOlhos: number = 0
    
    //construtor da minha classe
    //Para que animal seja criada
    //quero que defina quantidade de dentes
    // e olhos


    //Constructor:
    constructor(qtdOlhos: number, qtdDentes: number){
        this.quantidadeDeOlhos = qtdOlhos
        this.quantidadeDeDentes = qtdDentes
    }


    //pra eu te definir os olhos
    //você deve me passar 
    //a quantidade deles
    public definirOlhos(numero: number):void{
        this.quantidadeDeOlhos = numero
    }

    public definirDentes(numero: number): void{
        this.quantidadeDeDentes = numero
    }

}