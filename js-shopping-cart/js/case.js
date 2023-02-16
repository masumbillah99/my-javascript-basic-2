/** 
 1. add click handler to the case plus button
 2. get the value inside the case number field (input field)
 3. convert the new case number 
 4. calculate the new case number
 5. set the value to the case number field
*/

function updateCaseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById("case-total-price");
    caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById("btn-case-plus").addEventListener("click", function () {
    const newCaseNumber = updateCountNumber("case-number-field", true);

    updateCaseTotalPrice(newCaseNumber);
    calculateProductTotal();
});

document.getElementById("btn-case-minus").addEventListener("click", function () {
    const newCaseNumber = updateCountNumber("case-number-field", false);

    updateCaseTotalPrice(newCaseNumber);
    calculateProductTotal();
});


/** 
function updateCaseNumber(isIncrease) {
    const caseNumberField = document.getElementById("case-number-field");
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;

    if (isIncrease) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
    }

    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
};
*/


/**  ----- repeated code ------
document.getElementById("btn-case-plus").addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(true);

    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById("case-total-price");
    caseTotalElement.innerText = caseTotalPrice;
});

document.getElementById("btn-case-minus").addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(false);

    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById("case-total-price");
    caseTotalElement.innerText = caseTotalPrice;
});
*/

/** 
// case plus event listener
document.getElementById("btn-case-plus").addEventListener("click", function () {
    const caseNumberField = document.getElementById("case-number-field");
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    const newCaseNumber = previousCaseNumber + 1;
    caseNumberField.value = newCaseNumber;
});

// case minus event listener
document.getElementById("btn-case-minus").addEventListener("click", function () {
    const caseNumberField = document.getElementById("case-number-field");
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    const newCaseNumber = previousCaseNumber - 1;
    caseNumberField.value = newCaseNumber;
});
*/