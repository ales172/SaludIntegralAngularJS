import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesEditaComponent } from './pacientes-edita.component';

describe('PacientesEditaComponent', () => {
  let component: PacientesEditaComponent;
  let fixture: ComponentFixture<PacientesEditaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientesEditaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
