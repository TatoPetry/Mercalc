import { Component, Input, NgZone } from '@angular/core';
import { Router } from '@angular/router';



@Component({

  selector: 'app-principal-card',
  templateUrl: './principal-card.component.html',
  styleUrls: ['./principal-card.component.css']
})
export class PrincipalCardComponent {

  @Input() titulo: string;
  @Input() id: string;

  // Parametros do modal
  modalOpen = false;
  textoModal = 'Tem certeza que deseja deletar esta lista?';
  modalTipo = 'deletaLista';

  constructor(
    private router: Router,
    private ngZone: NgZone
  ) {

  }

  abrirLista() {
   this.ngZone.run( () =>
     this.router.navigate(['lista/', this.id]),
      err => console.log(err));
  }

  abrirModal() {
    this.modalOpen = true;
  }

  recebendoModal(event) {
    this.modalOpen = event;
  }



}
