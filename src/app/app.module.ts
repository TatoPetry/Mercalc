import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { AppRoutingModule } from './app-routing/app-routing.module';
import { ListaModule } from './components/lista/lista.module';
import { LoginModule } from './components/login/login.module';
import { PrincipalModule } from './components/principal/principal.module';
import { HeaderModule } from './shared/components/header/header.module';


export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),

    ListaModule,
    LoginModule,
    PrincipalModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
