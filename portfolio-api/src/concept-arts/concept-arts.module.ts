import { Module } from '@nestjs/common';
import { ConceptArtsController } from './concept-arts.controller';
import { ConceptArtsService } from './concept-arts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConceptArt } from './model/concept-art.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConceptArt])],
  controllers: [ConceptArtsController],
  providers: [ConceptArtsService],
})
export class ConceptArtsModule {}
