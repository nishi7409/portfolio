import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  standalone: true,
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class LandingComponent {
  resumeUrl: SafeResourceUrl;
  resumeLastUpdated = 'January 2026';

  constructor(private sanitizer: DomSanitizer) {
    this.resumeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/Nishant_Srivastava_Resume.pdf');
  }
}
