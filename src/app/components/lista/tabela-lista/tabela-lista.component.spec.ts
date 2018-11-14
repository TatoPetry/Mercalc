import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaListaComponent } from './tabela-lista.component';

describe('TabelaListaComponent', () => {
  let component: TabelaListaComponent;
  let fixture: ComponentFixture<TabelaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
