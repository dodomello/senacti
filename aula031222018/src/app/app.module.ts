import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { RotaConstante } from './app.route';
import { RouterModule} from '@angular/router';
import { FirstComponent} from './components/first/first/first.component';
import { SecondComponent} from './components/second/second/second.component';
import { ThirdComponent } from './components/third/third/third.component';
import { FourthComponent } from './components/fourth/fourth/fourth.component';
import { FifthComponent } from './components/fifth/fifth/fifth.component';
import { NinthComponent } from './components/ninth/ninth/ninth.component';
import { SixthComponent } from './components/sixth/sixth/sixth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent,
    NinthComponent,
    SixthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(RotaConstante)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
