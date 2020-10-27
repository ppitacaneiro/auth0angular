import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { PreciosComponent } from './components/precios/precios.component';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtegidaComponent,
    PreciosComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AuthModule.forRoot({
      domain: 'dev-7kwyq-sx.eu.auth0.com',
      clientId: 'hQZhDHCUjJTyM6WS1Z095zEG1qTCTFEW'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
