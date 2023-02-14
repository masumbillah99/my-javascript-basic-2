/** 
 1. add click event handler in the deposit button
 2. get the value in deposit input field
 3. take the innerText of deposit div
 4. update the amount of deposit div
 5. take the innerText of balance div
 6. update the amount of balance div
 7. clear the deposit field
*/

// step-1
const btnDeposit = document.getElementById('btn-deposit');
btnDeposit.addEventListener('click', function () {
    // step-2
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step-3
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-4 [add numbers to set the total deposit]
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;

    // step-5 [get current balance]
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6 [calculate current total balance]
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;

    // step-7 [clear the deposit field]
    depositField.value = '';
});