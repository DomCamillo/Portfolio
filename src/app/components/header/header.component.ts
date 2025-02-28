import { Component, Output, EventEmitter, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isGerman?: boolean;

  @Output() scrollTo = new EventEmitter<string>();

  constructor(private translate: TranslateService) {}

  get headerlink(): string {
    return this.translate.instant('header.links');
  }

 
  toggleLanguage(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    const language = isChecked ? 'de' : 'en'; // Wechsel zwischen Deutsch und Englisch
    this.translate.use(language)
    this.isGerman = isChecked; 
  }

  scrollToSection(event: Event, section: string) {
    event.preventDefault(); 
    this.scrollTo.emit(section);
    
  }

  openDropDownMenu(){
    let container = document.getElementById("mobile-menu");
    container?.classList.toggle("show")
  }

  closeDropDownMenu(){
    let container = document.getElementById("mobile-menu");
    container?.classList.toggle("show")
  }
}
