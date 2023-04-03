import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ConceptArtsService } from './concept-arts.service';
import { ConceptArt } from './model/concept-art.entity';

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
  async find(@Param() params): Promise<ConceptArt> {
    return this.conceptArtsService.find(params.id);
  }

  @Delete(':id')
  async remove(@Param() params): Promise<any> {
    return this.conceptArtsService.remove(params.id);
  }

  // @Put('id')
  // async update(@Param() params): Promise<ConceptArt> {
  //   return this.conceptArtsService.update(params.id);
  // }
}
