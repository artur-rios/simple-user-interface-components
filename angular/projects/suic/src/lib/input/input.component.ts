import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'suic-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SuicInputComponent),
      multi: true,
    },
  ],
})
export class SuicInputComponent implements ControlValueAccessor {
  @Input() public placeholder: undefined | string;
  @Input() public type = 'text';

  public value: undefined | string;

  public writeValue(value: any): void {
    this.value = value;
  }

  public registerOnChange(fn: any): void {}

  public registerOnTouched(fn: any): void {}
}
