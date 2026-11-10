function calcularMedia() {
    let nota1 = document.getElementById("nota1").value;
    let nota2 = document.getElementById("nota2").value;
    let nota3 = document.getElementById("nota3").value;

    let resultado = document.getElementById("resultado");

    if (nota1 === "") {
        resultado.textContent = "A primeira nota está vazia.";
    } else if (nota2 === "") {
        resultado.textContent = "A segunda nota está vazia.";
    } else if (nota3 === "") {
        resultado.textContent = "A terceira nota está vazia.";
    } else if (Number(nota1) < 0 || Number(nota1) > 10) {
        resultado.textContent = "A primeira nota é inválida.";
    } else if (Number(nota2) < 0 || Number(nota2) > 10) {
        resultado.textContent = "A segunda nota é inválida.";
    } else if (Number(nota3) < 0 || Number(nota3) > 10) {
        resultado.textContent = "A terceira nota é inválida.";
    } else {
        let media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;

        resultado.textContent = "Média: " + media.toFixed(2);
    }
}
