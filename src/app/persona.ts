export class Persona {
    constructor(public nombre:string, public edad:number){

    }

    tiempoParaJubilacion(){
        let tiempo=70-this.edad;
        if(tiempo>0)
            return tiempo
        else
            return 0
    }
}
