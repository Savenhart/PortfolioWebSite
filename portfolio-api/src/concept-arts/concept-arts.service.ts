import { Injectable } from '@nestjs/common';
import { ConceptArt } from './model/concept-art.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ConceptArtsService {
  private readonly conceptArts: ConceptArt[] = [];

  constructor(
    @InjectRepository(ConceptArt)
    private conceptArtRepository: Repository<ConceptArt>,
  ) {}

  create(conceptArt: ConceptArt) {
    this.conceptArtRepository.save(conceptArt);
  }

  findAll(): Promise<ConceptArt[]> {
    return this.conceptArtRepository.find();
  }

  find(id: number): Promise<ConceptArt> {
    return this.conceptArtRepository.findOneBy({ id });
  }

  remove(id: number): Promise<any> {
    return this.conceptArtRepository.delete({id});
  }

  // update(id: number): Promise<ConceptArt> {
  //   return this.conceptArtRepository.update(id, true);
  // }

}
