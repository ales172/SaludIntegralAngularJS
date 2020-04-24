import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaAgregaComponent } from './ficha-agrega.component';

describe('FichaAgregaComponent', () => {
  let component: FichaAgregaComponent;
  let fixture: ComponentFixture<FichaAgregaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaAgregaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaAgregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
