const arr1 = [1,2,3,4,5]
const arr2 = [1,2,3,4,5]

/*Los arrays no se pueden comparar de esta manera*/
console.log(arr1 === arr2)

/*Para poder comprarlos debo emplear every*/

const compararArr = (arr1 , arr2)=>{
    if (arr1.length!== arr2.length) return false /*hago un primer checkeo de que al menos ambos array tengan la misma cantidad de elementos*/
    const res = arr1.every((valor,i) => valor === arr2[i])/*compara los valores de las posiciones de ambos arrays */
    return res /*es como usar un else*/
}

/*Ahora si arroja la respuesta correcta, ambos son iguales*/
console.log(compararArr(arr1, arr2))

/*Si tuviera un array diferente*/
const arr3 = [1,2,3,5,6,7,8,9] /*diferente cantidad, no pasa la primera comprobacion(length)*/
console.log(compararArr(arr1,arr3))

const arr4 = [1,2,3,4,6]/*pasa la primera comprobacion pero no la segunda(every)*/
console.log(compararArr(arr1,arr4))

/*every devolvera true o false dependiendo de las condiciones
OJO, SI LO PASO VACIO DEVUELVE SIEMPRE TRUE
*/