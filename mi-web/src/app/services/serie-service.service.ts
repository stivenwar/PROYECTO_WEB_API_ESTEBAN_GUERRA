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


  constructor(private http: HttpClient) {
    this.elegirSerie = new Serie()
  }

    getSerie(_id: string){
    return this.http.get(this.URL_API+`/${_id}`)
  }

  getSeries(){
    return this.http.get(this.URL_API);
  }
  postSerie(serie: Serie){
    return this.http.post(this.URL_API,serie)
  }
  deleteSerie(_id:string){
    return this.http.delete(this.URL_API+`/${_id}`)
  }

  updateSerie(_id: string, serie: Serie){
    return this.http.put(this.URL_API+ `/${_id}`,serie)
  }


}
