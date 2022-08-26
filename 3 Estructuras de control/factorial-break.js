/*Con una condicion*/
let i = 1;
let resultado = 1;
let numero = 4;
while (i <= numero ) { 
    if(numero === i){
        console.log(`El factorial de ${numero} es ${resultado}`)
        break;
    }
    i++;
    resultado *= i;
}
/* con dos condiciones*/ 

/*
let i = 1;
let resultado = 1;
let numero = 10;
while (i <= numero ) { 
    if(numero <= 1){
        console.log(`El factorial de ${numero} es 1`)
        break;
                }
                i++;
                resultado *= i;
    if (i === numero) {
        console.log(`El factorial de ${numero} es ${resultado}`)
    }
}
*/
