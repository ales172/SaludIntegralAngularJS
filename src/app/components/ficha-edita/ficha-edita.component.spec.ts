import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaEditaComponent } from './ficha-edita.component';

describe('FichaEditaComponent', () => {
  let component: FichaEditaComponent;
  let fixture: ComponentFixture<FichaEditaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaEditaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
