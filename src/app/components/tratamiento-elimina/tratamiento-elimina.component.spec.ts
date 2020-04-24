import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoEliminaComponent } from './tratamiento-elimina.component';

describe('TratamientoEliminaComponent', () => {
  let component: TratamientoEliminaComponent;
  let fixture: ComponentFixture<TratamientoEliminaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TratamientoEliminaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TratamientoEliminaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
