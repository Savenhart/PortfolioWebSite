import { Test, TestingModule } from '@nestjs/testing';
import { ConceptArtsService } from './concept-arts.service';

describe('ConceptArtsService', () => {
  let service: ConceptArtsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConceptArtsService],
    }).compile();

    service = module.get<ConceptArtsService>(ConceptArtsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
