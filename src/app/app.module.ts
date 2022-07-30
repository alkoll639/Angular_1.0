import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { EjemplosPipesComponent } from './ejemplos-pipes/ejemplos-pipes.component';
//Decorador funcion se ejecuta antes de iniciar una clase
@NgModule({
  //declarar componentes,pipes y directivas
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    NavbarComponent,
    EjemplosPipesComponent
  ],
  imports: [
  //importar las librerias
    BrowserModule,
    AppRoutingModule
  ],
  //declarar servicios
  providers: [],
  //cual es el componente que se va a ejecutar primero
  bootstrap: [AppComponent]
  //componente = css+html+ts
})
export class AppModule { }
