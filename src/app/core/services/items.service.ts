import { Injectable, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Items } from '../interfaces/items';
import { LocalService } from './local.service';
import { ListasService } from './listas.service';
import { map } from 'rxjs/internal/operators/map';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ItemsService implements OnInit {

  private URL = 'Items/';
  private URL_LISTA: string;

  itemsCol: AngularFirestoreCollection<Items>;
  itemsDoc: AngularFirestoreDocument<Items>;
  items: Observable<Items[]>;

  constructor(
    private _firestore: AngularFirestore,
    private localService: LocalService,
    private listasService: ListasService,
    private activeRoute: ActivatedRoute
  ) {
   this.getCollection();
   this.getObservable();
  }

  private getCollection() {
    this.itemsCol = this.listasService.getCol().doc('EJIapjUuVbp0PFOwPD6w').collection(this.URL);

  }

  private getObservable() {
    this.items = this.itemsCol.snapshotChanges()
    .pipe(map( actions => actions
      .map( a => {
        const data = a.payload.doc.data() as Items;
        const id = a.payload.doc.id;
        return {id, ...data};
    })));
  }

  ngOnInit(): void {
    this.getCollection();
    this.getObservable();

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
