let nombre = "Claudio";
let apellido = "Olivera";
let estudiante =`${nombre} ${apellido}`
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let estudianteLongitud = estudiante.length
let primeraLetraNombre = nombre.charAt(0)
let ultimaLetraApellido = apellido.charAt(6);
let elimadorDeEspacio = estudiante.replace(/ /g, "");
let comprobarNombre = estudiante.includes(nombre);

console.log(nombre)
console.log(apellido)
console.log(estudiante)
console.log(estudianteMayus)
console.log(estudianteMinus)
console.log(estudianteLongitud)
console.log(primeraLetraNombre)
console.log(ultimaLetraApellido)
console.log(elimadorDeEspacio)
console.log(comprobarNombre)
