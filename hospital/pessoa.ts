 export default class pessoa {

    protected nome: string
    protected idade: number
    protected sexo: string
    protected senha: string

    constructor (nomePessoa: string,idadePessoa: number, sexoPessoa: string,senhaPessoa: string) {

        this.nome = nomePessoa
        this.idade= idadePessoa
        this.sexo = sexoPessoa
        this.senha = senhaPessoa

    }

    public logar(): void {

        if (this.nome == "" && this.senha == "") {

            console.log('Logado')
        }

        else {

            console.log("Login inválido")
        }
    }

    public autenticar(): void {


    }

    public deslogar(): void {


    }

    public consultaReceita(): void [


    ]
}