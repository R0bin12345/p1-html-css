// Hard gecodeerd budget (pas deze waarde aan naar jouw wens)
const budget = 100;

// Vraag de gebruiker om de prijs van het product
document.getElementById("checkButton").addEventListener("click", function() {
    const productPrijs = parseFloat(prompt("Heeft u voldoende saldo?"));

    // Controleer of de invoer geldig is (een getal)
    if (isNaN(productPrijs)) {
        alert("Ongeldige invoer. Voer een getal in voor de prijs.");
    } else {
        // Controleer of de gebruiker genoeg geld heeft
        if (productPrijs <= budget) {
            alert("U heeft te weinig saldo om dit product te kopen!");
        } else {
           
            alert("U heeft voldoende saldo");
        } 

    }
});