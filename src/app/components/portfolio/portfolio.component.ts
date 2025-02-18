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



  projects:any[] = [
    {
      ProjectName: "El Pollo Loco",
      ProjectImg: "assets/images/laptop-el-pollo-loco.png" ,
      ProjectTech: "JavaScript | HTML | CSS",
      ProjectDescription: "A simple but not so simple jump-and-Run game based on OOP. Help Pepe to find coins and fight the boss"
    },
    {
      ProjectName: "Join",
      ProjectImg: "assets/images/laptop-join-2.png" ,
      ProjectTech: "JavaScript | HTML | CSS | Firebase",
      ProjectDescription: "A Kanban Board Managin Tool "
    },
    {
      ProjectName: "Pokedex",
      ProjectImg: "assets/images/laptop-pokedex.png" ,
      ProjectTech: "JavaScript | HTML | CSS",
      ProjectDescription: "A Pokedex where you can search for pokemons "
    },
    

  ]

}

 /* {
    ProjectName: "Da Bubble",
    ProjectImg: "assets/images/laptop-el-pollo-loco.png" ,
    ProjectTech: "Angular | Typescript | HTML | SCSS | Firebase",
    ProjectDescription: "A simple but not so simple jump-and-Run game based on OOP. Help Pepe to find coins and fight the boss"
  }, */

