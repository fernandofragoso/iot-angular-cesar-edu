import { Component, OnInit } from '@angular/core';

//Importando a descrição do objecto Contact
import { Contact } from './contact.model';

//Importando o Serviço
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  //Propriedade para controlar o estado de loading da aplicação
  loading = false;

  //Lista de contatos
  contacts:Contact[];

  //Two way binding dos campos de texto
  inputName = "";
  inputPhone = "";

  //No construtor é feito a instanciação do Serviço de contatos através de
  //injeção de dependencia. Após isso o 'this.contactsService' fica disponível
  //no componente
  constructor(private contactsService:ContactsService) { }

  //O método nGOnInit() é executado no assim que o componente é criado
  //Nesse caso, demos ao ngOnInit a responsabilidade de popular nossa lista
  //de contatos
  ngOnInit() {
    //Antes de iniciar o procedimento, setamos a flag loading para true
    //Usaremos juntamente com o *ngIf no template, para mostrar uma mensagem de
    //carregamento
    this.loading = true;
    //Chamamos o método getContacts do serviço, chamando subscribe
    this.contactsService.getContacts().subscribe(contacts => {
        //Após o retorno do servidor, setamos os contatos recebidos na
        //nossa lista, e marcamos o 'loading' como false pra esconder a
        //mensagem de carregamento no template
        this.contacts = contacts;
        this.loading = false;
      });
  }

  //DELETAR CONTATO
  delete(contact) {
    //Chamamos o método deleteContact do serviço, dando subscribe
    this.contactsService.deleteContact(contact).subscribe(c => {
      //Após o retorno do servidor, removemos o contato da nossa lista 'contacts'
      let index = this.contacts.indexOf(contact);
      this.contacts.splice(index, 1);
    });
  }

  //INSERIR CONTATO
  insertContact() {
    //Carregamos os dados de inputName e inputPhone para construir nosso objeto Contact
    let contact:Contact = {
      name: this.inputName,
      phone: this.inputPhone
    };
    //Chamamos o método saveContact do Serviço, passando o Contact criado
    //no passo anterior e dando subscribe
    this.contactsService.saveContact(contact).subscribe(c => {
      //Quando a resposta chegar, jogamos o objeto retornado na lista 'contacts'
      //para ser mostrado
      this.contacts.push(c);
    });
    //Limpar campos do formulário
    this.clearForm();
  }

  // LIMPA OS CAMPOS DO FORMULÁRIO APÓS INSERÇÃO
  clearForm() {
    this.inputName = "";
    this.inputPhone = "";
  }

}
