import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  baseUrl = 'http://iqonic.design/themes/contact-php/contact.php';
  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  public sendMail(data) {
    console.log(data);
    return this.http.post(this.baseUrl, data , this.httpOptions);
  }

}
