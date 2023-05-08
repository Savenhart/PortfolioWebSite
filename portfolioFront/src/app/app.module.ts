import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {
  CarouselComponent,
  CarouselItemElementDirective,
} from './components/carousel/carousel.component';
import { CarouselItemDirective } from './directives/carousel-item/carousel-item.directive';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { BlockTextImageComponent } from './components/block-text-image/block-text-image.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryByImageComponent } from './components/category-by-image/category-by-image.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    CarouselItemDirective,
    CarouselItemElementDirective,
    ImageUploadComponent,
    BlockTextImageComponent,
    HeaderComponent,
    CategoryByImageComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
