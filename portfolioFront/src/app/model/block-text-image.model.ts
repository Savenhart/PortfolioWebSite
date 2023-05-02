export class BlockTextImage {
  id: number;
  text: string;
  image: string;
  side: string;

  constructor(id: number, text: string, image?: string, side?: string) {
    this.id = id;
    this.text = text;
    this.image = image || '';
    this.side = side || '';
  }
}
