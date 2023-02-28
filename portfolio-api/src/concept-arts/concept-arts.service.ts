import { Injectable } from '@nestjs/common';
import { ConceptArt } from './model/concept-art';

@Injectable()
export class ConceptArtsService {
  private readonly conceptArts: ConceptArt[] = [];

  create(conceptArt: ConceptArt) {
    this.conceptArts.push(conceptArt);
  }

  findAll(): ConceptArt[] {
    return this.conceptArts;
  }
}
