import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerControlComponent } from './server-control/server-control.component';
import { ServerListComponent } from './server-list/server-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerControlComponent,
    ServerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
