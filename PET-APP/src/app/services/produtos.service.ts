import { Produto } from '../models/produto.model'

export class ProdutosService {

    public produtos: Produto[] = 

 [
     {   id:1,
         nome: 'guitarra SG',
         descricao: 'Guitarra usada por Angus Young do AC/DC, marca Gibson',
         valor: '6000,00'

    },
    {
        id:2,
        nome: 'bateria Tama',
        descricao: 'Bateria usada pelo batera do Metallica',
        valor: '8000,00'
    },
    {
        id:3,
        nome: 'DVD AC/DC',
        descricao: 'Gravado na Argentina no estadio do River Plata',
        valor: '60,00'
    },
    {
        id:4,
        nome: 'DVD Metallica',
        descricao: 'Gravado no México',
        valor: '60,00'
    }
    
]

    public getProdutos(): Array<Produto> {

        return this.produtos
    }

    public getProdutoPorId(id:number): Produto {

        let produtosInternos: Produto[]
        produtosInternos = this.getProdutos()
        return produtosInternos[id -1]
    }


}