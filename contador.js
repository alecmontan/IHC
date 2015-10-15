var acertos=0;
var erros=0;
function acertou() {
    acertos++;
}

function errou() {
	erros++;
}

function imprimir() {
	document.write(acertos);
	document.write(" | ");
	document.write(erros);
}
