class Estudiante {
    constructor(nombre, asignaturas) {
        this.nombre = nombre
        this.asignaturas = asignaturas
    }
    obtenerDatos() {
        return [this.nombre, this.asignaturas]
    }
}
const claudio = new Estudiante("Claudio", ["Javascript", "html", "css"])

let datos = claudio.obtenerDatos()
console.log(datos)
