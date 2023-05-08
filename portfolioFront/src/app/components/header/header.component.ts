import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  myFunction() {
    const video = document.getElementById('myVideo') as HTMLVideoElement;
    const btn = document.getElementById('myBtn');

    if (btn && video) {
      if (video.paused) {
        video.play();
        btn.innerHTML = 'Pause';
      } else {
        video.pause();
        btn.innerHTML = 'Play';
      }
    }
  }
}
