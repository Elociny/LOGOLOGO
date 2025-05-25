import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-register-input-layout',
  imports: [],
  templateUrl: './register-input-layout.component.html',
  styleUrl: './register-input-layout.component.css'
})
export class RegisterInputLayoutComponent {
  @Input() tema: string = ""
  @Input() label: string = ""
  @Input() placeholder: string = ""
  @Input() type: string = ""

  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();

  onInput(event: any) {
    this.value = event.target.value;
    this.valueChange.emit(this.value);
  }
}

