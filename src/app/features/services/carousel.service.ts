import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CarouselService {
  private intervalId?: ReturnType<typeof setInterval>;

  start(
    total: number,
    onTick: (index: number) => void,
    currentIndex: () => number,
    delayInSeconds = 10,
  ): void {
    this.stop();
    this.intervalId = setInterval(() => {
      onTick((currentIndex() + 1) % total);
    }, delayInSeconds * 1000);
  }

  stop(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  next(currentIndex: number, total: number): number {
    return (currentIndex + 1) % total;
  }

  previous(currentIndex: number, total: number): number {
    return (currentIndex - 1 + total) % total;
  }
}
