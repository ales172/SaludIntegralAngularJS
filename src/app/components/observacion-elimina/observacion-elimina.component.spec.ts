import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservacionEliminaComponent } from './observacion-elimina.component';

describe('ObservacionEliminaComponent', () => {
  let component: ObservacionEliminaComponent;
  let fixture: ComponentFixture<ObservacionEliminaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservacionEliminaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservacionEliminaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
