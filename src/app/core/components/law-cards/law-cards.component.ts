import { Component, Input } from '@angular/core';
import { LawCard } from '../../interfaces/site-content.interface';

@Component({
  selector: 'app-law-cards',
  standalone: true,
  templateUrl: './law-cards.component.html',
  styleUrl: './law-cards.component.scss'
})
export class LawCardsComponent {
  @Input({ required: true }) cards: LawCard[] = [];
}
