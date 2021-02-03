import { Component, OnInit } from '@angular/core';
import {SerieServiceService} from "../../services/serie-service.service";

import {ActivatedRoute, Router} from "@angular/router";
import {Serie} from "../../modelos/serie";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-editar-serie',
  templateUrl: './editar-serie.component.html',
  styleUrls: ['./editar-serie.component.css']
})
export class EditarSerieComponent implements OnInit {

  serie: any;

  constructor(public serieService: SerieServiceService,
              private router: Router,
              private activateRouter: ActivatedRoute) {
  }

  ngOnInit(): void {


  }

  editSerie(elegirSerie: number, serieForm: NgForm) {
    const id =this.activateRouter.snapshot.params.id;
    console.log(id)
    this.serieService.updateSerie(id)
      .subscribe(res => {
        console.log(res)
      });
  }
}
