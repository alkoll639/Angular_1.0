import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplos-pipes',
  templateUrl: './ejemplos-pipes.component.html',
  styleUrls: ['./ejemplos-pipes.component.css']
})
export class EjemplosPipesComponent implements OnInit {


  nombre:string="dieGo mauricio palaCioS";
  PI:number=Math.PI;
  porcentaje:number=0.25;
  salario:number=1000000;
  fecha:Date=new Date;
  constructor() { }

  ngOnInit(): void {
  }

}
