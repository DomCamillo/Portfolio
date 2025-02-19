import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Output() scrollTo = new EventEmitter<string>();

  scrollToSection(event: Event, section: string) {
    event.preventDefault(); // Verhindert das Standardverhalten des Links
    this.scrollTo.emit(section);
    console.log('scroll to ', section);
  }

  openDropDownMenu(){
    let container = document.getElementById("mobile-menu");
    container?.classList.toggle("show")
  }

  closeDropDownMenu(){
    let container = document.getElementById("mobile-menu");
    container?.classList.add("display-none")
  }
}
