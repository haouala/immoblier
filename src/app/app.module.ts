import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import {ImageUploadModule} from "angular2-image-upload";
import { AnnuaireDetailComponent } from './annuaire-detail.component';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from 'angular2-google-maps/core';


import { AppRoutingModule, routedComponents } from './app-routing.module';

import { AppComponent } from './app.component';

import { AnnuaireDataService } from './annuaire-data.service';
import {UserDataService}   from './user-data.service';
import {LoginComponent} from './login.component';

@NgModule({
  declarations: [
    AppComponent,
    AnnuaireDetailComponent,
    routedComponents,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ImageUploadModule.forRoot(),
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpModule,
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyApuGA4fVivekLFDJVA4hREst-Oh7KsRes'
    })
  ],
  providers: [AnnuaireDataService,UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

