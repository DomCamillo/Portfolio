import { CommonModule } from '@angular/common';
import { Component ,NgModule, Input, Output, } from '@angular/core';
import {  AfterViewInit, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit{

  constructor(private translate: TranslateService,private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.initializeScrollAnimations();
  }
  

  initializeScrollAnimations(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Füge die Klasse 'visible' hinzu
            observer.unobserve(entry.target); // Stoppe das Beobachten, nachdem die Animation ausgelöst wurde
          }
        });
      },
      {
        threshold: 0.2, // Trigger, wenn 20% des Elements sichtbar sind
      }
    );

    const projectItems = this.el.nativeElement.querySelectorAll('.singel-project');
    projectItems.forEach((item: Element) => {
      observer.observe(item);
    });
  }


  @Input() styles:any

  @Input() projects:any[] = []

  

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

 

