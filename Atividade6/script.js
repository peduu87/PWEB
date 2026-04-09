// media.html
function calcAvg() {
    let nome = document.getElementById("name").value;

    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let n3 = parseFloat(document.getElementById("n3").value);
    let n4 = parseFloat(document.getElementById("n4").value);

    let media = (n1 + n2 + n3 + n4) / 4;

    alert("Aluno: " + name + "\nMédia: " + media.toFixed(2));
}

// operacoes.html
function calcOps() {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);

    let sum = n1 + n2;
    let sub = n1 - n2;
    let mult = n1 * n2;
    let div = n1 / n2;
    let overflow = n1 % n2;

    alert(
        "Soma: " + sum +
        "\nSubtração: " + sub +
        "\nMultiplicação: " + mult +
        "\nDivisão: " + div +
        "\nResto: " + overflow
    );
}