import { Component, OnInit } from '@angular/core';

import { Contact } from './contact.model';

import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private contactsService:ContactsService) { }

  ngOnInit() {
    this.contactsService.
      getContacts().subscribe(contacts => { this.contacts = contacts; });
  }

  students = ["Erika", "Danielle", "Rodrigo"];

  contacts = [];

  meuinput = "";

  inputName = "";
  inputPhone = "";

  delete(contact) {
    // alert(contact.name);

    this.contactsService.deleteContact(contact).subscribe(c => {
      let index = this.contacts.indexOf(contact);
      this.contacts.splice(index, 1);
    });
  }

  executarAcao() {
    this.students.push(this.meuinput);
    this.meuinput = "";
  }

  insertContact() {
    let contact:Contact = {
      name: this.inputName,
      phone: this.inputPhone
    };

    this.contactsService.saveContact(contact).subscribe(c => {
      this.contacts.push(c);
    });

    //this.contacts.push(contact);
    this.clearForm();
  }

  clearForm() {
    this.inputName = "";
    this.inputPhone = "";
  }

}
