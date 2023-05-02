import {
  AfterViewInit,
  Component,
  ElementRef,
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
  listBlocks: BlockTextImage[];
  @ViewChild('blockTextImage', { static: false }) blockTextImage: ElementRef;

  constructor(private renderer: Renderer2) {
    this.listBlocks = [];
    this.blockTextImage = {} as ElementRef;
    this.listBlocks.push({
      id: 0,
      text: 'POUPOUPOU',
      image: '../../../assets/Chat 1.jpg',
      side: '',
    });
    this.listBlocks.push({
      id: 1,
      text: 'Squalala',
      image: '../../../assets/Chat 2.jpg',
      side: '',
    });
    this.listBlocks.push({
      id: 2,
      text: 'Pouet',
      image: '../../../assets/Chat 3.jpg',
      side: '',
    });
  }

  ngAfterViewInit() {
    const divContainer: HTMLDivElement = this.renderer.createElement('div');
    divContainer.className = 'container';
    for (const [index, list] of this.listBlocks.entries()) {
      const divID: HTMLDivElement = this.renderer.createElement('div');
      const divText: HTMLDivElement = this.renderer.createElement('div');
      const img: HTMLImageElement = this.renderer.createElement('img');
      const divRow: HTMLDivElement = this.renderer.createElement('div');
      divRow.className = 'row';

      divText.innerHTML = list.text;
      divText.className = 'col-9';
      img.src = list.image;
      img.className = 'col-3';

      console.log(index % 2 === 0);
      if (index % 2 === 0) {
        console.log(`${list.id}`);
        this.renderer.appendChild(divRow, divID);
        this.renderer.appendChild(divRow, divText);
        this.renderer.appendChild(divRow, img);
      } else {
        console.log(`${list.id}`);
        this.renderer.appendChild(divRow, img);
        this.renderer.appendChild(divRow, divID);
        this.renderer.appendChild(divRow, divText);
      }
      this.renderer.appendChild(divContainer, divRow);
    }
    this.renderer.appendChild(this.blockTextImage.nativeElement, divContainer);
  }
}
