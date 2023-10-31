const inputText = document.getElementById("inputText");
const message = document.getElementById("message");
const speed = document.getElementById("speed");

let startTime, endTime;

inputText.addEventListener("keyup", function() {
    if (!startTime) {
        startTime = new Date();
    }
    if (inputText.value === inputText.defaultValue) {
        startTime = null;
        endTime = null;
        message.textContent = "";
        speed.textContent = "";
    } else {
        endTime = new Date();
        const elapsedTime = (endTime - startTime) / 1000;
        const typedText = inputText.value;
        const words = typedText.trim().split(/\s+/).length;
        const wpm = Math.round(words / (elapsedTime / 60));
        
        speed.textContent = `Ваша скорость печати: ${wpm}знаков/мин`;
    }
});
