import { Component, inject, OnInit, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { Users } from '../../../types/types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users-page',
  imports: [RouterLink],
  templateUrl: './users-page.html',
  styleUrl: './users-page.css',
})
export class UsersPage implements OnInit {
  private userService = inject(UserService);
  users = signal<Users[]>([]);
  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users.set(data);
    });
  }
}
