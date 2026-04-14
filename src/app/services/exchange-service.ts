import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Exchange } from '../../types/types';
import { forkJoin, map, pipe } from 'rxjs';

type newItem = [
  string,
  {
    name: string;
    rate: number;
  },
];

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  private http = inject(HttpClient);
  getRates() {
    return this.http.get<Exchange>(
      'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json',
    );
  }
  getFullNames() {
    return this.http
      .get<
        Record<string, string>
      >('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
      .pipe();
  }
  getRatesFullNames() {
    return forkJoin({
      rates: this.getRates(),
      names: this.getFullNames(),
    }).pipe(
      map(({ rates, names }) => {
        const ratesArr = Object.entries(rates.eur);
        const ratesNamesArr = ratesArr.map(([code, rate]) => {
          let newItem: newItem | null = null;
          if (names[code]) {
            newItem = [
              code,
              {
                name: names[code],
                rate: rate,
              },
            ];
          }
          return newItem;
        });
        return Object.fromEntries(ratesNamesArr.filter((item) => item !== null));
      }),
    );
  }
}
