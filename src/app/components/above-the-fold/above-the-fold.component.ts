import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
})
export class AboveTheFoldComponent {
  constructor(private translate: TranslateService) {
    this.getCurrentLanguage();
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }

  get iamText(): string {
    return this.translate.instant('aboveTheFold.iam');
  }

  openGit() {
    window.open('https://github.com/DomCamillo', '_blank');
  }

  scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
