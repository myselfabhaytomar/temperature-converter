function convertTemperature() {
    // Get the input value
    let celsiusInput = document.getElementById("celsius").value;

    // Check if the input is a valid number
    if (!isNaN(celsiusInput)) {
        // Convert Celsius to Fahrenheit
        let fahrenheit = (celsiusInput * 9/5) + 32;

        // Display the result
        document.getElementById("result").innerHTML = `${celsiusInput}°C is ${fahrenheit.toFixed(2)}°F`;
    } else {
        // Display an error message if the input is not a valid number
        document.getElementById("result").innerHTML = "Please enter a valid temperature";
    }
}
