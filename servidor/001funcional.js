let lista = [1,2,3,4];
for(let i=0;i<lista.length;i++){
    console.log(lista[i]);
}

console.log("*********************");
console.log(sumar(2,3));

function sumar(a,b){
    return a + b;
}

function sumarFormatoA(a,b){
    console.log("|" + sumar(a,b) + "|");
}

function sumarFormatoB(a,b){
    console.log("<" + sumar(a,b) + ">");
}
console.log("*********************");
formatoA(10);
console.log("*********************");
sumarConFuncion(3,3,formatoA);

function formatoA(resultado){
    console.log("|"+resultado+"|");
}

//high order funcion en programacion funcional
//son funciones que reciben como parte de su parametrizacion otra funcion
function sumarConFuncion(a,b,f){
    f(sumar(a,b));
}

console.log("*********************");

sumarConFuncion(3,2,function(resultado){
    console.log("<"+resultado+">");
})


