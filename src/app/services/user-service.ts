import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, retry, tap } from 'rxjs';
import { Users } from '../../types/types';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);

  getUsers() {
    return this.http.get<Users[]>('https://jsonplaceholder.typicode.com/users').pipe(
      map((data) => data.filter((el) => el.id < 6)),
      retry(2),
      tap((data) => console.log(data)),
    );
  }

  getSingleUser(id: string) {
    return this.http.get<Users>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
