import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PrivacyPolicyComponent } from '../../pages/privacy-policy/privacy-policy.component';
import { provideRouter, Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, PrivacyPolicyComponent , RouterLink],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  
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
