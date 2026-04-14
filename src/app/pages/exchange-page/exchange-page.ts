import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ExchangeService } from '../../services/exchange-service';
import { Exchange, ExchangeApiNew } from '../../../types/types';
import { CurrencyPipe, KeyValuePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exchange-page',
  imports: [KeyValuePipe, FormsModule, CurrencyPipe],
  templateUrl: './exchange-page.html',
  styleUrl: './exchange-page.css',
})
export class ExchangePage implements OnInit {
  inputFrom = signal<number | null>(null);
  Rates = signal<ExchangeApiNew | null>(null);
  valuta = signal('');
  valuta2 = signal('');
  Exchange_Rate = computed(() => {
    const val1 = this.valuta();
    const val2 = this.valuta2();
    const rates = this.Rates();
    console.log(val1, val2, rates);
    if (val1 && val2 && rates) {
      return rates[val1].rate / rates[val2].rate;
    }
    return null;
  });

  Result = computed(() => {
    const inputFrom = this.inputFrom();
    const rates = this.Exchange_Rate();

    if (inputFrom && rates) {
      console.log(inputFrom / rates);
      return inputFrom / rates;
    } else {
      return null;
    }
  });

  private exchange = inject(ExchangeService);
  ngOnInit(): void {
    this.exchange.getRatesFullNames().subscribe((result) => {
      this.Rates.set(result)
    });
  }
}
