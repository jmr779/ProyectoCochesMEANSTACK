import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CochesComponent } from './coches/coches.component';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {LogotipoAppComponent} from './logotipo-app/logotipo-app.component';
import { PopupComponent } from './popup/popup.component';
import { MatDialogModule } from  '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CochesComponent,
    LogotipoAppComponent,
    PopupComponent
  ],
  entryComponents: [PopupComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatGridListModule,
    MatDialogModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
