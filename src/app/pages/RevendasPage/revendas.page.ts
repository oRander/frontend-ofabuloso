import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ✅ importa o FormsModule

@Component({
  selector: 'app-revendas',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule], // ✅ adiciona aqui também
  templateUrl: './revendas.page.html',
})
export class RevendasPage {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  submitResaleForm() {
    // lógica de envio aqui (opcional)
  }
}
