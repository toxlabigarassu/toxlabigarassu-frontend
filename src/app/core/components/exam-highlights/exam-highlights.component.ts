import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exam-highlights',
  standalone: true,
  templateUrl: './exam-highlights.component.html',
  styleUrl: './exam-highlights.component.scss',
})
export class ExamHighlightsComponent {
  @Input({ required: true }) highlights: string[] = [];
  @Input({ required: true }) whatsappLink!: string;
}
