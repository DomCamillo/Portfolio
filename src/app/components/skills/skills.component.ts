import { Component,ElementRef, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements AfterViewInit {
  constructor(private el: ElementRef) {
   
  }
  icon:any[]=[];
  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            console.log(entry); 
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); 
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 }); 

    const skillIcons = this.el.nativeElement.querySelectorAll('.icon-skills');
    skillIcons.forEach((icon: Element) => {
        console.log(icon);
        observer.observe(icon);
    });
}
}

