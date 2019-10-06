import { Component, OnInit } from '@angular/core';
import { ContactFormService } from './contact-form.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor(private contactService : ContactFormService) { }

  mailData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  statusMail = false;
  buttonDis = true;

  ngOnInit() {

  }

  onSubmit (e) {
    e.preventDefault();
    this.contactService.sendMail(this.mailData).subscribe((data) => {
      this.statusMail = true;
      console.log(data);
    });
  }

  resolved(captchaResponse: string) {
    console.log(this.buttonDis);
    this.buttonDis = false;
    //console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
}
