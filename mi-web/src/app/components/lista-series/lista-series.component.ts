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
    this.images = ['https://variety.com/wp-content/uploads/2019/12/black-widow-scarjo.jpg?w=681&h=383&crop=1',
      'https://cnet2.cbsistatic.com/img/Svj2xavsr38K9narVRb1DviKcw0=/1200x630/2017/08/03/6d499a84-5970-4580-b131-a6f8195c05de/marvelinfinitywar-blackwidow.jpg',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/scarlettjohansson-blackwidow-avengers2-1572302234.jpg?crop=0.427xw:0.807xh;0.340xw,0.190xh&resize=480:*']
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
