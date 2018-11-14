import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ListasService } from 'src/app/core/services/listas.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-modal-lista-form',
  templateUrl: './modal-lista-form.component.html',
  styleUrls: ['./modal-lista-form.component.css']
})
export class ModalListaFormComponent implements OnInit {
  // Controle do modal
  @Input() modalOpen = false;
  @Output() emitFechaModal: EventEmitter<boolean> = new EventEmitter;

  formLista: FormGroup;

  constructor(
    private listaService: ListasService,
    private formBuilder: FormBuilder
    ) {
      this.formLista = this.formBuilder.group({
        title: ['', Validators.required]
      });
     }

  ngOnInit() {
  }


  submitLista() {
    const title = this.formLista.get('title').value;
    this.listaService.postLista(title);
    this.formLista.reset();
  }

  modalFecha() {
    this.modalOpen = false;
    this.emitFechaModal.emit(false);
  }


}
