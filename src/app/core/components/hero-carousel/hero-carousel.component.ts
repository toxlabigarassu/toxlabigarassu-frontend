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
  private readonly swipeThreshold = 50;
  private isBrowser = false;
  private dragStartX = 0;
  private activePointerId: number | null = null;

  @Input({ required: true }) slides: HeroSlide[] = [];
  @Input({ required: true }) whatsappLink!: string;

  currentSlide = 0;
  trackIndex = 1;
  dragOffset = 0;
  isDragging = false;
  isTrackTransitionEnabled = true;
  isTransitioning = false;

  get renderedSlides(): HeroSlide[] {
    if (this.slides.length <= 1) {
      return this.slides;
    }

    return [this.slides[this.slides.length - 1], ...this.slides, this.slides[0]];
  }

  get trackTransform(): string {
    if (this.slides.length <= 1) {
      return `translate3d(${this.dragOffset}px, 0, 0)`;
    }

    return `translate3d(calc(-${this.trackIndex * 100}% + ${this.dragOffset}px), 0, 0)`;
  }

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (!this.isBrowser || this.slides.length === 0) {
      return;
    }

    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.carouselService.stop();
  }

  selectSlide(index: number): void {
    if (this.isTransitioning || index === this.currentSlide) {
      return;
    }

    this.currentSlide = index;
    this.trackIndex = index + 1;
    this.isTrackTransitionEnabled = true;
    this.isTransitioning = true;
    this.restartAutoplay();
  }

  previousSlide(): void {
    if (this.slides.length <= 1 || this.isTransitioning) {
      return;
    }

    this.isTrackTransitionEnabled = true;
    this.isTransitioning = true;
    this.trackIndex -= 1;
    this.currentSlide = this.carouselService.previous(
      this.currentSlide,
      this.slides.length,
    );
    this.restartAutoplay();
  }

  nextSlide(): void {
    if (this.slides.length <= 1 || this.isTransitioning) {
      return;
    }

    this.isTrackTransitionEnabled = true;
    this.isTransitioning = true;
    this.trackIndex += 1;
    this.currentSlide = this.carouselService.next(
      this.currentSlide,
      this.slides.length,
    );
    this.restartAutoplay();
  }

  onPointerDown(event: PointerEvent): void {
    if (!this.isBrowser || this.isInteractiveTarget(event.target)) {
      return;
    }

    if (event.currentTarget instanceof HTMLElement) {
      event.currentTarget.setPointerCapture(event.pointerId);
    }

    this.activePointerId = event.pointerId;
    this.isDragging = true;
    this.dragStartX = event.clientX;
    this.dragOffset = 0;
    this.carouselService.stop();
  }

  onPointerMove(event: PointerEvent): void {
    if (!this.isDragging || this.activePointerId !== event.pointerId) {
      return;
    }

    this.dragOffset = Math.max(Math.min(event.clientX - this.dragStartX, 180), -180);
  }

  onPointerUp(event: PointerEvent): void {
    if (!this.isDragging || this.activePointerId !== event.pointerId) {
      return;
    }

    if (event.currentTarget instanceof HTMLElement) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    const deltaX = event.clientX - this.dragStartX;
    this.finishSwipe(deltaX);
  }

  onPointerCancel(event?: PointerEvent): void {
    if (!this.isDragging) {
      return;
    }

    if (
      event &&
      this.activePointerId === event.pointerId &&
      event.currentTarget instanceof HTMLElement
    ) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    this.resetDrag();
    this.restartAutoplay();
  }

  onTrackTransitionEnd(): void {
    if (this.slides.length <= 1) {
      return;
    }

    if (this.trackIndex === 0) {
      this.isTrackTransitionEnabled = false;
      this.trackIndex = this.slides.length;
    } else if (this.trackIndex === this.slides.length + 1) {
      this.isTrackTransitionEnabled = false;
      this.trackIndex = 1;
    }

    this.isTransitioning = false;
  }

  private finishSwipe(deltaX: number): void {
    if (deltaX <= -this.swipeThreshold) {
      this.nextSlide();
    } else if (deltaX >= this.swipeThreshold) {
      this.previousSlide();
    } else {
      this.isTrackTransitionEnabled = true;
      this.isTransitioning = false;
      this.restartAutoplay();
    }

    this.resetDrag();
  }

  private resetDrag(): void {
    this.isDragging = false;
    this.activePointerId = null;
    this.dragOffset = 0;
  }

  private startAutoplay(): void {
    this.carouselService.start(
      this.slides.length,
      (index) => {
        if (this.slides.length <= 1 || this.isTransitioning) {
          return;
        }

        this.isTrackTransitionEnabled = true;
        this.isTransitioning = true;
        this.currentSlide = index;
        this.trackIndex += 1;
      },
      () => this.currentSlide,
      HeroTemplateConfig.slideIntervalInSeconds,
    );
  }

  private restartAutoplay(): void {
    if (!this.isBrowser || this.slides.length === 0) {
      return;
    }

    this.startAutoplay();
  }

  private isInteractiveTarget(target: EventTarget | null): boolean {
    return target instanceof Element && !!target.closest('button, a');
  }
}
