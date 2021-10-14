import { Component } from '@angular/core';
import { Quote, } from './classes/quotes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quote';

  quotes = [
    new Quote(1, 'Watch Finding Nemo', `wanje`, 0 ,2 ,'wanjema' ,new Date),
  ]
}
