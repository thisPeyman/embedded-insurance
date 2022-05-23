import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'optionName',
})
export class OptionNamePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case 'natural_disaster':
        return 'بلایای طبیعی';
      case 'glass_break':
        return 'شکست شیشه';
      case 'insteal':
        return 'سرقت';
      case 'splash_paint':
        return 'پاشیدن رنگ';
      case 'transportation':
        return 'ایاب و ذهاب';
      case 'price_fluctuation':
        return 'نوسانات قیمت';
      case 'base_price':
        return 'قیمت پایه';

      default:
        return value;
    }
  }
}
