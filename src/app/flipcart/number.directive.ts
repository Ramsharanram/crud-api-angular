import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[appMinLength]' })
export class PhoneNumberDirective {
    @Input('appMinLength') minLength: number = 5;
    constructor(private el: ElementRef) {
        
     }

     @HostListener('input') onInput() {
        const inputValue: string = this.el.nativeElement.value;
        if (inputValue.length < this.minLength) {
          alert(`Minimum length is ${this.minLength} characters.`);
        } else {
          this.el.nativeElement.setCustomValidity('');
        }
}
}