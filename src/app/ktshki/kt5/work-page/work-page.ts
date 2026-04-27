import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Works } from "../works/works";
import { Footer } from "../footer/footer";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-work-page',
  imports: [Header, Works, Footer, RouterLink],
  templateUrl: './work-page.html',
  styleUrl: './work-page.css',
})
export class WorkPage {}
