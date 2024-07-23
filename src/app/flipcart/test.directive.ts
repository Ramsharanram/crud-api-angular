import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[highlight-button]' })
export class highlightButtonDirective {
    constructor(private eleRef: ElementRef) {
        this.eleRef.nativeElement.style.color ='red';
     }
    
}