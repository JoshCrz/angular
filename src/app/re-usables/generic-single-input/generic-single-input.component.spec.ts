import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericSingleInputComponent } from './generic-single-input.component';

describe('GenericSingleInputComponent', () => {
  let component: GenericSingleInputComponent;
  let fixture: ComponentFixture<GenericSingleInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericSingleInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericSingleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
