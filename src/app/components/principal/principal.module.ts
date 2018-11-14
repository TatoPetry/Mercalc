import { NgModule } from '@angular/core';
import { PrincipalComponent } from './principal.component';
import { CommonModule } from '@angular/common';
import { PrincipalCardComponent } from './principal-card/principal-card.component';
import { ModalConfirmaModule } from 'src/app/shared/components/modal-confirma/modal-confirma.module';
import { ModalListaFormComponent } from './modal-lista-form/modal-lista-form.component';
import { FecharModalModule } from 'src/app/shared/directives/fechar-modal/fechar-modal.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PrincipalComponent,
    PrincipalCardComponent,
    ModalListaFormComponent
   ],
  exports: [ PrincipalComponent],
  imports: [
    CommonModule,
    ModalConfirmaModule,
    FecharModalModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
   ]
})
export class PrincipalModule {}
