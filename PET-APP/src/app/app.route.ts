import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ServicosComponent} from './components/servicos/servicos.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { GaleriaComponent} from './components/galeria/galeria.component';
import { ContatoComponent} from './components/contato/contato.component'
import { ProdutoComponent } from './components/produtos/produto/produto.component';



export const RotaConstante: Routes = [

    { path: 'main', component: MainComponent },
    { path: 'servicos', component: ServicosComponent},
    { path: 'produtos', component: ProdutosComponent},
    { path: 'produtos/:id', component: ProdutoComponent},
    { path: 'galeria', component: GaleriaComponent},
    { path: 'contato', component: ContatoComponent},
    { path: '**', redirectTo: 'main'},
]