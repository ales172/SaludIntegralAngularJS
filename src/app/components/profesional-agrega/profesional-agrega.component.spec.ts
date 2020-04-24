import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionalAgregaComponent } from './profesional-agrega.component';

describe('ProfesionalAgregaComponent', () => {
  let component: ProfesionalAgregaComponent;
  let fixture: ComponentFixture<ProfesionalAgregaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesionalAgregaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesionalAgregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
