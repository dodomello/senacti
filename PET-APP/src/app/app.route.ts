import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ServicosComponent} from './components/servicos/servicos.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { GaleriaComponent} from './components/galeria/galeria.component';
import { ContatoComponent} from './components/contato/contato.component'



export const RotaConstante: Routes = [

    { path: 'main', component: MainComponent },
    { path: 'servicos', component: ServicosComponent},
    { path: 'produtos', component: ProdutosComponent},
    { path: 'galeria', component: GaleriaComponent},
    { path: 'contato', component: ContatoComponent},
    { path: '**', redirectTo: 'main'},
]