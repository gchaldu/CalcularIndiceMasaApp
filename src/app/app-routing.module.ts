import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ResultadoComponent } from './components/resultado/resultado.component';

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'inicio', component:InicioComponent},
  {path:'resultado/:valor/:sexo', component: ResultadoComponent},
  {path:'**', component:InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
