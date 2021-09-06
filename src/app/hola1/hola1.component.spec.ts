import { ComponentFixture, TestBed} from '@angular/core/testing';

import { Hola1Component } from './hola1.component';

describe('Hola1Component', () => {
  let component: Hola1Component;
  let fixture: ComponentFixture<Hola1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Hola1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Hola1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function descranyibe(arg0: string, arg1: () => void) {
  throw new Error('Function not implemented.');
}

