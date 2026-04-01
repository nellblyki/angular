import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-collaps',
  imports: [],
  templateUrl: './collaps.html',
  styleUrl: './collaps.css',
})
export class Collaps {
  show = signal<boolean>(false);
  toggleCollaps() {
    this.show.update((prev) => !prev);
  }
  title = input.required<string>();
  text = input.required<string>();
}
