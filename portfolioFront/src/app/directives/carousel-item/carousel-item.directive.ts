import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCarouselItem]',
})
export class CarouselItemDirective {
  constructor(public template: TemplateRef<any>) {}
}
