import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.page.html',
})
export class HomePage {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // ✅ Adicione isto:
  carouselImages = [
    'assets/Images/home/pacoteBolinha.png',
    'assets/Images/home/pacoteCoxinha.png',
    'assets/Images/home/pacoteKibe.png'
  ];
}
