import { Component, forwardRef, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "app-input",
  standalone: true,
  imports: [CommonModule],
  template: ` <div class="input-and-label">
    <label>{{ label }}</label>
    <input type="{{ type }}" placeholder="{{ placeholder }}" />
  </div>`,
  styleUrl: "./input.component.sass",
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  onChange: any = () => {};
  onTouch: any = () => {};
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  input: string | number = ""

  writeValue(input: string) {
    this.input = input;
  }

  @Input() label = "";
  @Input() type = "";
  @Input() placeholder = "";
}
