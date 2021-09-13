import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email/email.service';
import { Mail } from 'src/app/utils/models.utils';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  email : Mail = {
    subject : "",
    text : ""
  }

  constructor(private emailService : EmailService) { }

  ngOnInit(): void {
  }

  sendEmail(){
    this.emailService.sendMail(this.email);
    this.email = {
      subject : "",
      text : ""
    }
    alert("Se ha enviado el mensaje.")
  }

}
