import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {
  CarouselComponent,
  CarouselItemElement,
} from './components/carousel/carousel.component';
import { CarouselItemDirective } from './directives/carousel-item/carousel-item.directive';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CarouselItemDirective,
    CarouselItemElement,
    ImageUploadComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
