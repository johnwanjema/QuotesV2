import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteDetailsComponent } from './components/quote-details/quote-details.component';
import { TimePastPipe } from './pipes/time-past.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteDetailsComponent,
    TimePastPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
