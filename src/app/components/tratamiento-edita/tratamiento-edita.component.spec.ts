import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientoEditaComponent } from './tratamiento-edita.component';

describe('TratamientoEditaComponent', () => {
  let component: TratamientoEditaComponent;
  let fixture: ComponentFixture<TratamientoEditaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TratamientoEditaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TratamientoEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
