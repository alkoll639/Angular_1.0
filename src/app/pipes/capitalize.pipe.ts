import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    let arrayName=value.split(' '),
    capitalize=' ';
    arrayName.map(value=>capitalize+=`${value.charAt(0).toUpperCase()+value.slice(1).toLowerCase()} `)
    return capitalize;
  }

}
