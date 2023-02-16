// function -- for increase/decrease number (plus, minus)
function updateCountNumber(elementId, isIncrease) {
    const countNumberField = document.getElementById(elementId);
    const countNumberString = countNumberField.value;
    const previousCountNumber = parseInt(countNumberString);

    let newCountNumber;

    if (isIncrease === true) {
        newCountNumber = previousCountNumber + 1;
    }
    else {
        newCountNumber = previousCountNumber - 1;
    }

    countNumberField.value = newCountNumber;
    return newCountNumber;
};

function getTextElementById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementString = textElement.innerText;
    const textElementTotal = parseInt(textElementString);
    return textElementTotal;
}

function setTextElementValueById(elementId, value) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = value;
}

function calculateProductTotal() {
    const currentPhoneTotal = getTextElementById('phone-total-price');
    const currentCaseTotal = getTextElementById('case-total-price');

    // calculate sub total
    const subTotalPrice = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', subTotalPrice);

    // calculate tax
    const taxAmountString = (subTotalPrice * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);

    // calculate total
    const totalPrice = subTotalPrice + taxAmount;
    setTextElementValueById("final-total", totalPrice);
}

//  Check Out button Event handler;
document.getElementById("check-out").addEventListener("click", function () {
    Swal.fire(
        'yessssss!',
        'You bought a iPhone with iPhone cover by paid of too much money',
        'success'
    );
});