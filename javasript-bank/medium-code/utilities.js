// hold the input field value & convert the value in number
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    inputField.value = "";
    return inputFieldValue;
};

// hold the element innerText & convert the innerText in number
function getElementValue(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
};

// hold the element innerText & set the innerText new value
function setElementValue(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}