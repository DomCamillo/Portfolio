import { Component,OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [RouterLink, HeaderComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent implements OnInit, OnDestroy {
  private langChangeSubscription?: Subscription;

  privacyPolicy:any = {};

    constructor(private translate: TranslateService) {
      this.loadPrivacyPolicy();
    }

    ngOnDestroy(): void {
        if(this.langChangeSubscription){
          this.langChangeSubscription.unsubscribe()
        }
    }

    ngOnInit(): void {
        this.loadPrivacyPolicy();

        this.langChangeSubscription = this.translate.onLangChange.subscribe(()=>{
          this.loadPrivacyPolicy();
        })
    }

    
  loadPrivacyPolicy() {
    this.translate.get('privacyPolicy').subscribe((data: any) => {
      this.privacyPolicy = data;
    });
  }
  
  get datenschutz(): string {
    return this.translate.instant('privacyPolicy.datenschutzh2');
  }
    


  email = 'dominic@moerth.ch'
}
