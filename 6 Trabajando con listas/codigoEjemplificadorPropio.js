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

/*de esta forma filtro por condicion y despues mapeo aprovechando desestructuracion*/ 
let nombre = personas.filter (persona => persona.edad >= 20).map(({nombre})=>nombre);
console.log(nombre)


personas.forEach(persona=> {
    if(persona.edad>=20){
    console.log(persona.nombre)}
});
/*de esta forma todos con for each */

const personitas = [
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

personitas.filter(persona => {
    if(persona.edad > 19){
        console.log(persona.nombre) ;
    }
})

const personalidades = [
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
/*ordenar los datos de menor a mayor , la inversa seria b - a */
/*OJO sort si modifica los datos de personalidades por eso no es necesario asignarle
otra variable*/
/*sort a es elemento anterior , y b seria elemento siguiente , sort puede retornar positivo, negativo y cero
si pasa negativo significa que a tiene indicice menor que b , aplicando un return -1 nos devolveria toda la lista al reves.*/
personalidades.sort((a, b) => a.edad - b.edad)
console.log(personalidades)