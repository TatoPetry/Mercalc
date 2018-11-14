import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';



@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  modalOpen = false;
  textoModal = 'Tem certeza que deseja deslogar?';
  modalTipo = 'logout';

  constructor(public fbAuth: AuthService) {
  }

  ngOnInit(): void {
  }

  deslogar() {
    this.fbAuth.logout();
  }

  abrirModal() {
    this.modalOpen = true;
  }
  recebendoModal(event) {
    this.modalOpen = event;
  }



}
