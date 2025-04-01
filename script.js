document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("infoButton").addEventListener("click", function() {
        document.getElementById("infoText").textContent = "A Narcos három évadon keresztül mutatja be a kolumbiai drogkartellek felemelkedését és bukását.";
    });

    document.getElementById("contactForm")?.addEventListener("submit", function(event) {
        event.preventDefault();
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        
        if (name === "" || email === "") {
            alert("Kérlek töltsd ki az összes mezőt!");
        } else {
            alert("Köszönjük az üzeneted!");
        }
    });
});