import { Component, inject } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-works',
  imports: [],
  templateUrl: './works.html',
  styleUrl: './works.css',
})
export class Works {
 private ServiceCards = inject(Service)
 cards = this.ServiceCards.work_data
}
