import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  //Com o annotation @Input(), estamos informando que a propriedade
  //contact será recebida por quem fizer a criação do componente
  @Input() contact = {
    name: "",
    phone: ""
  }

  //Com @Output(), criamos um evento que será disparado pelo nosso
  //componente, e poderá ser tratado do lado de fora, pelo componente
  //mais externo
  @Output() contactDeleted = new EventEmitter();

  //No método remove() apenas emitimos o evento de 'contactDeleted',
  //que vai ser tratado pelo componente que possui acesso à lista de
  //contatos e ao serviço
  remove() {
    this.contactDeleted.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
