import { Component } from '@angular/core';
import { Collaps } from "../../components/collaps/collaps";
import { ReversePipe } from '../../pipes/reverse-pipe';
import { Consoler } from '../../directives/consoler';
import { Hint } from "../../directives/hint";

@Component({
  selector: 'app-index-page',
  imports: [Collaps, ReversePipe, Consoler, Hint],
  templateUrl: './index-page.html',
  styleUrl: './index-page.css',
})
export class IndexPage {}
