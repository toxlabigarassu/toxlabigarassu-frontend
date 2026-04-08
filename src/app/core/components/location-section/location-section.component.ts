import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-location-section',
  standalone: true,
  templateUrl: './location-section.component.html',
  styleUrl: './location-section.component.scss'
})
export class LocationSectionComponent implements OnChanges {
  private readonly sanitizer = inject(DomSanitizer);

  @Input({ required: true }) whatsappLink!: string;
  @Input({ required: true }) mapEmbedUrl!: string;

  safeMapEmbedUrl!: SafeResourceUrl;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['mapEmbedUrl']?.currentValue) {
      this.safeMapEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.mapEmbedUrl);
    }
  }
}
