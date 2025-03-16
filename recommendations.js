document.addEventListener("DOMContentLoaded", function () {
    // **Back button functionality**
    const backButton = document.getElementById("back-button"); // Make sure this ID exists in recommendations.html
    if (backButton) {
        backButton.addEventListener("click", function () {
            window.location.href = "index1.html"; // Redirect to home
        });
    }
});
