import {
  AfterViewInit,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { CarouselItemDirective } from '../../directives/carousel-item/carousel-item.directive';
import {
  AnimationBuilder,
  AnimationFactory,
  AnimationPlayer,
  animate,
  style,
} from '@angular/animations';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '.my-carousel-item',
})
export class CarouselItemElementDirective {}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements AfterViewInit {
  @ContentChildren(CarouselItemDirective)
  items: QueryList<CarouselItemDirective> =
    {} as QueryList<CarouselItemDirective>;
  @ViewChildren(CarouselItemElementDirective, { read: ElementRef })
  private itemsElements: QueryList<ElementRef> = {} as QueryList<ElementRef>;
  carouselWrapperStyle = {};

  @ViewChild('carousel') private carousel: ElementRef = {} as ElementRef;
  @Input() timing = '250ms ease-in';
  @Input() showControls = true;

  private player: AnimationPlayer = {} as AnimationPlayer;
  private itemWidth = 0;
  private currentSlide = 0;

  next() {
    if (this.currentSlide + 1 === this.items.length) this.currentSlide = -1;

    this.currentSlide = (this.currentSlide + 1) % this.items.length;

    const offset = this.currentSlide * this.itemWidth;

    const myAnimation: AnimationFactory = this.builder.build([
      animate(this.timing, style({ transform: `translateX(-${offset}px)` })),
    ]);

    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

  prev() {
    if (this.currentSlide === 0) this.currentSlide = this.items.length;

    this.currentSlide =
      (this.currentSlide - 1 + this.items.length) % this.items.length;

    const offset = this.currentSlide * this.itemWidth;

    const myAnimation: AnimationFactory = this.builder.build([
      animate(this.timing, style({ transform: `translateX(-${offset}px)` })),
    ]);

    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

  constructor(private builder: AnimationBuilder) {}

  ngAfterViewInit(): void {
    this.itemWidth =
      this.itemsElements.first.nativeElement.getBoundingClientRect().width;
    this.carouselWrapperStyle = {
      // width: `${this.itemWidth}px`,
      width: `300px`,
    };
  }
}
