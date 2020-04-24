import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionalEliminaComponent } from './profesional-elimina.component';

describe('ProfesionalEliminaComponent', () => {
  let component: ProfesionalEliminaComponent;
  let fixture: ComponentFixture<ProfesionalEliminaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesionalEliminaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesionalEliminaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
