import { Component, OnInit } from '@angular/core';
import { VisiblePasswordPipe } from '../shared/pipes/visible-password.pipe';

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
  password:string="Andres123";
  isShow:boolean=false;
  heroe ={
    NOMBRE:'LOGAN',
    EDAD:100,
    PODER:'SALTAR',
    OTROSNOMBRES:{
      NOMBRE:'WOLVERINE'
  }
  }
  valorPromesa= new Promise<string>((resolver)=>{
    setTimeout(()=>{
      resolver('llego la data');
    },3000);
  });
   
  show = false;
  constructor() { }

  ngOnInit(): void {
  }
  darClick(){
    alert('Bienvenido');
  }
  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
}
