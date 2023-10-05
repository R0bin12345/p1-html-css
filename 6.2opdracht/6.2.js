// JavaScript-functie om de tekst en kleur te wijzigen
function veranderTekstEnKleur() {
    var element = document.getElementById("tekst");

    // Nieuwe tekst
    element.innerHTML = "De tekst is aangepast!";

    // Nieuwe kleur
    element.style.color = "red";
}