import { NgModule } from '@angular/core';
import { PrincipalComponent } from './principal.component';
import { CommonModule } from '@angular/common';
import { PrincipalCardComponent } from './principal-card/principal-card.component';
import { ModalConfirmaModule } from 'src/app/shared/components/modal-confirma/modal-confirma.module';

@NgModule({
  declarations: [
    PrincipalComponent,
    PrincipalCardComponent
   ],
  exports: [ PrincipalComponent],
  imports: [
    CommonModule,
    ModalConfirmaModule
   ]
})
export class PrincipalModule {}
