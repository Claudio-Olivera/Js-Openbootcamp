let altura = 185
let alturaFlotante = 1.85 
let peso = 98.5
let alturaMetrosRedondeada = Math.round(alturaFlotante)
/* opcion de redondeo hacia arriba
let alturaMetrosRedondeada = Math.ceil(alturaFlotante)
*/
let alturaMetrosRedondeadaAbajo = Math.floor(alturaFlotante)

/*Funcion para saber si el numero maximo obtenible en javascript (mas +1) , 
es igual al numero maximo obtenible*/ 
function comparacionNumeroMaximo() {
    let numeroMaximo = Number.MAX_VALUE+1
    if (numeroMaximo === Number.MAX_VALUE){
        /*comprobaciones por consola
        console.log(Number.MAX_VALUE)
        console.log(numeroMaximo)
        */ 
        return console.log("Es igual")
    }else {
        return console.log("No es igual")
    }
}
comparacionNumeroMaximo()
