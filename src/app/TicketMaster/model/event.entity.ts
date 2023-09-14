export class Event {
  name: string;
  url: string;
  dates: Dates;
  PriceRanges: boolean;
  Venues: string;

  constructor() {
    this.name='';
    this.url='';
    this.dates=new Dates();
    this.PriceRanges=true;
    this.Venues='';
  }
}

class Dates{
  start:Start;
  constructor() {
    this.start=new Start();
  }
}
class Start{
  localDate:string;
  constructor() {
    this.localDate='';
  }
}
