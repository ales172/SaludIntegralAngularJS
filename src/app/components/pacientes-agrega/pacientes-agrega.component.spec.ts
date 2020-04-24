import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesAgregaComponent } from './pacientes-agrega.component';

describe('PacientesAgregaComponent', () => {
  let component: PacientesAgregaComponent;
  let fixture: ComponentFixture<PacientesAgregaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientesAgregaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesAgregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
