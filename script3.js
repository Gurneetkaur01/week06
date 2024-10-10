const form = document.getElementById("userForm");
const errorMessage = document.getElementById("errorMessage");

form.addEventListener("submit", (event) => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    if (username.length < 5) {
        event.preventDefault();
        errorMessage.textContent = "Username must be at least 5 characters long.";
    } else if (password.length < 8) {
        event.preventDefault();
        errorMessage.textContent = "Password must be at least 8 characters long.";
    } else {
        errorMessage.textContent = "";
    }
});
