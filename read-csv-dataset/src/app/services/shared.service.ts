import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQR_oADAt2a8aDjOmeOzFMyQDPGoHuZiRlMMXkQXqBiOo7qPcW3_sXsWa32QrSZargZWe1_LXg9WTSP/pubhtml";

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any> {
    return this.httpClient.get(this.url, { responseType: 'text' });
  }
}
