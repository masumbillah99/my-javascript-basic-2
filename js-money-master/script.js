/** 
    1. income a akta amount thakbe
    2. 'calculate btn' a click korle se 2 ta kaj korbe-
        i.  food, rent, clothes ar value nibe
        ii. value ke number a convert korte hobe
        iii. value gula + kore total-expense a dekhate hobe
        iv. income theke total-expense minus kore balance a dekhate hobe
    3. 'save' btn a click korle 2 ta kaj hobe-
        i. income amount theke save ar input percentage ber korbe
        ii. saving amount option a saving ta dekhabe
        iii. balance theke saving minus kore ja thake ta 'remaining balance a dekhabe
    ----- bonus -----
    4. income theke jodi expense besi hoy tahole warning message dekhano ('Cart your Coat')
    5. jodi balance theke saving amount besi hoy tahole akta warning message (you don't have enough money to save)
*/

function getInputValueById(elementId) {
    const inputAmountField = document.getElementById(elementId);
    const inputAmountString = inputAmountField.value;
    const inputAmount = parseFloat(inputAmountString);
    return inputAmount;
}

const balanceAmountText = document.getElementById('balance');
const balanceAmount = parseFloat(balanceAmountText.innerText);

document.getElementById('calculate-btn').addEventListener("click", function () {
    const incomeAmount = getInputValueById('income-field');
    const foodAmount = getInputValueById('food-field');
    const rentAmount = getInputValueById('rent-field');
    const clothesAmount = getInputValueById('clothes-field');

    const totalExpenses = foodAmount + rentAmount + clothesAmount;
    const balance = incomeAmount - totalExpenses;

    document.getElementById("total-expenses").innerText = totalExpenses;
    balanceAmountText.innerText = balance;
});

document.getElementById('btn-save').addEventListener('click', function () {
    const incomeAmount = getInputValueById('income-field');
    const percentageAmount = getInputValueById('saving-field');

    const savingAmount = (incomeAmount / 100) * percentageAmount;
    console.log(savingAmount);
    console.log(balanceAmount);
    const remainingBalance = balanceAmount - savingAmount;
    console.log(remainingBalance);

    document.getElementById('saving-amount').innerText = savingAmount;
});


/** 
document.getElementById('calculate-btn').addEventListener("click", function () {
    const foodAmountField = document.getElementById('food-field');
    const foodAmountString = foodAmountField.value;
    const foodAmount = parseFloat(foodAmountString);

    const rentAmountField = document.getElementById('rent-field');
    const rentAmountString = rentAmountField.value;
    const rentAmount = parseFloat(rentAmountString);

    const clothesAmountField = document.getElementById('clothes-field');
    const clothesAmountString = clothesAmountField.value;
    const clothesAmount = parseFloat(clothesAmountString);

    const totalExpenses = foodAmount + rentAmount + clothesAmount;

    const incomeAmountField = document.getElementById('income-field');
    const incomeAmountString = incomeAmountField.value;
    const incomeAmount = parseFloat(incomeAmountString);

    const balance = incomeAmount - totalExpenses;

    document.getElementById("total-expenses").innerText = totalExpenses;
    document.getElementById('balance').innerText = balance;
});
*/