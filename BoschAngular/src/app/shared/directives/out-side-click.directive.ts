import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appOutSideClick]'
})
export class OutSideClickDirective {
  @Output() clickOutside = new EventEmitter<void>();
  constructor(private elementRef: ElementRef) {}
  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: HTMLElement) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit();
    }
  }
}
