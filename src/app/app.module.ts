import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { DisplayComponent } from './display/display.component';
import { DisplayItemComponent } from './display-item/display-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DisplayComponent,
    DisplayItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
