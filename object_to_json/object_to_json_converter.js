document.addEventListener("DOMContentLoaded", function () {
    const objectInput = document.getElementById("objectInput");
    const convertButton = document.getElementById("convertButton");
    const jsonOutput = document.getElementById("jsonOutput");

    convertButton.addEventListener("click", function () {
        try {
            const userInput = objectInput.value;
            const parsedObject = JSON.parse(userInput);
            const jsonString = JSON.stringify(parsedObject, null, 2);
            jsonOutput.textContent = jsonString;
        } catch (error) {
            jsonOutput.textContent = "Invalid JSON!";
        }
    });
});
