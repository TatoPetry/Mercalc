import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Items } from 'src/app/core/interfaces/items';
import { ItemsService } from 'src/app/core/services/items.service';

@Component({
  selector: 'app-tabela-lista',
  templateUrl: './tabela-lista.component.html',
  styleUrls: ['./tabela-lista.component.css']
})
export class TabelaListaComponent implements OnInit {

  @Input() items: Items[] = [];


  // Variáveis modal Confirma
  modalTipo = 'deletaItem';
  modalOpen = false;
  TextoModal = 'Tem certeza que deseja deletar esse item?';

  constructor() { }

  ngOnInit() {
    console.log(this.items);
  }

  deleteConfirma() {
    this.modalOpen = true;

  }

  recebeEmit(event) {
    this.modalOpen = event;
  }

}
