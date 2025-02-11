import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {


  joinImg:string = "assets/images/laptop-join-2.png"
  PokedexImg:string = "assets/images/laptop-pokedex.png"
  LocoImg:string = "assets/images/laptop-el-pollo-loco.png"

}
