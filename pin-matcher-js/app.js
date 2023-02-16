/** 
    1. add event handler in generate pin btn
    2. then create a 5 digit random number
    3. and show this number in the input field
    -----------
    4. add event bubble for all numbers workable
        i. if click 'C' the input field is clear
        ii. if click '<' the last input number is clear
    5. then show this typed numbers in the input field
    -----------
    6. then, add event handler in the submit btn
    7. if the generate pins are equal with typed pins show success message
    8. else, show warning message
*/

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

document.getElementById('calculator').addEventListener("click", function (event) {
    const number = event.target.innerText;
    const typedPinField = document.getElementById("typed-pin");
    const previousTypedPin = typedPinField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typedPinField.value = '';
        }
        else if (number === '<') {
            const digits = previousTypedPin.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedPinField.value = remainingDigits;
        }
    }
    else {
        const newTypedPin = previousTypedPin + number;
        typedPinField.value = newTypedPin;
    }
});

document.getElementById('btn-pin-submit').addEventListener('click', function () {
    const displayPinField = document.getElementById("display-pin");
    const displayPin = displayPinField.value;

    const typedPinField = document.getElementById("typed-pin");
    const typedPin = typedPinField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');

    if (displayPin === typedPin) {
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
        displayPinField.value = '';
        typedPinField.value = '';
    }
    else {
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
        typedPinField.value = '';
    }
});