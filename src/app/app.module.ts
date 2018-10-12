import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { ListaModule } from './components/lista/lista.module';
import { LoginModule } from './components/login/login.module';
import { PrincipalModule } from './components/principal/principal.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeaderModule } from './shared/components/header/header.module';
import { ModalConfirmaComponent } from './shared/components/modal-confirma/modal-confirma.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
