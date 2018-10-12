import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  cards: any[] = [
     {titulo: 'Compras da Semana'},
     {titulo: 'Feira do Mês'},
     {titulo: 'teste3'},
     {titulo: 'teste4'},
     {titulo: 'teste5'},
     {titulo: 'teste6'}
    ];

  constructor() { }

  ngOnInit() {
  }

}
