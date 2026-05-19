function openWindow() {

    document.getElementById("window").src =
        "OpenedWindow.jpg";

    document.getElementById("title").innerHTML =
        "Janela Aberta";
}

function closeWindow() {

    document.getElementById("window").src =
        "ClosedWindow.jpg";

    document.getElementById("title").innerHTML =
        "Janela Fechada";
}

function breakWindow() {

    document.getElementById("window").src =
        "BrokenWindow.jpg";

    document.getElementById("title").innerHTML =
        "Janela Quebrada";
}