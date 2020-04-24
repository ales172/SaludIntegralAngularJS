import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoAgregaComponent } from './tratamiento-agrega.component';

describe('TratamientoAgregaComponent', () => {
  let component: TratamientoAgregaComponent;
  let fixture: ComponentFixture<TratamientoAgregaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TratamientoAgregaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TratamientoAgregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
