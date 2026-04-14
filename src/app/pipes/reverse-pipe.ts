import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    // const arr = value.split('');
    // arr.reverse();
    // return arr.join('');
    return value.split('').reverse().join('')
  }
}
