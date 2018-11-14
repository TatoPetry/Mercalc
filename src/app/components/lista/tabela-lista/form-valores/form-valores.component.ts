import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ItemsService } from 'src/app/core/services/items.service';

@Component({
  selector: 'app-form-valores',
  templateUrl: './form-valores.component.html',
  styleUrls: ['./form-valores.component.css']
})
export class FormValoresComponent implements OnInit {

   // Controle do modal
   @Input() modalOpen = false;
   @Output() emitFechaModal: EventEmitter<boolean> = new EventEmitter;

   // Criação form-group
   formItem: FormGroup;

  constructor(
    private itemsService: ItemsService,
    private formBuilder: FormBuilder
  ) {
    this.formItem = this.formBuilder.group({
      titulo: ['', Validators.required],
      quantidade: [''],
      valor: ['']
    });
   }

  ngOnInit() {
  }

  editarItem() {
    const titulo = this.formItem.get('titulo').value;
    const quantidade = this.formItem.get('quantidade').value;
    const valor = this.formItem.get('valor').value;
    this.itemsService.updateItem(titulo, quantidade, valor);
    this.formItem.reset();
  }

  modalFecha() {
    this.modalOpen = false;
    this.emitFechaModal.emit(false);
  }



}
