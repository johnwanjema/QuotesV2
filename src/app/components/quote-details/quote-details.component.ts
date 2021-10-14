import { Component, OnInit ,Input } from '@angular/core';
import { Quotes } from 'src/app/classes/quotes';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input()
  quote!: Quotes;
  @Input () musicianName: string | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
