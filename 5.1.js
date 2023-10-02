function veranderTekst() {
    var element = document.getElementById("f1");
    element.textContent = "De tekst is gewijzigd met JavaScript.";
}

function setTekstKleur() {
    var element = document.getElementById("f1");
    element.style.color = "blue"; // Verander de tekstkleur naar blauw
}

function veranderHTMLInhoud() {
    var element = document.getElementById("demo");
    element.innerHTML = "De HTML-inhoud is gewijzigd met JavaScript.";
}