import { Directive, ElementRef, EventEmitter, HostListener, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: 'appSlideMenuBack'
})
export class SlideMenuBackDirective {
  @Output() backButtonClick = new EventEmitter<Event>();
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  
  @HostListener('click', ['$event'])
  onClick(event: Event) {
    const element = this.el.nativeElement;
    if (element.classList.contains('p-slidemenu-backward')) {
      this.backButtonClick.emit(event);
    }
  } 
}
