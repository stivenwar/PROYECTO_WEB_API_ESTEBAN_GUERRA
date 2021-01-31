import { Injectable } from '@angular/core';
import {Serie} from "../modelos/serie";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SerieServiceService {

  elegirSerie: Serie;
  serie: Serie[];
  readonly URL_API = 'http://localhost:4000/api/series';

  constructor(private Http: HttpClient) {
    this.elegirSerie = new Serie()
  }


}
