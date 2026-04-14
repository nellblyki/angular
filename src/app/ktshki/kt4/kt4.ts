import { Component, input, Input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CompInput } from '../comp-input/comp-input';
import { CompButton } from '../comp-button/comp-button';

@Component({
  selector: 'app-kt4',
  imports: [FormsModule, CompInput, CompButton],
  templateUrl: './kt4.html',
  styleUrl: './kt4.css',
})
export class Kt4 {
  log(val: string) {
    console.log(val);
  }

  name = signal('');
  email = signal('');
  phone = signal('');
  date = signal('');
  clickHandler() {
    console.log(`Имя : ${this.name()}`);
    console.log(`Телефон : ${this.phone()}`);
    console.log(`Почта : ${this.email()}`);
    console.log(`Дата : ${this.date()}`);
  }
}
