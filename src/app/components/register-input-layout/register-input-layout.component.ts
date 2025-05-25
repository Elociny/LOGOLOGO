import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-register-input-layout',
  templateUrl: './register-input-layout.component.html',
  styleUrls: ['./register-input-layout.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RegisterInputLayoutComponent),
      multi: true
    }
  ]
})
export class RegisterInputLayoutComponent implements ControlValueAccessor {
  @Input() tema: string = "";
  @Input() label: string = "";
  @Input() email: string = "";
  @Input() placeholder: string = "";
  @Input() value: string = ""

  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }


  updateValue(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }
}
