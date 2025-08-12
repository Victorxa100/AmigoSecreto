// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
//console.log (amigos)

function agregarAmigo () {
let amigosAgregados = document.getElementById("amigo").value

if (amigosAgregados ==="")  {
    alert ("Por favor, ingrese un nombre");
}
else {
    amigos.push(amigosAgregados);
    console.log (amigos)
    document.getElementById("amigo").value = "";
    recorrerArray();
    }
    
    

}

function recorrerArray () {
    let lista = document.getElementById("listaAmigos")
    lista.innerHTML = "";
    for (let i = 0; i <amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);

    }
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let amigoSorteado = Math.floor(Math.random() * amigos.length )
        let amigoGanador = amigos[amigoSorteado]
        let elementoResultado = document.getElementById("resultado")
        elementoResultado.innerHTML = " el amigo sorteado es " + amigoGanador
    }
}





