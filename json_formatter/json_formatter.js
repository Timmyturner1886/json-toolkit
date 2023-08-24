document.addEventListener("DOMContentLoaded", function () {
    const jsonInput = document.getElementById("jsonInput");
    const formatButton = document.getElementById("formatButton");
    const jsonOutput = document.getElementById("jsonOutput");

    formatButton.addEventListener("click", function () {
        try {
            const userInput = jsonInput.value;
            const parsedObject = JSON.parse(userInput);
            const formattedJson = JSON.stringify(parsedObject, null, 2);
            jsonOutput.textContent = formattedJson;
        } catch (error) {
            jsonOutput.textContent = "Invalid JSON!";
        }
    });
});
