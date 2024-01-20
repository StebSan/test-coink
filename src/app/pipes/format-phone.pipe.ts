import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPhone'
})
export class FormatPhonePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }
    const part1 = value.substr(0, 3);
    const part2 = value.substr(2);
    return `${part1} - ${part2}`;
  }

}
