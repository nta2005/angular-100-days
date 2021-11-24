import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adult',
  //pure: false
})
export class AdultPipe implements PipeTransform {

  transform(value: any) {
    console.log('adult pipe run')
    return value.filter((v: any) => v.age >= 18)
  }

}
