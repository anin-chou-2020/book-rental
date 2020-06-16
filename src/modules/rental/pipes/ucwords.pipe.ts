import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ucwords'
})
export class UcwordsPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let valueArr = value.split(' ');
    valueArr = valueArr.map(values => values[0].toUpperCase() + values.substring(1));
    return valueArr.join(' ');
  }

}
