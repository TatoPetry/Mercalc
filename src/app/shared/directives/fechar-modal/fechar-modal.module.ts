import { NgModule } from '@angular/core';
import { FecharModalDirective } from './fechar-modal.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ FecharModalDirective ],
  exports: [ FecharModalDirective ],
  imports: [ CommonModule ]
})
export class FecharModalModule {}
