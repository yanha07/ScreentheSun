function scrollToSignup() {
    window.location.href = "signorlogin.html";
}

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-auth");
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const authTitle = document.getElementById("auth-title");

    // Redirect to signup if "?mode=signup" is in URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("mode") === "signup") {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
        authTitle.textContent = "Signup";
        toggleButton.textContent = "Switch to Login";
    }

    // Toggle between login and signup
    toggleButton.addEventListener("click", function () {
        if (loginForm.style.display === "none") {
            loginForm.style.display = "block";
            signupForm.style.display = "none";
            authTitle.textContent = "Login";
            toggleButton.textContent = "Switch to Signup";
        } else {
            loginForm.style.display = "none";
            signupForm.style.display = "block";
            authTitle.textContent = "Signup";
            toggleButton.textContent = "Switch to Login";
        }
    });

    // Enhanced Email Validation
    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;
        if (!emailPattern.test(email)) return false;
        if (email.includes("..")) return false;
        if (email.startsWith(".") || email.startsWith("-") || email.endsWith(".") || email.endsWith("-")) return false;
        if (email.includes(" ")) return false;

        const domainParts = email.split("@")[1].split(".");
        if (domainParts[0].length < 2) return false;

        return true;
    }

    // Password Validation
    function isValidPassword(password) {
        return password.length >= 6 && /[A-Za-z]/.test(password) && /[0-9]/.test(password) && !/\s/.test(password);
    }

    // Name Validation
    function isValidName(name) {
        return /^[A-Za-z]{3,}$/.test(name);
    }

    // Handle signup form submission
    document.getElementById("signup-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("signup-name").value.trim();
    let email = document.getElementById("signup-email").value.trim();
    let password = document.getElementById("signup-password").value.trim();
    let confirmPassword = document.getElementById("signup-confirm-password").value.trim(); // New Confirm Password Field

    if (!isValidName(name)) {
        alert("Name must be at least 3 characters long and contain only letters.");
        return;
    }

    if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!isValidPassword(password)) {
        alert("Password must be exactly 6 characters long and contain at least one letter and one number.");
        return;
    }

    if (password !== confirmPassword) { // Confirm Password Validation
        alert("Passwords do not match. Please enter the same password.");
        return;
    }

    alert(`Welcome, ${name}! You have signed up with email: ${email}`);
    });

    // Handle login form submission
    document.getElementById("login-form").addEventListener("submit", function (event) {
        event.preventDefault();

        let email = document.getElementById("login-email").value.trim();
        let password = document.getElementById("login-password").value.trim();

        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!isValidPassword(password)) {
            alert("Password must be exactly 6 characters long and contain at least one letter and one number.");
            return;
        }

        alert(`Login successful for email: ${email}`);
    });

    // 🟢 Sunscreen Filter Logic
    const spfFilter = document.getElementById("spf");
    const skinTypeFilter = document.getElementById("skinType");
    const sunscreenCards = document.querySelectorAll(".sunscreen-card");

    function filterSunscreens() {
        const selectedSPF = spfFilter.value.toLowerCase();
        const selectedSkinType = skinTypeFilter.value.toLowerCase();

        sunscreenCards.forEach(card => {
            const details = card.querySelector("p").textContent.toLowerCase();
            const matchesSPF = selectedSPF === "all" || details.includes(`spf ${selectedSPF}`) || details.includes(`spf${selectedSPF}`);
            const matchesSkinType = selectedSkinType === "all" || details.includes(selectedSkinType);

            card.style.display = matchesSPF && matchesSkinType ? "block" : "none";
        });
    }

    spfFilter.addEventListener("change", filterSunscreens);
    skinTypeFilter.addEventListener("change", filterSunscreens);
});
