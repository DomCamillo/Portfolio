import { Component,  NgModule , OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectsComponent, ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  providers: [], 
})
export class PortfolioComponent {
 
  projects: any[] = [
    {
      ProjectName: 'El Pollo Loco',
      ProjectImg: 'assets/images/laptop-el-pollo-loco.png',
      ProjectTech: 'JavaScript | HTML | CSS',
      projectKey: 'ElPolloLoco',
      gitLink: 'https://github.com/DomCamillo/El-Pollo-Loco',
      projectLink: 'https://dominic-moerth.com/ElPolloLoco/index.html',
    },
    {
      ProjectName: 'Join',
      ProjectImg: 'assets/images/laptop-join-2.png',
      ProjectTech: 'JavaScript | HTML | CSS | Firebase',
      projectKey: 'Join', 
      gitLink: 'https://github.com/DomCamillo/Join',
      projectLink: 'https://dominic-moerth.com/Join/login.html',
    },
    {
      ProjectName: 'Pokedex',
      ProjectImg: 'assets/images/laptop-pokedex1.png',
      ProjectTech: 'JavaScript | HTML | CSS | Rest API',
      projectKey: 'Pokedex', 
       gitLink: 'https://github.com/DomCamillo/Pokedex',
      projectLink: 'https://dominic-moerth.com/Pokedex/index.html',
    },
  ];
  constructor(private translate: TranslateService, private el: ElementRef) {}




  getTranslatedDescription(key: string): string {
    return this.translate.instant(`projects.${key}.description`);
  }

  get portfolioText(): string {
    return this.translate.instant('portfolio.text');
  }
}

/* {
    ProjectName: "Da Bubble",
    ProjectImg: "assets/images/laptop-el-pollo-loco.png" ,
    ProjectTech: "Angular | Typescript | HTML | SCSS | Firebase",
    ProjectDescription: ""
  }, */
