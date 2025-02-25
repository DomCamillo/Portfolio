import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [RouterLink, HeaderComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {

    constructor(private translate: TranslateService) {}





  email = 'dominic@moerth.ch'
}
