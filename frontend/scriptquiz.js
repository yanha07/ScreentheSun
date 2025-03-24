
 document.getElementById("skinQuiz").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get user inputs
    let skinType = document.getElementById("q3").value;
    let acneProne = document.getElementById("q4").value;
    let sensitiveSkin = document.getElementById("q5").value;

    let recommendation = "Use a broad-spectrum sunscreen with SPF 30+.";

    // Simple conditions for dummy recommendations
    if (skinType === "oily") {
        recommendation = "For oily skin, use an oil-free, matte finish sunscreen (SPF 50+).";
    } else if (skinType === "dry") {
        recommendation = "For dry skin, use a moisturizing sunscreen with hyaluronic acid (SPF 30+).";
    }

    if (acneProne === "yes") {
        recommendation += " Choose a non-comedogenic sunscreen to prevent breakouts.";
    }

    if (sensitiveSkin === "yes") {
        recommendation += " A mineral sunscreen (zinc oxide or titanium dioxide) is best for sensitive skin.";
    }

    // Display recommendation
    document.getElementById("sunscreen-message").textContent = recommendation;
    document.getElementById("recommendations").style.display = "block";
});
