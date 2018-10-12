import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mc-principal-card',
  templateUrl: './principal-card.component.html',
  styleUrls: ['./principal-card.component.css']
})
export class PrincipalCardComponent {
  // tslint:disable-next-line:no-inferrable-types
  @Input() titulo: string = 'Lista da Semana';

}
