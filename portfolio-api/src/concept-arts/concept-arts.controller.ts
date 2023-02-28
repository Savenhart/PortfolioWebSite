import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ConceptArtsService } from './concept-arts.service';
import { ConceptArt } from './model/concept-art';

@Controller('conceptArts')
export class ConceptArtsController {
  constructor(private conceptArtsService: ConceptArtsService) {}

  @Post()
  async create(@Body() conceptArt: ConceptArt) {
    this.conceptArtsService.create(conceptArt);
  }

  @Get()
  async findAll(): Promise<ConceptArt[]> {
    return this.conceptArtsService.findAll();
  }

  @Get(':id')
  find(@Param() params): string {
    return `The number is ${params.id}`;
  }
}
