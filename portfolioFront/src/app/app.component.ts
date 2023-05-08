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
        text: "Création d'objet photoréaliste avec Blender",
        image: '../assets/Modélisation 3D/CandyBowl.png',
        side: '',
      },
      {
        id: 1,
        text: "Conception de scène et d'asset pour jeux vidéo",
        image: '../assets/Modélisation 3D/EveeModularDungeon.png',
        side: '',
      },
      {
        id: 2,
        text: 'Modélisation de personnage stylizé avec les méthodes de sculptage',
        image: '../assets/Modélisation 3D/GrandMéchant.png',
        side: '',
      },
    ],
    [
      {
        id: 3,
        text: 'Créations de Concept art ',
        image: '../assets/Concept Art/E.T. Bond.png',
        side: '',
      },
      {
        id: 4,
        text: 'Conceptions de monstre',
        image: '../assets//Concept Art/Parasite champignon v2.png',
        side: '',
      },
      {
        id: 5,
        text: 'Création de portrait pour des personnages',
        image: '../assets/Concept Art/Druid.png',
        side: '',
      },
    ],
    [
      {
        id: 6,
        text: 'Conception et création de projet de jeu vidéo 2D et 3D',
        image: '../assets/Projets/Running-endless.gif',
        side: '',
      },
      {
        id: 7,
        text: 'Développement de site web avec Node.js et Angular',
        image: '../assets/Projets/LogoCernunAlt.png',
        side: '',
      },
      {
        id: 8,
        text: "Créations d'application cross-platform avec Node.js et Electron",
        image: '../assets/Projets/crossPlatfomApp.png',
        side: '',
      },
    ],
    [
      {
        id: 9,
        text: 'Composition de musique pour jeux vidéo',
        image: '../assets/Musique/PixelNote.png',
        side: '',
      },
      {
        id: 10,
        text: '<figure> <figcaption>Body Snatcher Main Theme:</figcaption><audio controls src="../assets/Musique/v_avNoel2.wav"> <a href="../assets/Musique/v_avNoel2.wav"> Download audio </a> </audio> </figure>',
        image: '../assets/Musique/PixelNote.png',
        side: '',
      },
    ],
    [
      {
        id: 12,
        text: 'Développeur web avec Angular, Node.js et Electron : https://github.com/Savenhart/',
        image: '../assets/About Me/node.webp',
        side: '',
      },
      {
        id: 13,
        text: 'Game designer et développeur de jeux vidéo avec Unity : https://savenhart.itch.io/',
        image: '../assets/About Me/unity.webp',
        side: '',
      },
      {
        id: 14,
        text: 'Modélisation 3D avec Blender',
        image: '../assets/About Me/blender-logo.webp',
        side: '',
      },
      {
        id: 15,
        text: 'Concept Art avec Photoshop',
        image: '../assets/About Me/photoshopLogo.webp',
        side: '',
      },
      {
        id: 16,
        text: 'Composition de musique avec Reaper',
        image: '../assets/About Me/logoReaper.jpg',
        side: '',
      },
      {
        id: 17,
        text: "Création d'assets 2D avec Aseprite",
        image: '../assets/About Me/aseprite-no-border.png',
        side: '',
      },
      {
        id: 17,
        text: 'Si vous désirez me contacter, vous pouvez à cette adresse : studio.cernun@gmail.com',
        image: '../assets/About Me/mailLogo.jpg',
        side: '',
      },
    ],
  ];

  title = 'portfolioFront';
  items = [
    [
      {
        title: 'Bol',
        src: '../assets/Modélisation 3D/CandyBowl.png',
        text: 'Bol photoréaliste',
      },
      {
        title: 'Donjon',
        src: '../assets/Modélisation 3D/EveeModularDungeon.png',
        text: 'Donjon avec des objets utilisable dans la création de niveau dans un jeu vidéo',
      },
      {
        title: 'Personnage stylizé',
        src: '../assets/Modélisation 3D/GrandMéchant.png',
        text: "Personnage stylizé sculpté à partir d'une sphère",
      },
      {
        title: 'Chambre',
        src: '../assets/Modélisation 3D/wipCybRoom.png',
        text: "Chambre a la lueur d'un néon",
      },
    ],
    [
      {
        title: 'E.T. Bond',
        src: '../assets/Concept Art/E.T. Bond.png',
        text: 'Affiche de film avec Sean Connery remplacé par un extraterrestre',
      },
      {
        title: 'Monstre',
        src: '../assets/Concept Art/Parasite champignon v2.png',
        text: 'Concept de monstre champignon',
      },
      {
        title: 'Reptilien',
        src: '../assets/Concept Art/Reptilien.png',
        text: 'Un Humain avec une tête de caméléon pour un concept de reptilien',
      },
      {
        title: 'Portrait',
        src: '../assets/Concept Art/Druid.png',
        text: "Portrait d'un druid",
      },
    ],
    [
      {
        title: 'Personnage de jeu',
        src: '../assets/Projets/Running-endless.gif',
        text: 'Personnage qui cours dans un jeu',
      },
      {
        title: 'Sprite sheet',
        src: '../assets/Projets/FactoryFloorSprite-Sheet.png',
        text: "Sprite sheet utilisé dans les décors d'un jeu 2D",
      },
      {
        title: 'Application CrossPlatform',
        src: '../assets/Projets/crossPlatfomApp.png',
        text: "Application cross platform d'affichage d'image en temps limité pour l'entrainement au dessin",
      },
    ],
    [
      {
        title: 'Musique',
        src: '../assets/Musique/PixelNote.png',
        text: '',
      },
    ],
    [
      {
        title: 'Logo',
        src: '../assets/LogoCernunAlt.png',
        text: 'Voici mon logo',
      },
    ],
  ];
}
