import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user-service';
import { Users } from '../../../types/types';
@Component({
  selector: 'app-single-user-page',
  imports: [],
  templateUrl: './single-user-page.html',
  styleUrl: './single-user-page.css',
})
export class SingleUserPage {
  private route = inject(ActivatedRoute);
  userId = this.route.snapshot.paramMap.get('id');
  private userService = inject(UserService);
  users = signal<Users | null>(null);
  ngOnInit(): void {
    if (this.userId) {
      this.userService.getSingleUser(this.userId).subscribe((data) => {
        this.users.set(data);
      });
    }
  }
}
