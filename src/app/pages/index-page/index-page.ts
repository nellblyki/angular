import { Component } from '@angular/core';
import { Collaps } from "../../components/collaps/collaps";
import { ReversePipe } from '../../pipes/reverse-pipe';

@Component({
  selector: 'app-index-page',
  imports: [Collaps, ReversePipe],
  templateUrl: './index-page.html',
  styleUrl: './index-page.css',
})
export class IndexPage {}
