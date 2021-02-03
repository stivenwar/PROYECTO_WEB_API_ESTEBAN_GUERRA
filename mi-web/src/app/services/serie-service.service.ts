import { Injectable } from '@angular/core';
import {Serie} from "../modelos/serie";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SerieServiceService {

  elegirSerie: Serie;
  serie: Serie[];
  readonly URL_API = 'http://localhost:4000/api/series';


  constructor(private http: HttpClient) {
    this.elegirSerie = new Serie()
  }

  getSerie(id:number){
    return this.http.get(this.URL_API+`/${id}`)
  }

  getSeries(){
    return this.http.get(this.URL_API);
  }
  postSerie(serie: Serie){
    return this.http.post(this.URL_API,serie)
  }
  deleteSerie(id:number){
    return this.http.delete(this.URL_API+`/${id}`)
  }

  updateSerie(serie: Serie){
    return this.http.put(this.URL_API+ `/${serie.id}`,serie)
  }


}
