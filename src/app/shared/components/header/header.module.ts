import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ModalConfirmaModule } from '../modal-confirma/modal-confirma.module';

@NgModule({
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ],
  imports: [
    CommonModule,
    ModalConfirmaModule
  ]
})
export class HeaderModule {}
