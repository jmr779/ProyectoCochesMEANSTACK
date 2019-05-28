import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CochesComponent } from './coches/coches.component';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {LogotipoAppComponent} from './logotipo-app/logotipo-app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CochesComponent,
    LogotipoAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
