import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterLink } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-impressum',
  standalone: true,
  imports: [FooterComponent,RouterLink, HeaderComponent],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {

  constructor(private translate: TranslateService) {}


  get verantwortlich(): string {
    return this.translate.instant('impressum.verantwortlich');
  }
  get haftungsausschlussH1(): string {
    return this.translate.instant('impressum.haftungsausschlussH1');
  }
  get haftungsausschlussText(): string {
    return this.translate.instant('impressum.haftungsausschlussText');
  }
  get urheberrechtH1(): string {
    return this.translate.instant('impressum.urheberrechtH1');
  }
  get urheberrechtText(): string {
    return this.translate.instant('impressum.urheberrechtText');
  }
  get datenschutzH1(): string {
    return this.translate.instant('impressum.datenschutzH1');
  }
  get datenschutz(): string {
    return this.translate.instant('impressum.datenschutz');
  }
  get datenschutzLink(): string {
    return this.translate.instant('impressum.datenschutzLink');
  }
  get goBack(): string {
    return this.translate.instant('impressum.goBack');
  }
 


 email = 'dominic@moerth.ch'
}
