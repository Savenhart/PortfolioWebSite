import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolioFront';
  items = [
    { title: 'Slide 1', src: '../assets/test 1.JPG', text: 'Potit chat !' },
    { title: 'Slide 2', src: '../assets/test 2.jpg', text: 'Gros dodo !' },
    { title: 'Slide 3', src: '../assets/test 3.jpg', text: 'Bleep !' },
  ];
}
