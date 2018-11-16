import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { ListasService } from 'src/app/core/services/listas.service';
import { ItemsService } from 'src/app/core/services/items.service';


@Component({
  selector: 'app-modal-confirma',
  templateUrl: './modal-confirma.component.html',
  styleUrls: ['./modal-confirma.component.css']
})
export class ModalConfirmaComponent implements OnInit {

  @Input() modalTipo: string;
  @Input() modalOpen = false;
  @Input() TextoModal = '';
  @Input() id?: string;
  @Output() emitFechaModal: EventEmitter<boolean> = new EventEmitter;
  @Output() emitConfirma: EventEmitter<boolean> = new EventEmitter;
  @Input() function: any;

  constructor(
    
    ) { }

  ngOnInit() {

  }
  
  modalFecha() {
    this.modalOpen = false;
    this.emitFechaModal.emit(false);
  }
  modalConfirma() {
    this.modalOpen = false;
    this.emitConfirma.emit(false);
  }
}
