const fechaDeHoy = new Date()
console.log(fechaDeHoy)

const fechaNacimiento = new Date(1989,04,12)
console.log(fechaNacimiento)

let esMasTarde = (fechaDeHoy > fechaNacimiento)
console.log(esMasTarde)

const diaNacimiento = (fechaNacimiento.getDate())
console.log(diaNacimiento)

const mesNacimiento = (fechaNacimiento.getMonth()+1)
console.log(mesNacimiento)

const anioNacimiento = (fechaNacimiento.getFullYear())
console.log(anioNacimiento)
