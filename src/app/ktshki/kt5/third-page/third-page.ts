import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../service';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-third-page',
  imports: [Header, Footer],
  templateUrl: './third-page.html',
  styleUrl: './third-page.css',
})
export class ThirdPage {
  private route = inject(ActivatedRoute);
  itemId = Number(this.route.snapshot.paramMap.get('id'));
  private DataService = inject(Service);
  cards = this.DataService.work_data.find((item) => item.id === this.itemId);
  content = this.cards?.content;
}
