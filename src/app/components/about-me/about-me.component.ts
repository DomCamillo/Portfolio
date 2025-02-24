import { Component,OnInit,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule ,TranslateModule ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})


export class AboutMeComponent implements OnInit {
  constructor(private translate: TranslateService) {}


  get aboutMeText(): string {
    return this.translate.instant('aboutMe.text');
  }

  animateIcons = false;

  ngOnInit() {
    setTimeout(() => {
      this.animateIcons = true; 
    }, 500);
  }
}