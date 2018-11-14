import { NgModule } from '@angular/core';
import { ModalConfirmaComponent } from './modal-confirma.component';
import { CommonModule } from '@angular/common';
import { FecharModalDirective } from '../../directives/fechar-modal/fechar-modal.directive';
import { FecharModalModule } from '../../directives/fechar-modal/fechar-modal.module';

@NgModule({
  declarations: [ ModalConfirmaComponent ],
  exports: [ ModalConfirmaComponent ],
  imports: [
    CommonModule,
    FecharModalModule
   ]
})
export class ModalConfirmaModule {}
