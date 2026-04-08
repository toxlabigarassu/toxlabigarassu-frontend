import { Component } from '@angular/core';
import { HeroCarouselComponent } from '../../../core/components/hero-carousel/hero-carousel.component';
import { SiteHeaderComponent } from '../../../core/components/site-header/site-header.component';
import { FeatureCardsComponent } from '../../../core/components/feature-cards/feature-cards.component';
import { LawCardsComponent } from '../../../core/components/law-cards/law-cards.component';
import { ExamHighlightsComponent } from '../../../core/components/exam-highlights/exam-highlights.component';
import { LocationSectionComponent } from '../../../core/components/location-section/location-section.component';
import { SiteFooterComponent } from '../../../core/components/site-footer/site-footer.component';
import { CompanyConfig } from '../../../core/classes/company.config';
import { SiteTemplateConfig } from '../../../core/classes/site-template.config';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    SiteHeaderComponent,
    HeroCarouselComponent,
    FeatureCardsComponent,
    LawCardsComponent,
    ExamHighlightsComponent,
    LocationSectionComponent,
    SiteFooterComponent
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePageComponent {
  readonly company = CompanyConfig.data;
  readonly template = SiteTemplateConfig;
}
