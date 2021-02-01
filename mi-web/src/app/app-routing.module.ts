import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListaSeriesComponent} from "./components/lista-series/lista-series.component";
import {PerfilComponent} from "./components/perfil/perfil.component";
import {AgregarSerieComponent} from "./components/agregar-serie/agregar-serie.component";
import {EditarSerieComponent} from "./components/editar-serie/editar-serie.component";
import {SerieComponent} from "./components/serie/serie.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: '/lista-series',
    pathMatch: 'full'
  },
  {
    path: 'lista-series',
    component: ListaSeriesComponent
  },
  {
    path: 'lista-series/añadir',
    component: AgregarSerieComponent
  },
  {
    path: 'lista-series/editar/:id',
    component: EditarSerieComponent
 },
  {
    path: 'lista-series/perfil',
    component: PerfilComponent
  }
  ,
  {
    path: 'lista-series/serie',
    component: SerieComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
