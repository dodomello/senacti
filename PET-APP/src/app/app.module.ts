import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ContatoComponent } from './components/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ServicosComponent,
    ProdutosComponent,
    GaleriaComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
