import {Component, OnInit} from '@angular/core';
import {SerieServiceService} from "../../services/serie-service.service";
import {Serie} from "../../modelos/serie";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {

  serie : Serie;
  series : Serie;
  constructor(private activatedRoute: ActivatedRoute,
              private serieService: SerieServiceService) { }

  ngOnInit(): void {
    this.series = new Serie();
    this.getSerie();

  }
  getSerie(){
    const id = this.activatedRoute.snapshot.params.id
    console.log(id)
    this.serieService.getSerie(id)
      .subscribe(res => {
          this.serie =<Serie> res;
          console.log(this.serie)

        },
        error => console.error(error));
  }







}
