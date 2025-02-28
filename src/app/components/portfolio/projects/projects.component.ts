import { CommonModule } from '@angular/common';
import { Component ,NgModule, Input, Output, } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  @Input() projects:any[] = []

  constructor(private translate: TranslateService) {}

  getTranslatedDescription(key: string): string {
    return this.translate.instant(`projects.${key}.description`);
  }

  goToGitHub(link:string){
    window.open(link, "_blank");
  }

  goToProject(projectLink: string){
    window.open(projectLink, "_blank");
  }
    
  }

 

