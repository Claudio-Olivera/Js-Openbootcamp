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

/*every devolvera true o false si los valores cumplen la condicion
OJO, SI LO PASO VACIO DEVUELVE SIEMPRE TRUE
*/

/*some devuelve true si al menos uno de los valores cumple la condicion*/
const arr8 = [1,2,3,4,5,-8]

/** hay algun valor menor a 0 ?*/
const res = arr8.some (valor => valor < 0)
console.log(res)
/** hay algun valor menor a -20 ?*/
const res2 = arr8.some (valor => valor < -20)
console.log(res2)
/** hay algun valor igual a 5 */
const existe = arr8.some(valor => valor === 5)
console.log(existe)

/* Ejemplo con objetos*/
const personas = [
    {
        nombre:"Luis",
        edad: 20,
        email: "luis928@gmail.com.ar"
    },
    {
        nombre:"Hernan",
        edad: 22,
        email: "Hernan928@gmail.com.ar"
    },
    {
        nombre:"Patricia",
        edad: 19,
        email: "pato28@gmail.com.ar"
    },
    {
        nombre:"Micaela",
        edad: 19,
        email: "mica28@gmail.com.ar"
    },
]

/*existe micaela en personas ?*/
const existeMicaela = personas.some(persona => persona.nombre === "Micaela")
/*existe = true*/
console.log(existeMicaela)

// Cómo obtener una lista a partir de un objeto iterable
const str = "Hola soy Gorka"
console.log(str[5])

const ar_str = Array.from(str)
console.log(ar_str)

const set = new Set([2, 3, "hola", 4])
const ar_set = Array.from(set)
console.log(ar_set)

const keys = ar_set.keys()
console.log(keys)

const ar_keys = Array.from(keys)
console.log(ar_keys)