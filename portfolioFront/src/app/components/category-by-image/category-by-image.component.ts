import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-category-by-image',
  templateUrl: './category-by-image.component.html',
  styleUrls: ['./category-by-image.component.css'],
})
export class CategoryByImageComponent implements AfterViewInit {
  imagesToShow: string[];
  @ViewChild('blockImgCat', { static: false }) blockImgCat: ElementRef;

  constructor(private renderer: Renderer2) {
    this.imagesToShow = [];
    this.blockImgCat = {} as ElementRef;

    this.imagesToShow.push('../../../assets/ImgCateg/GrandMéchant.png');
    this.imagesToShow.push(
      '../../../assets/ImgCateg/LounissiTheoBichromie copie.webp'
    );
    this.imagesToShow.push('../../../assets/ImgCateg/AnimationRunning.gif');
    this.imagesToShow.push(
      '../../../assets/ImgCateg/synthwave-3941721_1280.webp'
    );
  }

  ngAfterViewInit(): void {
    const divContainer: HTMLDivElement = this.renderer.createElement('div');
    divContainer.className = 'row';
    divContainer.id = 'blockImgCat';

    for (const [index, img] of this.imagesToShow.entries()) {
      const divImg: HTMLImageElement = this.renderer.createElement('img');
      divImg.src = img;
      divImg.className = 'col-3 imgCat';
      divImg.style.zIndex = index.toString();
      this.renderer.appendChild(divContainer, divImg);
    }
    this.renderer.appendChild(this.blockImgCat.nativeElement, divContainer);
  }
}
