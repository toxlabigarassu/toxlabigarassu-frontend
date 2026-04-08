import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  inject,
} from '@angular/core';
import { HeroSlide } from '../../interfaces/site-content.interface';
import { CarouselService } from '../../../features/services/carousel.service';
import { HeroTemplateConfig } from '../../classes/hero-template.config';

@Component({
  selector: 'app-hero-carousel',
  standalone: true,
  templateUrl: './hero-carousel.component.html',
  styleUrl: './hero-carousel.component.scss',
})
export class HeroCarouselComponent implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly carouselService = inject(CarouselService);

  @Input({ required: true }) slides: HeroSlide[] = [];
  @Input({ required: true }) whatsappLink!: string;

  currentSlide = 0;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId) || this.slides.length === 0) {
      return;
    }

    this.carouselService.start(
      this.slides.length,
      (index) => (this.currentSlide = index),
      () => this.currentSlide,
      HeroTemplateConfig.slideIntervalInSeconds,
    );
  }

  ngOnDestroy(): void {
    this.carouselService.stop();
  }

  selectSlide(index: number): void {
    this.currentSlide = index;
  }

  previousSlide(): void {
    this.currentSlide = this.carouselService.previous(
      this.currentSlide,
      this.slides.length,
    );
  }

  nextSlide(): void {
    this.currentSlide = this.carouselService.next(
      this.currentSlide,
      this.slides.length,
    );
  }
}
