import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitString'
})
export class LimitStringPipe implements PipeTransform {

  transform(value: string,posisciones:number): string {
    return `${value.substring(0,posisciones)}...`;
  }

}
