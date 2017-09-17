//Importação dos módulos do Angular que foram usados
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

//Importação dos nossos componentes 
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

//Importação do serviço de contatos
import { ContactsService } from './contacts/contacts.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ContactsComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
    ])
  ],
  providers: [ContactsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
