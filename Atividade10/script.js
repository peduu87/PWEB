function calculateBMI(weight, height) {
    return weight / (height * height);
}

function getClassification(bmi) {
    if (bmi < 18.5) {
        return "Magreza";
    } else if (bmi < 25) {
        return "Normal";
    } else if (bmi < 30) {
        return "Sobrepeso";
    } else if (bmi < 40) {
        return "Obesidade";
    } else {
        return "Obesidade Grave";
    }
}

function calc() {
    let height = parseFloat(document.getElementById("height").value) / 100.0;
    let weight = parseFloat(document.getElementById("weight").value);

    if (!height || !weight) {
        document.getElementById("result").value = "Input inválido";
        return;
    }

    let bmi = calculateBMI(weight, height);
    let classification = getClassification(bmi);

    document.getElementById("result").value =
        "IHC: " + bmi.toFixed(2) + " - " + classification;
}