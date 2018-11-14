import { Directive, Input, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[fecharModal]'
})
export class FecharModalDirective {

  @Input() modal: ElementRef<any>;

  constructor(
    private el: ElementRef,
    private render: Renderer) { }

  @HostListener('click')
  onClick() {
    this.render.setElementClass(this.modal, 'fechar', true);
  }


}
