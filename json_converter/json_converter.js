document.addEventListener("DOMContentLoaded", function () {
    const jsonInput = document.getElementById("jsonInput");
    const convertButton = document.getElementById("convertButton");
    const objectOutput = document.getElementById("objectOutput");

    convertButton.addEventListener("click", function () {
        try {
            const userInput = jsonInput.value;
            const parsedObject = JSON.parse(userInput);
            const formattedObject = JSON.stringify(parsedObject, null, 2);
            objectOutput.textContent = formattedObject;
        } catch (error) {
            objectOutput.textContent = "Invalid JSON!";
        }
    });
});
