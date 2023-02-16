function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 5) {
        return pin;
    } else {
        // console.log('not found');
        return getPin();
    }
}

function generatePin() {
    const random = Math.round(Math.random() * 100000);
    return random;
}

document.getElementById("generate-pin").addEventListener("click", function () {
   const pin = getPin();
   
   // display pin field
   const displayPinField = document.getElementById('display-pin');
   displayPinField.value = pin;
});