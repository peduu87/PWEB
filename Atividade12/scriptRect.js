// Pode em inglês né, Denilce? 🤭
function Rectangle(base, height) {
    this.base = base;
    this.height = height;

    this.calculateArea = function () {
        return this.base * this.height;
    };
}

function calcArea() {
    let base = parseFloat(document.getElementById("base").value);
    let height = parseFloat(document.getElementById("height").value);

    if (!base || !height) {
        document.getElementById("result").value = "Entrada inválida";
        return;
    }

    let rectangle = new Rectangle(base, height);

    document.getElementById("result").value = "Área: " + rectangle.calculateArea();
}