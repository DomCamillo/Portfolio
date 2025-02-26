import { Component,OnInit,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule ,TranslateModule,RouterLink ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})


export class AboutMeComponent implements OnInit {
  constructor(private translate: TranslateService) {}


  get aboutMeHeadline(): string {
    return this.translate.instant('aboutMe.headline');
  }
  get aboutMeText(): string {
    return this.translate.instant('aboutMe.text');
  }
  get aboutMeLocation(): string {
    return this.translate.instant('aboutMe.location');
  }
  get aboutMeOpenminded(): string {
    return this.translate.instant('aboutMe.openMinded');
  }
  get aboutMeProgramming(): string {
    return this.translate.instant('aboutMe.programming');
  }
  

  animateIcons = false;

  ngOnInit() {
    setTimeout(() => {
      this.animateIcons = true; 
    }, 500);
  }
}