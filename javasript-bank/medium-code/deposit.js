// deposit button event handler
const btnDeposit = document.getElementById("btn-deposit");
btnDeposit.addEventListener("click", function () {
    /** 
        1. get the element by id
        2. get the value from the element
        3. convert string value to a number
    */
    const newDepositAmount = getInputValue("deposit-field");

    // 1. get previous deposit total by id
    const previousDepositTotal = getElementValue("deposit-total");

    // calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setElementValue("deposit-total", newDepositTotal);  // set deposit total value

    // get previous balance by using function
    const previousBalanceTotal = getElementValue("balance-total");
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setElementValue("balance-total", newBalanceTotal);
});