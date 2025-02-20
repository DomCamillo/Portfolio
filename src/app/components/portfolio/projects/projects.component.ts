import { CommonModule } from '@angular/common';
import { Component ,NgModule, Input, Output, } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

 

  goToGitHub(link:string){
    window.open(link, "_blank");
  }
    

  constructor(){
  
  }

  @Input() projects:any[] = []
 

 
 
    
  }

 

