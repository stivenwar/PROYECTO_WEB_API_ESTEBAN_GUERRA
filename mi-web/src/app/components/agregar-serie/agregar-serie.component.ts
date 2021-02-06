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

  constructor(public serieService: SerieServiceService){ }

  ngOnInit(): void {


  }
  createSerie(serie: Serie,form:NgForm) {
    this.series = serie;
    console.log(this.series)
      this.serieService.postSerie(serie)
        .subscribe(res => {

          console.log(res);
        })
    }





}
