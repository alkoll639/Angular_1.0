import { Pipe, PipeTransform } from '@angular/core';
import { __values } from 'tslib';

@Pipe({
  name: 'visiblepassword'
})
export class VisiblepasswordPipe implements PipeTransform {
  transform(value: string,isShow:boolean): string {   
      return (isShow)? value="*".repeat(value.length):value
  }
}
