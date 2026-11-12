const button = document.getElementById("greeting-button");
const message = document.getElementById("greeting-message");

button.addEventListener("click", function () {
    message.textContent = "Привіт! JavaScript працює!";
});
