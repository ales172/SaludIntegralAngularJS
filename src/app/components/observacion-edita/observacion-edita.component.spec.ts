import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservacionEditaComponent } from './observacion-edita.component';

describe('ObservacionEditaComponent', () => {
  let component: ObservacionEditaComponent;
  let fixture: ComponentFixture<ObservacionEditaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservacionEditaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservacionEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
