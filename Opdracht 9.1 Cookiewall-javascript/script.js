// JavaScript om de Cookiewall te beheren

// Haal de elementen op
const showCookiewallButton = document.getElementById("showCookiewall");
const cookiewallModal = document.getElementById("cookiewallModal");
const closeCookiewallButton = document.getElementById("closeCookiewall");
const ageInput = document.getElementById("ageInput");
const verifyAgeButton = document.getElementById("verifyAge");
const underageMessage = document.getElementById("underageMessage");

// Toon de Cookiewall wanneer op de knop wordt geklikt
showCookiewallButton.addEventListener("click", function() {
    cookiewallModal.style.display = "block";
});

// Sluit de Cookiewall wanneer op de 'X' wordt geklikt
closeCookiewallButton.addEventListener("click", function() {
    cookiewallModal.style.display = "none";
});

// Verifieer de leeftijd en handel de actie dienovereenkomstig af
verifyAgeButton.addEventListener("click", function() {
    const age = parseInt(ageInput.value);
    
    if (age >= 18) {
        // Als ouder dan 18, doorverwijzen naar een website 
        window.location.href = "https://www.example.com";
    } else {
        // Als jonger dan 18, toon de melding
        underageMessage.style.display = "block";
    }
});
