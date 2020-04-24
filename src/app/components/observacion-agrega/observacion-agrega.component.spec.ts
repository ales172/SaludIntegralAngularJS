import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservacionAgregaComponent } from './observacion-agrega.component';

describe('ObservacionAgregaComponent', () => {
  let component: ObservacionAgregaComponent;
  let fixture: ComponentFixture<ObservacionAgregaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservacionAgregaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservacionAgregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
