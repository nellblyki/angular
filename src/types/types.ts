export interface Users {
  //   users: {
  //     id: number;
  //     firstName: string;
  //     phone: string;
  //     email: string;
  //   }[];
  //   limit: number; ДЛЯ ДАММИ
  id: number;
  name: string;
  phone: string;
  email: string;
}
export interface Exchange {
  date: string;
  eur: Record<string, number>;
}
export interface ExchangeNameRate {
  name: string;
  rate: number;
}
export type ExchangeApiNew = Record<string, ExchangeNameRate>;
