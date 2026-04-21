import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive,RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
