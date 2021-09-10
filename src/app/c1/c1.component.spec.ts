import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Persona } from '../persona';

import { C1Component } from './c1.component';

describe('C1Component', () => {
  let component: C1Component;
  let fixture: ComponentFixture<C1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C1Component);
    component = fixture.componentInstance;
    component.listaPersonas.push(new Persona("pedro",20));
    component.listaPersonas.push(new Persona("ana",50));
    component.listaPersonas.push(new Persona("david",40));
    component.listaPersonas.push(new Persona("maria",10));
    fixture.detectChanges();
  });

  it('test de creacion del componente', () => {
    expect(component).toBeTruthy();
  });

  it('test de listaPersona inicializada', () => {

    let persona= component.listaPersonas.find((persona)=>persona.nombre=="pedro");
    expect(persona).not.toBeNull();
    if (persona!=null) {
      expect(persona.nombre).toBe("pedro");
      expect(persona.edad).toBe(20);
    }
  
  

    
  });

  it('test de listaPersona añadir una persona', () => {
   
    component.insertarPersona(new Persona("juan",50));
   
    let persona= component.listaPersonas.find((persona)=>persona.nombre=="juan");
    expect(persona).not.toBeNull();
    if (persona!=null) {
      expect(persona.nombre).toBe("juan");
      expect(persona.edad).toBe(50);
    }

  });

  it('test de listaPersona borrar una persona', () => {
    let persona= new Persona("pedro",20);
    component.borrarPersona(persona)

    let personaBorrada= component.listaPersonas.find((persona)=>persona.nombre=="pedro");
    expect(personaBorrada).not.toBeDefined()
  });


  it('test de suma edades en persona', () => {
  
    let total=component.sumarEdades(component.listaPersonas);

   
    expect(total).toBe(120);
  });

 

});
