import { Component } from '@angular/core';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { RecentPosts } from "./recent-posts/recent-posts";
import { Works } from "./works/works";

@Component({
  selector: 'app-kt5',
  imports: [Header, Footer, RecentPosts, Works],
  templateUrl: './kt5.html',
  styleUrl: './kt5.css',
})
export class Kt5 {}
