import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-password-input-layout',
  templateUrl: './password-input-layout.component.html',
  styleUrls: ['./password-input-layout.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PasswordInputLayoutComponent),
    multi: true
  }]
})
export class PasswordInputLayoutComponent implements ControlValueAccessor {
  @Input() tema: string = "";
  @Input() label: string = "";
  @Input() placeholder: string = "";
   @Input() password: string = ""; 
  
  value: string = "";
  onChange: any = () => {};
  onTouched: any = () => {};

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
