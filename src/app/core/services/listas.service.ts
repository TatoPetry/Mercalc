import { Injectable, OnInit, OnChanges } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LocalService } from './local.service';
import { Lista } from '../interfaces/lista';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ListasService implements OnInit {

  private URL = 'users/';
  private URL_USER: string;

  listaCol: AngularFirestoreCollection<Lista>;
  listaDoc: AngularFirestoreDocument<Lista>;
  lista: Observable<Lista[]>;

  constructor(
    private _firestore: AngularFirestore,
    private localService: LocalService,
    private activatedRoute: ActivatedRoute
    ) {
    this.takeUrl();
    this.takeCollection();
    this.takeObservable();
  }

  ngOnInit() {
  }

  private takeUrl() {
    this.URL_USER = this.localService.getData('user').uid;
  }

  private takeCollection() {
    this.listaCol = this._firestore.collection(this.URL).doc(this.URL_USER).collection('listas');
  }

  private takeObservable() {
    this.lista = this.listaCol.snapshotChanges()
      .pipe(map( actions => actions
        .map( a => {
          const data = a.payload.doc.data() as Lista;
          const id = a.payload.doc.id;
          return {id, ...data};
        })));
  }
  // retorna observable de listas
  getListas() {
    return this.lista;
  }
  // retorna Collection ativa
  getCol() {
    return this.listaCol;
  }
  // adiciona lista
  postLista(title: string) {
    const data =  new Date();
    const lista: Lista = {
      titulo: title,
      data: data
    };
    this.listaCol.add(lista);
  }
  // atualiza lista
  updateLista(id: string, title: string) {
    const data =  new Date();
    const lista: Lista = {
      titulo: title,
      data: data
    };
    this.listaCol.doc(id).update(lista);
  }
  // deleta lista
  deleteLista(id) {
    this.listaCol.doc(id).delete();
  }


}
