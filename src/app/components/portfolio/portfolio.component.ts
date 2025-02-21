import { Component,Input, Output, NgModule } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';

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
      ProjectDescription: "A simple but not so simple jump-and-Run game based on OOP. Help Pepe to find coins and fight the boss",
      gitLink: "https://github.com/DomCamillo/El-Pollo-Loco",
      projectLink: "https://dominic-moerth.com/ElPolloLoco/index.html"
    },
    {
      ProjectName: "Join",
      ProjectImg: "assets/images/laptop-join-2.png" ,
      ProjectTech: "JavaScript | HTML | CSS | Firebase",
      ProjectDescription: "A Kanban Board Managin Tool ",
      gitLink: "https://github.com/DomCamillo/Join",
      projectLink: "https://dominic-moerth.com/Join/login.html"
    },
    {
      ProjectName: "Pokedex",
      ProjectImg: "assets/images/laptop-pokedex.png" ,
      ProjectTech: "JavaScript | HTML | CSS",
      ProjectDescription: "A Pokedex where you can search for pokemons ",
      gitLink: "https://github.com/DomCamillo/Pokedex",
      projectLink: "https://dominic-moerth.com/Pokedex/index.html"
    },
    

  ]

}

 /* {
    ProjectName: "Da Bubble",
    ProjectImg: "assets/images/laptop-el-pollo-loco.png" ,
    ProjectTech: "Angular | Typescript | HTML | SCSS | Firebase",
    ProjectDescription: "A simple but not so simple jump-and-Run game based on OOP. Help Pepe to find coins and fight the boss"
  }, */

