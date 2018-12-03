import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { EsquerdoComponent } from './main/esquerdo/esquerdo.component';
import { DireitoComponent } from './main/direito/direito.component';

@NgModule({
  declarations: [
    AppComponent,
    EsquerdoComponent,
    DireitoComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
