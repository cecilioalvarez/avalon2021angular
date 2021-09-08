import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hola6aComponent } from './hola6a.component';

describe('Hola6aComponent', () => {
  let component: Hola6aComponent;
  let fixture: ComponentFixture<Hola6aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hola6aComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hola6aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
