import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValoresComponent } from './form-valores.component';

describe('FormValoresComponent', () => {
  let component: FormValoresComponent;
  let fixture: ComponentFixture<FormValoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
