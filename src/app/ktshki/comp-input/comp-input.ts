import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-comp-input',
  imports: [],
  templateUrl: './comp-input.html',
  styleUrl: './comp-input.css',
})
export class CompInput {
  placeHolder = input<string>();
  type = input<string>();

  onAction = output<string>();
}
