import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-site-footer',
  standalone: true,
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss'
})
export class SiteFooterComponent {
  @Input({ required: true }) title!: string;
  @Input({ required: true }) subtitle!: string;
  @Input({ required: true }) phone!: string;
  @Input({ required: true }) email!: string;
  @Input({ required: true }) instagramHandle!: string;
  @Input({ required: true }) instagramLink!: string;
  @Input({ required: true }) whatsappLink!: string;
  @Input({ required: true }) businessHours: string[] = [];
  @Input({ required: true }) addressLines: string[] = [];
}
