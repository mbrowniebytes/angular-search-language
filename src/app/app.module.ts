import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchLanguagesComponent } from './search-languages/search-languages.component';
import { SearchLanguagesService } from './search-languages.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchLanguagesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [SearchLanguagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
