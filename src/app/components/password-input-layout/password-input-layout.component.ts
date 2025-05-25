import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-password-input-layout',
  imports: [CommonModule],
  templateUrl: './password-input-layout.component.html',
  styleUrls: ['./password-input-layout.component.css']
})
export class PasswordInputLayoutComponent {
  @Input() tema: string = "";
  @Input() label: string = "";
  @Input() placeholder: string = "";
  @Input() password: string = "";

  @Output() passwordChange = new EventEmitter<string>();

  mostrarSenha: boolean = false;

  onInput(event: any) {
    this.password = event.target.value;
    this.passwordChange.emit(this.password);
  }

  toggleMostrarSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }
}
