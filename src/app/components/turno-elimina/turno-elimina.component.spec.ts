import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnoEliminaComponent } from './turno-elimina.component';

describe('TurnoEliminaComponent', () => {
  let component: TurnoEliminaComponent;
  let fixture: ComponentFixture<TurnoEliminaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnoEliminaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnoEliminaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
