import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distance'
})
export class DistancePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (value > 1000) {
      return Math.round(value / 100) / 10 + ' km';
    }

    return Math.round(value) + ' m';
  }

}
