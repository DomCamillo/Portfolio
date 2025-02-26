import { Component,ElementRef, AfterViewInit  } from '@angular/core';
import { TranslateService,TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslateModule,RouterLink],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements AfterViewInit {
  constructor(private el: ElementRef, private translate: TranslateService) { }


  get skillslooking(): string {
    return this.translate.instant('skills.looking');
  }
  get skillsContactMe(): string {
    return this.translate.instant('skills.contactMe');
  }
  get skillsText(): string {
    return this.translate.instant('skills.text');
  }
  get skillsButton(): string {
    return this.translate.instant('skills.buttonText');
  }


  icon:any[]=[];
  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); 
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 }); 

    const skillIcons = this.el.nativeElement.querySelectorAll('.icon-skills');
    skillIcons.forEach((icon: Element) => {
        
        observer.observe(icon);
    });
}
scrollToContact(){
    
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

