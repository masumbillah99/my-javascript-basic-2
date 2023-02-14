/**
 1. add withdraw button event handler
 2. get withdraw amount by using getInputValue function
 3. get previous withdraw amount by using getElementValue function
 4.5. calculate new withdraw total and set the value
 5. get previous balance total by using getElementValue function
 6. calculate new balance total
*/

// withdraw button event handler
const btnWithdraw = document.getElementById("btn-withdraw");
btnWithdraw.addEventListener("click", function () {
    // step-2
    const newWithdrawAmount = getInputValue("withdraw-field");

    // step-3
    const previousWithdrawTotal = getElementValue("withdraw-total");

    // step-4 && step-4.5
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setElementValue("withdraw-total", newWithdrawTotal);

    // step-5
    const previousBalanceTotal = getElementValue("balance-total");
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setElementValue("balance-total", newBalanceTotal);
});