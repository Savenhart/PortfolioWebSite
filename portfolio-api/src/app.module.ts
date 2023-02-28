import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConceptArtsModule } from './concept-arts/concept-arts.module';

@Module({
  imports: [ConceptArtsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
