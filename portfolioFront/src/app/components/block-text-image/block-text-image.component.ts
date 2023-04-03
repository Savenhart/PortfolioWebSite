import { Component } from '@angular/core';
import { BlockTextImage } from 'src/app/model/block-text-image.model';

@Component({
  selector: 'app-block-text-image',
  templateUrl: './block-text-image.component.html',
  styleUrls: ['./block-text-image.component.css'],
})
export class BlockTextImageComponent {
  listBlocks: BlockTextImage[];

  constructor() {
    this.listBlocks = [];
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

    for (const [index, list] of this.listBlocks.entries()) {
      if (index % 2 != 0) {
        list.side = 'justify-content-start';
      } else {
        list.side = 'justify-content-end';
      }
    }
  }
}
