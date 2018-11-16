import { NgModule } from '@angular/core';
import { ListaComponent } from './lista.component';
import { CommonModule } from '@angular/common';
import { TabelaListaComponent } from './tabela-lista/tabela-lista.component';
import { FormItemsComponent } from './form-items/form-items.component';
import { FormValoresComponent } from './tabela-lista/form-valores/form-valores.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalConfirmaModule } from 'src/app/shared/components/modal-confirma/modal-confirma.module';
import { ItemsService } from 'src/app/core/services/items.service';



@NgModule({
  declarations: [
    ListaComponent,
    TabelaListaComponent,
    FormItemsComponent,
    FormValoresComponent
   ],
  exports: [ ListaComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalConfirmaModule
  ],
  providers: [
    ItemsService    
  ]

})
export class ListaModule {}
