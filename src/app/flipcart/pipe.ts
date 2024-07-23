import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'mypipe'
})

export class INRPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        // if (value == null) return '';

        // Use the Internationalization API to format the number as currency
        var aa = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        return aa.format(value);
      
    }
}