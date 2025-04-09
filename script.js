function convertTemperature() { 
    // Get the input temperature value 
    let temperature = document.getElementById("temperature").value; 

    // Check if the input is a valid number 
    if (isNaN(temperature) || temperature === "") { 
        alert("Please enter a valid temperature.");
        return; 
    }

    // Convert the input value to a number 
    temperature = parseFloat(temperature); 

    // Get the selected conversion type 
    let conversionType = document.querySelector('input[name="conversion"]:checked').value; 

    let result; 

    // Perform conversion based on selected type 
    if (conversionType === "CtoF") { 
        result = (temperature * 9 / 5) + 32; 
        result = result.toFixed(2); 
    } else if (conversionType === "FtoC") { 
        result = (temperature - 32) * 5 / 9; 
        result = result.toFixed(2); 
    }

    // Display the result on the page (fixed line)
    document.getElementById("result").textContent = `Result: ${result}°`; 
}
