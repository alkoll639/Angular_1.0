import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { EjemplosPipesComponent } from './ejemplos-pipes/ejemplos-pipes.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { NumcaracterPipe } from './pipes/numcaracter.pipe';
import { CapitalizarPipe } from './pipes/capitalizar.pipe';
import { VisiblepasswordPipe } from './pipes/visiblepassword.pipe';
import { LimitStringPipe } from './pipes/limit-string.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FormularioNgmodelComponent } from './formularios/formulario-ngmodel/formulario-ngmodel.component';
import { FormularioReactivoComponent } from './formularios/formulario-reactivo/formulario-reactivo.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Decorador funcion se ejecuta antes de iniciar una clase
@NgModule({
  //declarar componentes,pipes y directivas
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    NavbarComponent,
    EjemplosPipesComponent,
    MayusculasPipe,
    NumcaracterPipe,
    CapitalizarPipe,
    VisiblepasswordPipe,
    LimitStringPipe,
    CapitalizePipe,
    FormularioNgmodelComponent,
    FormularioReactivoComponent,    
  ],
  imports: [
  //importar las librerias
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  //declarar servicios
  providers: [],
  //cual es el componente que se va a ejecutar primero
  bootstrap: [AppComponent]
  //componente = css+html+ts
})
export class AppModule { }
