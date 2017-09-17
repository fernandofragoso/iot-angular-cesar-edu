export class Contact {
  //A interrogação significa que o _id não é obrigatório para o
  //objeto ser considerado um contato.
  //O valor de ID vai ser criado pelo servidor e será recebido por
  //meio do serviço.
  _id?:string;
  name:string;
  phone:string;
}
