import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesEliminaComponent } from './pacientes-elimina.component';

describe('PacientesEliminaComponent', () => {
  let component: PacientesEliminaComponent;
  let fixture: ComponentFixture<PacientesEliminaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientesEliminaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesEliminaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
