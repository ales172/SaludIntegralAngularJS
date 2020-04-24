import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaEliminaComponent } from './ficha-elimina.component';

describe('FichaEliminaComponent', () => {
  let component: FichaEliminaComponent;
  let fixture: ComponentFixture<FichaEliminaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaEliminaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaEliminaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
