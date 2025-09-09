import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lojas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lojas.page.html',
})
export class LojasPage {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
