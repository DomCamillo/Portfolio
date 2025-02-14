import { Component } from '@angular/core';
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

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, AboveTheFoldComponent, AboutMeComponent, 
    SkillsComponent, PortfolioComponent, ProjectsComponent, 
    CommentsComponent, ContactFormComponent, FooterComponent,ImpressumComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
