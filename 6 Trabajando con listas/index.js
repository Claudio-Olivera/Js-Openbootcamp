const listaCompra=["Pan","Leche","Agua","Carne","Verduras"]
listaCompra.push("Aceite de Girasol")
console.log(listaCompra)

listaCompra.splice(5) /*con solo poner 5, es suficiente , podria poner (5,1)*/
console.log(listaCompra)


const peliculas = [
    {
        titulo:"El silencio de los inocentes",
        director:"Jonathan Demme",
        anio:1991
    },
    {
        titulo:"Jurassic Park",
        director:"Steven Spielberg",
        anio:1993
    },
    {
        titulo:"Terminator 2",
        director:"James Cameron",
        anio:1991
    }
]
/*no se si la palabra año pueda generar problemas, por las dudas uso anio*/

const posterioresAlAñoDosMilDiez = peliculas.filter(pelicula => pelicula.anio >= 2010)
/*Vacio porque ninguna de las 3 es posterior al 2010*/
console.log(posterioresAlAñoDosMilDiez)


const listaDeDirectores = peliculas.map(({director})=> director)
console.log(listaDeDirectores)

const titulosDePeliculas = peliculas.map(({titulo})=> titulo)
console.log(titulosDePeliculas)

const directoresYPeliculas = listaDeDirectores.concat(titulosDePeliculas)
console.log(directoresYPeliculas)

/*Se que los nombres de la constante es exesivamente largo
lo dejo asi para poder saber exactamente que estoy haciendo en este ejemplo*/ 
const directoresYPeliculasPorFactorDePropagacion = [ `${[...titulosDePeliculas]},${[...listaDeDirectores]}`]
console.log(directoresYPeliculasPorFactorDePropagacion)