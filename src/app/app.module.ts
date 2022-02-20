import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddOfferComponent } from './features/add-offer/add-offer.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AddOfferComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
