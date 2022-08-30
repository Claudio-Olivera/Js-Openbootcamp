function numero(num) {
    let fib = [0, 1]; //los primeros dos numeros no conozco otra manera...
    for (let i = 2; i <= num; i++) {
        //el i=2 porque ya tengo los primeros dos elementos 0 y 1 en la lista.
        /*recordar que estoy trabajando con las posiciones y no con el valor del indice*/
        /*la 4 posicion de la lista da tres, porque a la posicion se le resta -1 y tomamos 
        el valor correspondiente a la pocion que seria 2 (no 3) y despues le sumamos aplicando
        la misma logica el resultado de fib[i-2] que seria 1 , entonces 2 + 1 = 3 para la posicion 4*/
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    console.log(fib)
}

numero(6)