import { Component,Input, Output, NgModule } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectsComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  





  gitElPolloLoco:string = "https://github.com/DomCamillo/El-Pollo-Loco"
  gitJoin:string = "https://github.com/DomCamillo/Join"
  gitPokedex:string = "https://github.com/DomCamillo/Pokedex"



  projects:any[] = [
    {
      ProjectName: "El Pollo Loco",
      ProjectImg: "assets/images/laptop-el-pollo-loco.png" ,
      ProjectTech: "JavaScript | HTML | CSS",
      projectKey: "ElPolloLoco", 
      gitLink: "https://github.com/DomCamillo/El-Pollo-Loco",
      projectLink: "https://dominic-moerth.com/ElPolloLoco/index.html"
    },
    {
      ProjectName: "Join",
      ProjectImg: "assets/images/laptop-join-2.png" ,
      ProjectTech: "JavaScript | HTML | CSS | Firebase",
      projectKey: "Join", // Schlüssel für die Übersetzung der Beschreibung
   
      gitLink: "https://github.com/DomCamillo/Join",
      projectLink: "https://dominic-moerth.com/Join/login.html"
    },
    {
      ProjectName: "Pokedex",
      ProjectImg: "assets/images/laptop-pokedex1.png" ,
      ProjectTech: "JavaScript | HTML | CSS | Rest API",
      projectKey: "Pokedex", // Schlüssel für die Übersetzung der Beschreibung
    
      gitLink: "https://github.com/DomCamillo/Pokedex",
      projectLink: "https://dominic-moerth.com/Pokedex/index.html"
    },
    

  ]
  constructor(private translate: TranslateService) {}


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
    ProjectDescription: "A simple but not so simple jump-and-Run game based on OOP. Help Pepe to find coins and fight the boss"
  }, */

