import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'usapipe'
})

export class TestPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        return '+91 '+ value.toString();



    }
}