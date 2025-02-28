import { HttpClient } from '@angular/common/http';
import { Component, inject, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PrivacyPolicyComponent } from '../../pages/privacy-policy/privacy-policy.component';
import { provideRouter, Router, RouterLink } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, PrivacyPolicyComponent , RouterLink, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  buttonValid = "rgb(112, 230, 28)"
  buttonInvalid = "rgb(107, 45, 45)"

    @Output() scrollTo = new EventEmitter<string>();

  constructor(private translate: TranslateService) {}

  get contactHeadline(): string {
    return this.translate.instant('contactFrom.headline');
  }
  
  get contactText(): string {
    return this.translate.instant('contactFrom.text');
  }
  
  get contactText2(): string {
    return this.translate.instant('contactFrom.text2');
  }
  get contactMe(): string {
    return this.translate.instant('contactFrom.contactMe');
  }
  get privacyPolicY(): string {
    return this.translate.instant('contactFrom.privacyPolicy');
  }
  get privacyPolicY2(): string {
    return this.translate.instant('contactFrom.privacyPolicy2');
  }
  get privacyPolicyPurpel(): string {
    return this.translate.instant('contactFrom.privacyPolicyPurpel');
  }

  scrollToSection(event: Event, section: string) {
    event.preventDefault(); // Verhindert das Standardverhalten des Links
    this.scrollTo.emit(section);
    console.log('scroll to ', section);
  }
  
  
  http = inject(HttpClient)

  contactData = {
    name: '',
    email: '',
    message: '',
    agreesToPrivacyPolicy: false
  };

  privacyPolicy = false;
  formSubmitted = false;

  mailTest = false;

  post = {
    endPoint: 'https://dominic-moerth.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest && this.contactData.agreesToPrivacyPolicy) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.formSubmitted = true;
            this.privacyPolicy = true;
            ngForm.resetForm();
            setTimeout(() => {
              this.formSubmitted = false;
              this.privacyPolicy = false;
            }, 3000);
            
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
      this.formSubmitted = false;
    }
  }

 
}
