import { Component,ElementRef, ViewChild , AfterViewInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { AboveTheFoldComponent } from '../../components/above-the-fold/above-the-fold.component';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { PortfolioComponent } from '../../components/portfolio/portfolio.component';
import { ProjectsComponent } from '../../components/portfolio/projects/projects.component';
import { CommentsComponent } from '../../components/comments/comments.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ImpressumComponent } from '../impressum/impressum.component';
import { RouterLink,RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, AboveTheFoldComponent, AboutMeComponent, 
    SkillsComponent, PortfolioComponent, ProjectsComponent, 
    CommentsComponent, ContactFormComponent, FooterComponent,ImpressumComponent,RouterLink,RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('aboutMe') aboutMeSection!: ElementRef;
  @ViewChild('skills') skillsSection!: ElementRef;
  @ViewChild('portfolio') portfolioSection!: ElementRef;
  @ViewChild('contact') contactSection!: ElementRef;
  @ViewChild('header') headerSection!: ElementRef;

  ngAfterViewInit() {
   
   }

/** 
 * Die Funktion scrollToSection nimmt einen Parameter section entgegen, der angibt, zu welchem Abschnitt gescrollt werden soll.
 * Ein switch-Statement wird verwendet, um das entsprechende DOM-Element basierend auf dem Wert von section auszuwählen.
 */
    scrollToSection(section: string) {
   
    let element: HTMLElement | null = null;
    switch (section) {
      case 'aboutMe':
        element = this.aboutMeSection?.nativeElement;
        break;
      case 'skills':
        element = this.skillsSection?.nativeElement;
        break;
      case 'portfolio':
        element = this.portfolioSection?.nativeElement;
        break;
      case 'contact':
        element = this.contactSection?.nativeElement;
        break;
      case 'header':
        element = this.headerSection?.nativeElement;
        break;
    }
    this.Offset(element, section)
    
}
/**
     * offset fuer das scrollen 
     */
Offset(element: HTMLElement | null, section: string) {
  if (element) {
    const isMobile = window.innerWidth < 600; 


    let offset = 10;
    if (isMobile) {
      offset = section === 'skills' ? 180 : 50; 
    }

    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth',
    });
  }
}
}
