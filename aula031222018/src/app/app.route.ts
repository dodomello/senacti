import { Routes } from '@angular/router';
import { FirstComponent } from './components/first/first/first.component';
import { SecondComponent} from './components/second/second/second.component';
import { ThirdComponent } from './components/third/third/third.component';
import { FourthComponent } from './components/fourth/fourth/fourth.component';
import { NinthComponent } from './components/ninth/ninth/ninth.component';
import { SixthComponent } from './components/sixth/sixth/sixth.component';

export const RotaConstante: Routes = [

    { path: 'first', component: FirstComponent },
    { path: 'second', component: SecondComponent},
    { path: 'third', component: ThirdComponent},
    { path: 'fourth', component: FourthComponent},
    { path: 'ninth', component: NinthComponent},
    { path: 'sixth', component: SixthComponent},
    { path: '**', redirectTo: 'first'},
]



