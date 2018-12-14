import { Servico } from '../models/servico.model';

export class ServicosService {

    public servicos: Servico[] = 
    
[ 
    {
        id: 1,
        nome: 'Frete',
        descricao: 'Nas compras acima de 500,00 reais o frete é grátis',
        valor: 'Valor conforme a localidade',
        imagem: 'frete.png'
    },
    {
        id: 2,
        nome: 'Inspeção de instrumentos musicais',
        descricao: 'Para dar aquele carinho que seu instrumento merece',
        valor: 'Conforme o instrumento',
        imagem: 'inspeçao.png'
    },
    {
        id: 3,
        nome: 'Agendamento de shows',
        descricao: 'Precisando de profissionais para um show, aqui você encontra os melhores',
        valor: 'Acertar com os profissionais',
        imagem: 'agendamento.png'
    },
    {
        id: 4,
        nome: 'Locação de instrumentos',
        descricao: 'Alugue qualquer instrumento para não perder seu show',
        valor: 'Conforme os instrumentos',
        imagem: 'locaçao.png'
    },
    {
        id: 5,
        nome: 'Empresários',
        descricao: 'Se acha um artista com potencial, aqui você consegue os melhores empresarios do país',
        valor: 'A definir com o empresário',
        imagem: 'empresario.png'
    }

]

public getServicos(): Array<Servico> {

    return this.servicos
    
}

public getServicoPorId(id: number): Servico {

    let servicosInternos: Servico[]
    servicosInternos = this.getServicos()
    return servicosInternos[id -1]
}
}