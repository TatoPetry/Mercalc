import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';

import { Lista } from 'src/app/core/interfaces/lista';
import { ListasService } from 'src/app/core/services/listas.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  id;
  // Controle Modal Form
  modalOpen = false;


  listas: Observable<Lista[]>;


  constructor(
    private listasService: ListasService,
    private route: ActivatedRoute
  ) {
    console.log(this.route.snapshot.params['id']);

  }

  ngOnInit() {
    this.listas = this.listasService.getListas();

  }

  // Controle Modal
  abrirModaForm() {
    this.modalOpen = true;
  }
  recebendoModalEvent(event) {
    this.modalOpen = event;
  }

}
