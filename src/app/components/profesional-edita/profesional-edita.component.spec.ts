import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionalEditaComponent } from './profesional-edita.component';

describe('ProfesionalEditaComponent', () => {
  let component: ProfesionalEditaComponent;
  let fixture: ComponentFixture<ProfesionalEditaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesionalEditaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesionalEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
