import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemsService } from 'src/app/core/services/items.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-items',
  templateUrl: './form-items.component.html',
  styleUrls: ['./form-items.component.css']
})
export class FormItemsComponent implements OnInit {

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
      quantidade: ['']
    });
   }

  ngOnInit() {
  }

  salvarItem() {
    const titulo = this.formItem.get('titulo').value;
    const quantidade = this.formItem.get('quantidade').value;
    this.itemsService.postItem(titulo, quantidade);
    this.formItem.reset();
  }

  modalFecha() {
    this.modalOpen = false;
    this.emitFechaModal.emit(false);
  }


}
