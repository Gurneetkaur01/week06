document.addEventListener("keydown", (event) => {
    document.getElementById("keyCode").textContent = event.keyCode;
    document.getElementById("keyValue").textContent = event.key;
});
