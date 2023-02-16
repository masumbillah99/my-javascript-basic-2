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

function calculateSubTotal() {
    const currentPhoneTotal = getTextElementById('phone-total-price');
    const currentCaseTotal = getTextElementById('case-total-price');

    // calculate sub total
    const subTotalPrice = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', subTotalPrice);

    // calculate tax
    const taxAmountString = (subTotalPrice * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount', taxAmount);
}