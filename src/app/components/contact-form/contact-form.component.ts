import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
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

  /* onSubmit(ngForm: NgForm) {
    if (ngForm.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            console.log('Email sent successfully:', response);
            ngForm.resetForm();
          },
          error: (error) => {
            console.error('Error sending email:', error);
          },
          complete: () => console.info('Email send process complete'),
        });
    } else if (ngForm.valid && this.mailTest) {
      console.log('Test mode: Email not actually sent.');
      ngForm.resetForm();
    }
  } */

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

 /*  onSubmit(ngForm: NgForm) {
    if(ngForm.valid && ngForm.submitted)
    console.log('Form submitted', this.contactData);
  } */
}
