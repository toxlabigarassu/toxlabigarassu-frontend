import { Component, Input } from '@angular/core';
import { FeatureCard } from '../../interfaces/site-content.interface';

@Component({
  selector: 'app-feature-cards',
  standalone: true,
  templateUrl: './feature-cards.component.html',
  styleUrl: './feature-cards.component.scss'
})
export class FeatureCardsComponent {
  @Input({ required: true }) cards: FeatureCard[] = [];
}
