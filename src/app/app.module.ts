import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HomeComponent } from './home/home.component';

var firebaseConfig = {
  apiKey: "AIzaSyCWmphhcv1ZTOvgTAHh0A6dz5QCqMRk37o",
  authDomain: "fir-project1-8dac5.firebaseapp.com",
  databaseURL: "https://fir-project1-8dac5.firebaseio.com",
  projectId: "fir-project1-8dac5",
  storageBucket: "fir-project1-8dac5.appspot.com",
  messagingSenderId: "323231490676",
  appId: "1:323231490676:web:32a8028bd7a2bd4173a721",
  measurementId: "G-47MDB9G3NJ"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
