const nombre = "claudio"
const apellido = "olivera"

const objeto = {
    nombre,
    apellido
}
sessionStorage.setItem(JSON.stringify(objeto.nombre),JSON.stringify(objeto))
localStorage.setItem(JSON.stringify(objeto.nombre),JSON.stringify(objeto))

const fecha = Date()
document.cookie = "objeto=Objeto; expires=" + fecha
