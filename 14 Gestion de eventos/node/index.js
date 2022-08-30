
    const boton = document.getElementById("b")
    boton.onclick = mostrarAlerta;

    function mostrarAlerta(){
        window.alert("click en el botón")
    }

    $(document).ready(()=>{
        $("#b2").click(()=>{
            console.log("Hola, estoy utilizando jQuery")
        })
    })