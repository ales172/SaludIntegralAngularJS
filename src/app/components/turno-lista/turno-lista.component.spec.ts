import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnoListaComponent } from './turno-lista.component';

describe('TurnoListaComponent', () => {
  let component: TurnoListaComponent;
  let fixture: ComponentFixture<TurnoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
