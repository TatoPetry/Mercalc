import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ItemsService } from 'src/app/core/services/items.service';
import { Items } from 'src/app/core/interfaces/items';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit, OnDestroy {

  // Controle Modal Form
  modalOpen = false;

  items: Items[];
  total: number;
  id: string;

  subscription:Subscription;

  constructor(
    private itemsService: ItemsService    
    
    ) {
       
      // this.items = this.itemsService.getItems();
      // this.items.subscribe( info => console.log(info));
    }
    ngOnDestroy(){
      // this.subscription.unsubscribe();
      console.log('aki2');
    }
    ngOnInit() {
      this.items = this.itemsService.itemsData;
      // this.subscription = this.itemsService.getItems().subscribe((data:Items[])=>{
      //   console.log('aki');
      //   this.items = data;
      // });

      //   this.items.subscribe( items => {
      //     this.total = 0;
      //      items.forEach( item => {
      //         if ( !!item.quantidade && !!item.valor) {
      //           console.log(item.quantidade, item.valor);
      //           this.total += item.quantidade * item.valor;
      //           console.log(this.total);
      //         }
      //   }
      // ); });

    }

  abrirModalForm() {
    this.modalOpen = true;
  }
  recebendoModalEvent(event) {
    this.modalOpen = event;
  }



}
