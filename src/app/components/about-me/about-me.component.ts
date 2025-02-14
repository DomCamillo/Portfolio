import { Component,OnInit,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})


export class AboutMeComponent implements OnInit {
  animateIcons = false;

  ngOnInit() {
    setTimeout(() => {
      this.animateIcons = true; 
    }, 500);
  }
}