let lista=[3,5,9,4];

for (let i=0;i<lista.length;i++) {

    console.log(lista[i]);
}
console.log("********************")



function sumar (a ,b){

    return a +b;

}
/*
function sumarFormatoA(a,b) {

    console.log("|"+ sumar(a,b)+"|");

}
function sumarFormatoB(a,b) {

    console.log("<"+ sumar(a,b)+">");

}
*/

formatoA(10);

//high order funcion en programacion funcional
// son funciones que reciben como parte de su parametrización otra funcion
sumarConFuncion(3,3,formatoA);
sumarConFuncion(3,2,function(resultado) {
        console.log("<"+resultado+">");
})




function formatoA(resultado) {

        console.log("|"+resultado+"|");
}

function sumarConFuncion(a,b,f) {

            f(sumar(a,b));

}

