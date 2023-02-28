import { Module } from '@nestjs/common';
import { ConceptArtsController } from './concept-arts.controller';
import { ConceptArtsService } from './concept-arts.service';

@Module({
  controllers: [ConceptArtsController],
  providers: [ConceptArtsService],
})
export class ConceptArtsModule {}
