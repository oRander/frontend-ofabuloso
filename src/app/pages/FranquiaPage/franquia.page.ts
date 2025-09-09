import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // ✅ IMPORTAÇÃO NECESSÁRIA

@Component({
  selector: 'app-franquia',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule], // ✅ ADICIONE AQUI
  templateUrl: './franquia.page.html',
})
export class FranquiaPage {
  formData = {
    nome: '',
    email: '',
    mensagem: ''
  };

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  enviarFormulario() {
    console.log('Dados enviados:', this.formData);
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');

    this.formData = {
      nome: '',
      email: '',
      mensagem: ''
    };
  }
}
