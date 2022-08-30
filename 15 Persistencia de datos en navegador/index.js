const nombre = "claudio"
const apellido = "olivera"

const objeto = {
    nombre,
    apellido
}
sessionStorage.setItem(JSON.stringify(objeto.nombre),JSON.stringify(objeto))
localStorage.setItem(JSON.stringify(objeto.nombre),JSON.stringify(objeto))
/*para que expire en 2 minutos la cookie*/
document.cookie = `datos=${JSON.stringify(objeto)};expires=${new Date(now.getTime() + 2 * 60000)}`
