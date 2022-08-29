let datosPersonales = {
    nombre:"Claudio Miguel",
    apellido:"Olivera González",
    edad:33, 
    altura:1.85,
    eresDesarrollador:true
}

let datosAmigos = [
{
    nombre:"Filomena",
    apellido:"Garcia",
    edad:34, 
    altura:1.80,
    eresDesarrollador:false
},
{
    nombre:"Marcos",
    apellido:"Garcia",
    edad:35, 
    altura:1.70,
    eresDesarrollador:true
}
]


const edad = "edad"
console.log(datosPersonales[edad])

const datos1 = [{...datosPersonales}, ...datosAmigos]
console.log(datos1)

datos1.sort((a, b) => b.edad - a.edad)
console.log(datos1)


