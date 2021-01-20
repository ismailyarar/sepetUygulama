import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product';

@Pipe({
  name: 'filter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText?: string): Product[] {
    debugger
    filterText=filterText ? filterText.toLocaleLowerCase() : null;
    return filterText ? value.filter((p: Product)=> p.productName.toLocaleLowerCase().indexOf(filterText) !== -1):
    value;
  }

}
