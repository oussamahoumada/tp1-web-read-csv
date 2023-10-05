import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import * as d3 from "d3";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTl47eJ5Wp5fPClL7Nrd_OvoEX83lVANefv7QUStPHnp6DhhvEqulkpgM4A-0Yhefa9hroaxJtzugVs/pubhtml";
  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any> {
    return this.httpClient.get(this.url, { responseType: 'text' });
  }

  getDataWithD3(): Observable<any> {
    return from(d3.html(this.url))
  }
}
