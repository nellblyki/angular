import { Component, inject, input } from '@angular/core';
import { Service } from '../service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-works',
  imports: [RouterLink],
  templateUrl: './works.html',
  styleUrl: './works.css',
})
export class Works {
 private ServiceCards = inject(Service)
 cards = this.ServiceCards.work_data
 slice = input.required<number>()
}
