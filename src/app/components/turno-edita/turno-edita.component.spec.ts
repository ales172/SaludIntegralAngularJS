import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnoEditaComponent } from './turno-edita.component';

describe('TurnoEditaComponent', () => {
  let component: TurnoEditaComponent;
  let fixture: ComponentFixture<TurnoEditaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnoEditaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnoEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
