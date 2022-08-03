import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'visiblePassword'
})
export class VisiblePasswordPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
