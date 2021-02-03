import {Component, Input, OnInit} from '@angular/core';
import {SerieServiceService} from "../../services/serie-service.service";
import {Serie} from "../../modelos/serie";
import {ActivatedRoute} from "@angular/router";
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {


  serie:any;


  constructor(private activatedRoute: ActivatedRoute,
              private serieService: SerieServiceService) { }

  ngOnInit(): void {

  this.getSerie();
  }

  getSerie(){
    const id = this.activatedRoute.snapshot.params.id;
    console.log(id)
    this.serie = this.serieService.getSerie(id)
      .subscribe(res =>{
          console.log(res)
        this.serie = res;

    });


  }


}
