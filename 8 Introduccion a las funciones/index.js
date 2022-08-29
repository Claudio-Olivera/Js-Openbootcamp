
const siempreTrue = (() => n=true);
console.log(siempreTrue())

async function saludos(){
console.log("Hola soy una promesa");
}
setTimeout(saludos, 5000);

function* indicesParesAutomaticos(){
    let i = 1;
    while (true){
        i *= 2 
        if(i > 32){
            return
        }
        yield i
    }
}
generador = indicesParesAutomaticos();
console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)
console.log(generador.next().value)