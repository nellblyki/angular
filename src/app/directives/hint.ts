import { Directive, ElementRef, HostBinding, HostListener, inject, input } from '@angular/core';

@Directive({
  selector: '[appHint]',
})
export class Hint {
  private element = inject(ElementRef);
  hintbox?: HTMLDivElement;
  hintText = input.required<string>();
  fired = false;

  @HostBinding('style.border') border = '2px solid red';
  @HostBinding('style.padding') padding = '5px';
  @HostBinding('style.width') width = 'max-content';
  @HostBinding('style.border-radius') br = '10px';

  @HostListener('mouseenter') onEnter() {
    this.border = 'none';
    if (!this.fired) {
      this.hintbox = document.createElement('div');
      this.hintbox.classList.add('hint');

      this.hintbox.textContent = this.hintText();

      document.body.appendChild(this.hintbox);

      this.fired = true;

      setTimeout(() => {
        this.hintbox?.classList.add('HintBox_Hide');
      }, 2500);

      setTimeout(() => {
        this.hintbox?.remove();
        this.fired= false
      }, 3000);
    }
  }
  @HostListener('mouseleave') onLeave() {
    this.border = '2px solid red';
  }
}
