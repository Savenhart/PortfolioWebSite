import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { BlockTextImage } from 'src/app/model/block-text-image.model';

@Component({
  selector: 'app-block-text-image',
  templateUrl: './block-text-image.component.html',
  styleUrls: ['./block-text-image.component.css'],
})
export class BlockTextImageComponent implements AfterViewInit {
  @Input() listBlocks: BlockTextImage[];
  @Input() categoryName = '';
  @ViewChild('blockTextImage', { static: false }) blockTextImage: ElementRef;

  constructor(private renderer: Renderer2) {
    this.listBlocks = [];
    this.blockTextImage = {} as ElementRef;
  }

  ngAfterViewInit() {
    const divContainer: HTMLDivElement = this.renderer.createElement('div');
    for (const [index, list] of this.listBlocks.entries()) {
      const divID: HTMLDivElement = this.renderer.createElement('div');
      const divText: HTMLDivElement = this.renderer.createElement('div');
      const img: HTMLImageElement = this.renderer.createElement('img');
      const divRow: HTMLDivElement = this.renderer.createElement('div');
      divRow.className = 'row spaceDiv';

      divText.innerHTML = list.text;
      divText.className = 'col-9 borderText blockHeight';
      img.src = list.image;
      img.className = 'col-3';

      if (index % 2 === 0) {
        this.renderer.appendChild(divRow, divID);
        this.renderer.appendChild(divRow, divText);
        this.renderer.appendChild(divRow, img);
      } else {
        this.renderer.appendChild(divRow, img);
        this.renderer.appendChild(divRow, divID);
        this.renderer.appendChild(divRow, divText);
      }
      this.renderer.appendChild(divContainer, divRow);
    }
    this.renderer.appendChild(this.blockTextImage.nativeElement, divContainer);
  }
}
