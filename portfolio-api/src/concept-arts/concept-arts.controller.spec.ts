import { Test, TestingModule } from '@nestjs/testing';
import { ConceptArtsController } from './concept-arts.controller';

describe('ConceptArtsController', () => {
  let controller: ConceptArtsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConceptArtsController],
    }).compile();

    controller = module.get<ConceptArtsController>(ConceptArtsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
