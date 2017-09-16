import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Contact } from './contact.model';

@Injectable()
export class ContactsService {

  url = "https://nodejs-todolist-api.herokuapp.com/contacts/fhsf";

  constructor(private http: Http) { }

  //GET
  getContacts() {
    return this.http.get(this.url)
      .map(response => response.json());
    //return this.contacts;
  }

  //POST
  saveContact(contact){
    //Set header to send content-type application/json
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url, JSON.stringify(contact), options)
      .map(res => res.json());
  }

  //DELETE
  deleteContact(contact){
    return this.http.delete(`${this.url}/${contact._id}`)
      .map(res => res.json());
  }

  contacts:Contact[] = [
    {
      name: "Erika",
      phone: "8888888"
    },
    {
      name: "Danielle",
      phone: "99999999"
    },
    {
      name: "Rodrigo",
      phone: "88889999"
    }
  ]

}
