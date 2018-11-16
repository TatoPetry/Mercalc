import { Injectable, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Items } from '../interfaces/items';
import { ListasService } from './listas.service';
import { map } from 'rxjs/internal/operators/map';


@Injectable()
export class ItemsService {

  private URL = 'items/';
  public URL_LISTA: string = 'WNyEIjUczThti6Tx1WpTQHTJdPy2';

  itemsCol: AngularFirestoreCollection<Items>;
  itemsDoc: AngularFirestoreDocument<Items>;
  items: Observable<Items[]>;

  itemsData:Items[];

  constructor(
    private _firestore: AngularFirestore,
    private listasService: ListasService      
  ) {

   
    this.getCollection();
    this.getObservable();
   
  }

  private getCollection() {
    this.itemsCol = this.listasService.getCol().doc(this.URL_LISTA).collection(this.URL);

  }

  private getObservable() {
     this.itemsCol.snapshotChanges()
    .pipe(map( actions => actions
      .map( a => {
        const data = a.payload.doc.data() as Items;
        const id = a.payload.doc.id;
        return {id, ...data};
    }))).subscribe((data)=>{
      console.log('akiii333');
      this.itemsData = data;
    });
  }
 

  getItems() {
    
    return this.items;
  }

  postItem(title: string, quantidade: number) {
    const items: Items = {
      titulo: title,
      quantidade: quantidade
    };
    this.itemsCol.add(items);
  }

  updateItem(id: string, title?: string, quantidade?: number, valor?: number) {

    const items: Items = {
      titulo: title,
      quantidade: quantidade,
      valor: valor
    };
    this.itemsCol.doc(id).update(items);
  }

  deleteItem(id) {
    this.itemsCol.doc(id).delete();
  }

}
