import { Component, OnInit } from '@angular/core';
import { Ipersona } from 'src/app/interfaces/persona.interface';

@Component({
  selector: 'app-formulario-ngmodel',
  templateUrl: './formulario-ngmodel.component.html',
  styleUrls: ['./formulario-ngmodel.component.css']
})
export class FormularioNgmodelComponent implements OnInit {

  persona:Ipersona={} as Ipersona;
  constructor() { }
  ngOnInit(): void {
  }
  
  guardar(){
    console.log(this.persona);
  }
}
