import { Persona } from './persona';

describe('Persona', () => {
let persona:Persona;
  beforeEach(()=> {

      persona= new Persona("pedro",20);
  })

  it('creando un objeto de persona', () => {
    expect(persona).toBeTruthy();
  });

  it('test para comprobar tiempoParaJubilacion()', () => {
      
    expect(persona.tiempoParaJubilacion()).toBe(50);
    
  });

  it('test para comprobar tiempoParaJubilacion() pasado limite de 70', () => {
    
    let persona1= new Persona("juan",75);
    expect(persona1.tiempoParaJubilacion()).toBe(0);
   
  });
});