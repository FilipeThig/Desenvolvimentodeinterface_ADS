function saudar() {
    let nome = document.getElementById("nome").value;
    let resultado = document.getElementById("resultado");

    if (nome.trim() === "") {
        resultado.textContent = "Por favor, preencha seu nome.";
    } else {
        resultado.textContent = "Olá, " + nome + "!";
    }
}
