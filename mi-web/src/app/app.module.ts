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
import { HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";




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
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
