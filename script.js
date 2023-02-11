const resultado = document.querySelector( '#last-calc');
const resultadofinal = document.querySelector( '#result-calc');

function insert( valor ) {
    resultado.innerHTML += valor;
}

function clearAll () {
    resultado.innerHTML = '';
    resultadofinal.innerHTML = '';
}

function backspace () {
    if (resultado.textContent){
        let result = document.querySelector( '#last-calc').innerHTML;
        resultado.innerHTML = result.substring(0, result.length -1);
    }
}

function confirma () {
    if (resultado.textContent != 'Erro') {
        document.getElementById("result-calc").innerHTML = eval(resultado.
            innerHTML)
    }
}