import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './AppComponent/app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BillHistoryComponent } from './bill-history/bill-history.component';

@NgModule({
  declarations: [
    AppComponent,
    BillHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
