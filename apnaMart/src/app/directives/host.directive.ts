import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appHost]',
})
export class HostDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // this.ChangeBgColor('red');
  }

  @HostBinding('style.textShadow') textShadow: string;

  @HostListener('mouseover') onMouseOver() {
    this.textShadow = '2px 2px 3px green';
  }

  @HostListener('click') onClick() {
    window.alert('Host Element Clicked');
  }

  // step 9: update HostListener() for onMouseLeave()

  @HostListener('mouseleave') onMouseLeave() {
    this.ChangeBgColor('black');
    this.textShadow = '2px 2px 4px red';
  }

  ChangeBgColor(color: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', color);
  }
}
