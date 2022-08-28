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




let nombre = personas.filter (persona => persona.edad >= 20).map(({nombre})=>nombre);
console.log(nombre)
/*de esta forma solo uno*/ 

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