import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/products';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(value: Product[], filterText: string): Product[] {
    filterText = filterText?filterText.toLocaleLowerCase():""   //js bütük kücük duyarli aranan kelimeyi(filterText) küccültüyoruz
    return filterText?value
    .filter((p:Product)=>p.name.toLocaleLowerCase().indexOf(filterText)!==-1)   //prodoctnamei kücük harfe cevirir. varsa 0 dmner yoksa -1 döner
    :value;
  }

}
