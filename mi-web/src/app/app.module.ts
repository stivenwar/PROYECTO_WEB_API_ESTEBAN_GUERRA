import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaSeriesComponent } from './components/lista-series/lista-series.component';

import { PerfilComponent } from './components/perfil/perfil.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { AgregarSerieComponent } from './components/agregar-serie/agregar-serie.component';
import { EditarSerieComponent } from './components/editar-serie/editar-serie.component';
import { SerieComponent } from './components/serie/serie.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaSeriesComponent,
    PerfilComponent,
    NavegacionComponent,
    AgregarSerieComponent,
    EditarSerieComponent,
    SerieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
