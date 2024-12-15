import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

type InputTypes = "number" | "text";

@Component({
  selector: 'app-input-principal',
  standalone: true,
  imports: [],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPrincipalComponent),
      multi: true
    }
  ],
  templateUrl: './input-principal.component.html',
  styleUrl: './input-principal.component.scss'
})
export class InputPrincipalComponent {

  @Input()
  type: InputTypes = "number";

  @Input()
  placeholder: string = "";

  @Input()
  label: string = "";

  @Input()
  inputName: string = "";

  value: string = '';
  onChange: any = () => {};
  onTouched: any = () => {};

  onInput(event: Event){
    const value = (event.target as HTMLInputElement).value;
    this.onChange(value);
  }

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange =fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
