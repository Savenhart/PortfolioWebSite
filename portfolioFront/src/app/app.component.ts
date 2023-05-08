import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  categoryName = [
    'Modélisation 3D',
    'Concept Art',
    'Projets',
    'Musique',
    'A propos de moi',
  ];

  blockTextData = [
    [
      {
        id: 0,
        text: 'POUPOUPOU',
        image: '../assets/Chat 1.jpg',
        side: '',
      },
      {
        id: 1,
        text: 'Squalala',
        image: '../assets/Chat 2.jpg',
        side: '',
      },
      {
        id: 2,
        text: 'Pouet',
        image: '../assets/Chat 3.jpg',
        side: '',
      },
    ],
    [
      {
        id: 3,
        text: 'MOJLQJSF',
        image: '../assets/test 1.JPG',
        side: '',
      },
      {
        id: 4,
        text: 'VVCHJCKHC',
        image: '../assets/test 2.jpg',
        side: '',
      },
      {
        id: 5,
        text: 'PPPQSPDOIQPOSMLD',
        image: '../assets/test 3.jpg',
        side: '',
      },
    ],
    [
      {
        id: 6,
        text: 'MOJLQJSF',
        image: '../assets/test 1.JPG',
        side: '',
      },
      {
        id: 7,
        text: 'VVCHJCKHC',
        image: '../assets/test 2.jpg',
        side: '',
      },
      {
        id: 8,
        text: 'PPPQSPDOIQPOSMLD',
        image: '../assets/test 3.jpg',
        side: '',
      },
    ],
    [
      {
        id: 9,
        text: 'MOJLQJSF',
        image: '../assets/test 1.JPG',
        side: '',
      },
      {
        id: 10,
        text: 'VVCHJCKHC',
        image: '../assets/test 2.jpg',
        side: '',
      },
      {
        id: 11,
        text: 'PPPQSPDOIQPOSMLD',
        image: '../assets/test 3.jpg',
        side: '',
      },
    ],
    [
      {
        id: 12,
        text: 'MOJLQJSF',
        image: '../assets/test 1.JPG',
        side: '',
      },
      {
        id: 13,
        text: 'VVCHJCKHC',
        image: '../assets/test 2.jpg',
        side: '',
      },
      {
        id: 14,
        text: 'PPPQSPDOIQPOSMLD',
        image: '../assets/test 3.jpg',
        side: '',
      },
    ],
  ];

  title = 'portfolioFront';
  items = [
    [
      { title: 'Slide 1', src: '../assets/test 1.JPG', text: 'Potit chat !' },
      { title: 'Slide 2', src: '../assets/test 2.jpg', text: 'Gros dodo !' },
      { title: 'Slide 3', src: '../assets/test 3.jpg', text: 'Bleep !' },
    ],
    [
      {
        title: 'Slide 1',
        src: '../assets/LogoCernunAlt.png',
        text: 'sdfsdf chat !',
      },
      { title: 'Slide 2', src: '../assets/test 2.jpg', text: 'Gros sdfsdfs !' },
      { title: 'Slide 3', src: '../assets/test 3.jpg', text: 'Blsdfsdfseep !' },
    ],
    [
      {
        title: 'Slide 1',
        src: '../assets/LogoCernunAlt.png',
        text: 'sdfsdf chat !',
      },
      { title: 'Slide 2', src: '../assets/test 2.jpg', text: 'Gros sdfsdfs !' },
      { title: 'Slide 3', src: '../assets/test 3.jpg', text: 'Blsdfsdfseep !' },
    ],
    [
      {
        title: 'Slide 1',
        src: '../assets/LogoCernunAlt.png',
        text: 'sdfsdf chat !',
      },
      { title: 'Slide 2', src: '../assets/test 2.jpg', text: 'Gros sdfsdfs !' },
      { title: 'Slide 3', src: '../assets/test 3.jpg', text: 'Blsdfsdfseep !' },
    ],
    [
      {
        title: 'Slide 1',
        src: '../assets/LogoCernunAlt.png',
        text: 'sdfsdf chat !',
      },
      { title: 'Slide 2', src: '../assets/test 2.jpg', text: 'Gros sdfsdfs !' },
      { title: 'Slide 3', src: '../assets/test 3.jpg', text: 'Blsdfsdfseep !' },
    ],
  ];
}
