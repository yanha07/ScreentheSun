// Function to scroll to the signup section
function scrollToSignup() {
    const signupSection = document.getElementById('signup-form');
    if (signupSection) {
        signupSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-auth");
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const authTitle = document.getElementById("auth-title");

    // Initially hide the signup form
    signupForm.style.display = "none";

    // Toggle between login and signup forms
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
            scrollToSignup(); // Scroll to the signup section
        }
    });

    // Function to show error messages
    function showError(inputField, message) {
        const errorMessageDiv = document.getElementById(`${inputField}-error`);
        errorMessageDiv.textContent = message;
        errorMessageDiv.style.display = "block"; // Show the error message
    }

    // Function to clear error messages
    function clearError(inputField) {
        const errorMessageDiv = document.getElementById(`${inputField}-error`);
        errorMessageDiv.textContent = ""; // Clear the message
        errorMessageDiv.style.display = "none"; // Hide the message
    }

    // Validation Functions
    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z][a-zA-Z0-9._-]*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;
        return emailPattern.test(email);
    }

    function isValidPassword(password) {
        return password.length >= 6 && /[A-Za-z]/.test(password) && /[0-9]/.test(password) && !/\s/.test(password);
    }

    function isValidName(name) {
        return /^[A-Za-z\s]{3,}$/.test(name);
    }

    // Validate fields dynamically
    document.getElementById("signup-name").addEventListener("input", function () {
        const name = this.value.trim();
        if (!isValidName(name)) {
            showError("signup-name", "Name must be at least 3 characters long and contain only letters.");
        } else {
            clearError("signup-name");
        }
    });

    document.getElementById("signup-email").addEventListener("input", function () {
        const email = this.value.trim();
        if (!isValidEmail(email)) {
            showError("signup-email", "Please enter a valid email address.");
        } else {
            clearError("signup-email");
        }
    });

    document.getElementById("signup-password").addEventListener("input", function () {
        const password = this.value.trim();
        if (!isValidPassword(password)) {
            showError("signup-password", "Password must be at least 6 characters long and contain at least one letter and one number.");
        } else {
            clearError("signup-password");
        }
    });

    document.getElementById("signup-confirm-password").addEventListener("input", function () {
        const password = document.getElementById("signup-password").value.trim();
        const confirmPassword = this.value.trim();
        if (confirmPassword !== password) {
            showError("signup-confirm-password", "Passwords do not match. Please enter the same password.");
        } else {
            clearError("signup-confirm-password");
        }
    });

    // Handle signup form submission
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();
        clearError("signup-name");
        clearError("signup-email");
        clearError("signup-password");
        clearError("signup-confirm-password");

        const name = document.getElementById("signup-name").value.trim();
        const email = document.getElementById("signup-email").value.trim();
        const password = document.getElementById("signup-password").value.trim();
        const confirmPassword = document.getElementById("signup-confirm-password").value.trim();

        let isValid = true; // Track overall validity

        if (!isValidName(name)) {
            showError("signup-name", "Name must be at least 3 characters long and contain only letters.");
            isValid = false;
        }

        if (!isValidEmail(email)) {
            showError("signup-email", "Please enter a valid email address.");
            isValid = false;
        }

        if (!isValidPassword(password)) {
            showError("signup-password", "Password must be at least 6 characters long and contain at least one letter and one number.");
            isValid = false;
        }

        if (password !== confirmPassword) {
            showError("signup-confirm-password", "Passwords do not match. Please enter the same password.");
            isValid = false;
        }

        if (isValid) {
            alert(`Welcome, ${name}! You have signed up with email: ${email}`);
            // Here you can add code to send the signup data to your server
            signupForm.reset(); // Reset the form after successful submission
        }
    });

    // Handle login form submission
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        clearError("login-email");
        clearError("login-password");

        const email = document.getElementById("login-email").value.trim();
        const password = document.getElementById("login-password").value.trim();

        let isValid = true; // Track overall validity

        if (!isValidEmail(email)) {
            showError("login-email", "Please enter a valid email address.");
            isValid = false;
        }

        if (!isValidPassword(password)) {
            showError("login-password", "Password must be at least 6 characters long and contain at least one letter and one number.");
            isValid = false;
        }

        if (isValid) {
            alert(`Login successful for email: ${email}`);
            // Here you can add code to send the login data to your server
            loginForm.reset(); // Reset the form after successful submission
        }
    });
});