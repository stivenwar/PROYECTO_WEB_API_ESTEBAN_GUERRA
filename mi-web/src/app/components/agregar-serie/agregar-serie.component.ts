import { Component, OnInit } from '@angular/core';
import {SerieServiceService} from "../../services/serie-service.service";
import {Serie} from "../../modelos/serie";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-agregar-serie',
  templateUrl: './agregar-serie.component.html',
  styleUrls: ['./agregar-serie.component.css']
})
export class AgregarSerieComponent implements OnInit {

  constructor(private serieService: SerieServiceService) { }

  ngOnInit(): void {
    this.serieService.getSeries()
  }

  createSerie(serie: Serie, serieForm: NgForm) {
    this.serieService.postSerie(serie)
      .subscribe(res => {
        console.log(res);
        this.serieService.getSeries()
      })
  }
}
