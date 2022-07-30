import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'capitalizar'
})
export class CapitalizarPipe implements PipeTransform {
  transform(value: string): string {
    value=value.toLowerCase();
    var stringArr = value.split(" ");
    var result = "";
    var cap = stringArr.length;     
      for(var x = 0; x < cap; x++) {
        if(x === cap - 1) {
          result += stringArr[x].substring(0,1).toUpperCase() + stringArr[x].substring(1);
        } else {
          result += stringArr[x].substring(0,1).toUpperCase() + stringArr[x].substring(1)+ " ";
        }
      }         
  return result;
  }

}
