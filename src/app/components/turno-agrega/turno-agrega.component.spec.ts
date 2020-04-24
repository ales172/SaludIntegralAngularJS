import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnoAgregaComponent } from './turno-agrega.component';

describe('TurnoAgregaComponent', () => {
  let component: TurnoAgregaComponent;
  let fixture: ComponentFixture<TurnoAgregaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnoAgregaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnoAgregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
