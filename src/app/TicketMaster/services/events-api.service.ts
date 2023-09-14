import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class EventsApiService {
  apiKey='jscq1EtgLPLTtcPuIMDyetISGDKkYcCE';
  baseUrl='https://app.ticketmaster.com/discovery/v2/';
  constructor(private http:HttpClient) { }

  getSource(){
    return this.http.get(`${this.baseUrl}/events.json?apikey=${this.apiKey}`)
  }

}
