import {Component, ElementRef, HostListener, OnInit} from '@angular/core';
import {SerieServiceService} from "../../services/serie-service.service";
import {Serie} from "../../modelos/serie";
import {NgForm} from "@angular/forms";

import {$} from "protractor";


@Component({
  selector: 'app-agregar-serie',
  templateUrl: './agregar-serie.component.html',
  styleUrls: ['./agregar-serie.component.css']
})
export class AgregarSerieComponent implements OnInit {

  series: Serie;
  miImagen: string;
  miCategoria:string;
  categoria:string;
  contador = 0;

  constructor(public serieService: SerieServiceService){ }

  ngOnInit(): void {


  }
  createSerie(serie: Serie,form:NgForm) {
    this.series = serie;
    console.log(this.series)
      this.serieService.postSerie(serie)
        .subscribe(res => {
          console.log(res);
          form.resetForm()
          location.reload()
        })
    }


  addImagen() {
    if (this.miImagen == ''){
      alert('no has introducido una foto');
    }else {
      if (this.serieService.elegirSerie.imagen[0] == '') {
        this.serieService.elegirSerie.imagen[0] = this.miImagen;
        console.log(this.miImagen)
      }else {
        this.serieService.elegirSerie.imagen.push(this.miImagen);
        this.miImagen = '';
      }
    }
    this.contador++;
    console.log(this.contador)
    if (this.contador==3){
      document.getElementById('boton').remove();
      this.contador = 0
    }

  }

  addCategoria() {
    if (this.miCategoria == ''){
      alert('no has seleccionado una categoria');
    }else {
      if (this.serieService.elegirSerie.categorias[0] == '') {
        this.serieService.elegirSerie.categorias[0] = this.miCategoria;
        this.categoria= this.miCategoria+',';
      }else {
        this.serieService.elegirSerie.categorias.push(this.miCategoria);
        this.categoria+= this.miCategoria+',';
        this.miCategoria = '';
      }

    }
    this.contador++;
    console.log(this.contador)
    if (this.contador==3){
      document.getElementById('botonCategoria').remove();
      this.contador = 0
    }

  }
}
