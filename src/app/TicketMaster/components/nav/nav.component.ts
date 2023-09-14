import {Component, OnInit} from '@angular/core';
import {EventsApiService} from "../../services/events-api.service";
import {Event} from "../../model/event.entity";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  events: Array<Event> = [];
constructor(private  eventsApi: EventsApiService,
            ) {
}

  ngOnInit(): void {
    this.eventsApi.getSource()
      .subscribe((data: any) => {
        this.events = data['_embedded']['events'];
        console.log(this.events);
      })
  }
}
