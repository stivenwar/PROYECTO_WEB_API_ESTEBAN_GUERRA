import { Component, OnInit } from '@angular/core';
import {SerieServiceService} from "../../services/serie-service.service";
import {Serie} from "../../modelos/serie";
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-agregar-serie',
  templateUrl: './agregar-serie.component.html',
  styleUrls: ['./agregar-serie.component.css']
})
export class AgregarSerieComponent implements OnInit {



  constructor(public serieService: SerieServiceService){ }

  ngOnInit(): void {

  }

  createSerie(serie: Serie,form:NgForm) {
    this.serieService.postSerie(serie)
      .subscribe(res => {
        console.log(res);

      })
  }
}
