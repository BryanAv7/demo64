import { Routes } from '@angular/router';
import { SumaComponent } from './pages/suma/suma.component';
import { RestaComponent } from './pages/resta/resta.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { CcalculadoraComponent } from './pages/ccalculadora/ccalculadora.component';
import { PostComponent } from './pages/post/post.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { CovidComponent } from './pages/covid/covid.component';



export const routes: Routes = [

    {path: 'Suma', title: 'Operación Suma', component: SumaComponent},
    {path: 'Resta', title: 'Operación Resta', component: RestaComponent},
    {path: 'acercade', title: 'Sobre Nosotros', component: AcercadeComponent},
    {path: 'Calculadora', title: 'Calculadora', component: CcalculadoraComponent},
    {path: 'posts', title: 'posts', component: PostComponent},
    {path: 'mensajes' , title: 'posts', component: MensajesComponent},
    {path: 'covid' , title: 'covid', component: CovidComponent}
];
