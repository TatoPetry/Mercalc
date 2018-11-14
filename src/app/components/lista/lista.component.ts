import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ItemsService } from 'src/app/core/services/items.service';
import { Items } from 'src/app/core/interfaces/items';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  // Controle Modal Form
  modalOpen = false;

  items: Observable<Items[]>;
  total: number;


  constructor(
    private itemsService: ItemsService) {
      this.items = this.itemsService.getItems();


    }

    ngOnInit() {

        this.items.subscribe( items => {
          this.total = 0;
           items.forEach( item => {
              if ( !!item.quantidade && !!item.valor) {
                console.log(item.quantidade, item.valor);
                this.total += item.quantidade * item.valor;
                console.log(this.total);
              }
        }
      ); });

    }

  abrirModalForm() {
    this.modalOpen = true;
  }
  recebendoModalEvent(event) {
    this.modalOpen = event;
  }



}
