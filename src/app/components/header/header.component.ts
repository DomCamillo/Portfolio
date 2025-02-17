import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  openDropDownMenu(){
    let container = document.getElementById("mobile-menu");
    container?.classList.toggle("show")
  }

  closeDropDownMenu(){
    let container = document.getElementById("mobile-menu");
    container?.classList.add("display-none")
  }
}
