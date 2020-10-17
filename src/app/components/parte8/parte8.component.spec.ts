import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parte8Component } from './parte8.component';

describe('Parte8Component', () => {
  let component: Parte8Component;
  let fixture: ComponentFixture<Parte8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parte8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parte8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
