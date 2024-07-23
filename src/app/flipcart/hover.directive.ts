import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[appHover]' })
export class HoverDirective {

    @Input() appHover = ""; 
    constructor(private el: ElementRef) {}

  @HostListener("mouseenter") onMouseEnter() {
    this.highlight(this.appHover);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.highlight("");
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}