import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="input-and-label">
  <label>{{ label }}</label>
  <input type="{{ type }}" placeholder="{{ placeholder }}">
  </div>`,
  styleUrl: './input.component.sass'
})
export class InputComponent {
  @Input() label = ''
  @Input() type = ''
  @Input () placeholder = ''
}
