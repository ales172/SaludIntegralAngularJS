import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesDetalleComponent } from './pacientes-detalle.component';

describe('PacientesDetalleComponent', () => {
  let component: PacientesDetalleComponent;
  let fixture: ComponentFixture<PacientesDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientesDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
