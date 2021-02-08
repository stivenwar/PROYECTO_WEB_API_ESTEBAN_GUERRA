import { Component, OnInit } from '@angular/core';
import {Serie} from "../../modelos/serie";
import {SerieServiceService} from "../../services/serie-service.service";

@Component({
  selector: 'app-lista-series',
  templateUrl: './lista-series.component.html',
  styleUrls: ['./lista-series.component.css']
})
export class ListaSeriesComponent implements OnInit {

  series: Serie[];
  images: string[];


  constructor(private serieService: SerieServiceService) { }

  ngOnInit(): void {
    this.getSeries();
  }

  getSeries(){
    this.serieService.getSeries()
      .subscribe(res => {
        this.series =<Serie[]> res;

        console.log(this.series)
      },
        error => console.error(error));
  }

  deleteSerie(_id: string) {
    console.log(_id)
    if (confirm('seguro que deseas eliminarlo')){
      this.serieService.deleteSerie(_id)
        .subscribe(res => {
          this.getSeries();

        });
    }

  }

}
