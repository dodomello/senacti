import { Produto } from '../models/produto.model';
import { reject } from 'q';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable() export class ProdutosService {

    constructor (private http: Http) {

    }

        public produtos: Produto[] = 

 [
     {   id:1,
         nome: 'guitarra SG',
         descricao: 'Guitarra usada por Angus Young do AC/DC, marca Gibson',
         valor: '6000,00',
         imagem: 'sg.png'

    },
    {
        id:2,
        nome: 'bateria Tama',
        descricao: 'Bateria usada pelo batera do Metallica',
        valor: '8000,00',
        imagem: 'bateria.png'

    },
    {
        id:3,
        nome: 'DVD AC/DC',
        descricao: 'Gravado na Argentina no estadio do River Plate',
        valor: '60,00',
        imagem: 'dvd.png'

    },
    {
        id:4,
        nome: 'DVD Metallica',
        descricao: 'Gravado no México',
        valor: '60,00',
        imagem: 'dvd1.png'

    },
    {
        id:5,
        nome: 'Palheta Fender',
        descricao: 'Uma das melhores palhetas do mundo',
        valor: '3,00',
        imagem: 'palheta.png'

    },
    {
        id:6,
        nome: 'Cordas SG',
        descricao: 'Na compra do conjunto de cordas SG vc ganha uma corda E extra!!!',
        valor: '40,00',
        imagem: 'cordas.png'

    },
    {
        id:7,
        nome: 'Acordeon Honner 80 baixos',
        descricao: 'Acordeon Alemão da década de 80',
        valor: '5000,00',
        imagem: 'acordeon.png'

    },
    {
        id:8,
        nome: 'Amplificador METEORO 30W',
        descricao: 'Uma das melhores caixas para poder estudar e tocar em um barzinho',
        valor: '350,00',
        imagem: 'amplificador.png'

    },
    {
        id:9,
        nome: 'Violão Memphis md-18',
        descricao: 'Violão By Tagima de cordas em Aço com o corpo Folk',
        valor: '420,00',
        imagem: 'violao.png'

    },
    {
        id:10,
        nome: 'Afinador Digital',
        descricao: 'A melhor maneira de conseguir afinar o seu instrumento',
        valor: '60,00',
        imagem: 'afinador.png'

    }
    
]

    public getProdutos(): Array<Produto> {

        return this.produtos
    }

    public getProdutoPorId(id: number): Produto {

        let produtosInternos: Produto[]
        produtosInternos = this.getProdutos()
        return produtosInternos[id -1]
    }

    public getProdutosPromise(): Promise<Produto[]> {

        return new Promise ((resolve,reject) => {

            let funfou =  true

                if (funfou) {

            resolve(this.produtos)
                }
                else 
            reject({tipo_erro: 'produto-falso', mensagem: 'Sua produto nao é original'})
        })
    }

    public getProdutosPromiseAPI(): Promise<Produto[]> {

        return this.http.get('http://localhost:3000/produtos').toPromise().then((prod: any)=>prod.json())
    }

    public getProdutoPorIdAPI(id: number): Promise<Produto> {
        
        return this.http.get(`http://localhost:3000/produtos?id=${id}`).toPromise().then((prod: any)=>prod.json())
    }


}