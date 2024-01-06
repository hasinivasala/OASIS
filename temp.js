function convertTemperature() {
    // Get user input
    var temperatureInput = document.getElementById("temperature").value;
    var unitInput = document.getElementById("unit").value;

    // Validate input as a number
    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for temperature.");
        return;
    }

    // Convert temperature
    var convertedTemperature;
    switch (unitInput) {
        case "celsius":
            convertedTemperature = (parseFloat(temperatureInput) * 9/5) + 32;
            document.getElementById("convertedTemperature").textContent = convertedTemperature.toFixed(2) + " °F";
            break;
        case "fahrenheit":
            convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9;
            document.getElementById("convertedTemperature").textContent = convertedTemperature.toFixed(2) + " °C";
            break;
        case "kelvin":
            convertedTemperature = parseFloat(temperatureInput) + 273.15;
            document.getElementById("convertedTemperature").textContent = convertedTemperature.toFixed(2) + " K";
            break;
        default:
            alert("Invalid unit selected.");
            break;
    }
}
