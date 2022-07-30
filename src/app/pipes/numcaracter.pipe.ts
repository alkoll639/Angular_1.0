import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numcaracter'
})
export class NumcaracterPipe implements PipeTransform {

  transform(word: string): number {  
    return word.length
  }

}
