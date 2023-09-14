import { Component, Input } from '@angular/core';
import {Event} from "../../model/event.entity";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  title='TicketMaster';
  @Input() events: Array<Event>=[];
}
