import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalListaFormComponent } from './modal-lista-form.component';

describe('ModalListaFormComponent', () => {
  let component: ModalListaFormComponent;
  let fixture: ComponentFixture<ModalListaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalListaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalListaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
