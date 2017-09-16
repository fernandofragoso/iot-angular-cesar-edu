import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() contact = {
    name: "",
    phone: ""
  }

  @Output() contactDeleted = new EventEmitter();

  remove() {
    this.contactDeleted.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
