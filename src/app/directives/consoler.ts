import { Directive, ElementRef, HostBinding, HostListener, inject, signal } from '@angular/core';

@Directive({
  selector: '[consoler]',
})
export class Consoler {
  private element = inject(ElementRef);

  @HostListener('click') log() {
    console.log(this.element.nativeElement.textContent);
  }
  @HostBinding('style.color') color = 'purple';
  @HostBinding('style.font-size') size = '36px';
}
