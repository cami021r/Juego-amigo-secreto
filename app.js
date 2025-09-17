// Arreglo principal con los nombres
let nombreAmigoSecreto = [];

// Arreglo para guardar los índices ya sorteados (para no repetir)
let indicesSorteados = [];


function limpiarCaja() {
    document.getElementById("amigo").value = "";
}

// Muestra la lista usando WHILE (sin <li>)
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    let i = 0;
    while (i < nombreAmigoSecreto.length) {
        lista.innerHTML += nombreAmigoSecreto[i] + "<br>";
        i++;
    }
}

// Agrega un amigo al arreglo
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        nombreAmigoSecreto.push(nombre);
        mostrarLista();
        limpiarCaja();
        
    }
}

// ---- Ayuda básica para evitar repetidos----
function esIndiceUsado(valor) {
    let j = 0;
    while (j < indicesSorteados.length) {
        if (indicesSorteados[j] === valor) {
            return true;
        }
        j++;
    }
    return false;
}

// Genera un índice aleatorio que NO se haya usado
function generarIndiceNoRepetido() {
    let numeroMaximo = nombreAmigoSecreto.length;

    // Si ya se sortearon todos
    if (indicesSorteados.length === numeroMaximo) {
        alert("Ya se sortearon todos los nombres posibles");
        return; // (queda undefined)
    }

    let indice = Math.floor(Math.random() * numeroMaximo);

  
    while (esIndiceUsado(indice)) {
        indice = Math.floor(Math.random() * numeroMaximo);
    }

    indicesSorteados.push(indice);
    return indice;
}

// Sortea un amigo secreto
function sortearAmigo() {
    if (nombreAmigoSecreto.length === 0) {
        alert("No hay amigos en la lista.");
        return;
    }

    let indice = generarIndiceNoRepetido();

    // Si ya no hay más por sortear, salir
    if (indice === undefined) {
        return;
    }

    let elegido = nombreAmigoSecreto[indice];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "🎉 Tu amigo secreto es: " + elegido;
}
