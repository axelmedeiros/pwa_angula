import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Angula Material Modules
import { MatToolbarModule, 
         MatCardModule } from '@angular/material';
import { ImgCardComponent } from './img-card/img-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgCardComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
