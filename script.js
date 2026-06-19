let display = document.getElementById("display");

// Add numbers/operators to display
function append(value) {
    display.value += value;
}

// Clear full screen
function clearDisplay() {
    display.value = "";
}

// Delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}