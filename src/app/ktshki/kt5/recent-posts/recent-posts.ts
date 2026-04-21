import { Component, input } from '@angular/core';

@Component({
  selector: 'app-recent-posts',
  imports: [],
  templateUrl: './recent-posts.html',
  styleUrl: './recent-posts.css',
})
export class RecentPosts {
  title = input.required<string>();
  date = input.required<string>();
  text = input.required<string>();
  name = input.required<string>();
}
