document.getElementById("checkButton").addEventListener("click", function() {
    var budget = parseInt(document.getElementById("budget").value);
    var product = parseInt(document.getElementById("product").value);
    var resultElement = document.getElementById("result");

    if (budget >= product) {
        resultElement.textContent = "U heeft genoeg geld!";
        resultElement.style.color = "green";  // Tekst in groen
    } else {
        resultElement.textContent = "Helaas,te weinig geld";
        resultElement.style.color = "red";    // Tekst in rood
    }
});
