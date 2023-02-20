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

const calculateBtn = document.getElementById('calculate-btn');
calculateBtn.addEventListener("click", function () {
    const incomeAmount = getInputValueById('income-field');
    const foodAmount = getInputValueById('food-field');
    const rentAmount = getInputValueById('rent-field');
    const clothesAmount = getInputValueById('clothes-field');

    const totalExpenses = foodAmount + rentAmount + clothesAmount;

    if (incomeAmount >= totalExpenses) {
        document.getElementById("total-expenses").innerText = totalExpenses;
        const balance = incomeAmount - totalExpenses;
        document.getElementById('balance').innerText = balance;
    }
    else {
        alert('Cut your coat according to your cloth');
        document.getElementById("total-expenses").innerText = 0;
        document.getElementById('balance').innerText = 0;
    }
});

function getTextElementById(elementId) {
    const textElementAmount = document.getElementById(elementId);
    const elementAmountString = textElementAmount.innerText;
    const elementAmount = parseFloat(elementAmountString);
    return elementAmount;
}

document.getElementById('btn-save').addEventListener('click', function () {
    const incomeAmount = getInputValueById('income-field');
    const percentageAmount = getInputValueById('saving-field');

    const savingAmount = (incomeAmount / 100) * percentageAmount;
    document.getElementById('saving-amount').innerText = savingAmount;

    const balanceAmount = getTextElementById('balance');

    if (balanceAmount >= savingAmount) {
        const remainingBalance = balanceAmount - savingAmount;
        document.getElementById('remaining-balance').innerText = remainingBalance;
    }
    else {
        alert("You don't have enough money to save");
        document.getElementById('saving-amount').innerText = 0;
        document.getElementById('remaining-balance').innerText = 0;
    }
});

// generate random bg color code
function randomBgColor() {
    const random = Math.floor(Math.round(Math.random() * 1000000).toString(6));
    document.body.style.backgroundColor = '#' + random;
}

// document.getElementById("img-sect").onmouseover = randomBgColor();
// console.log(randomBgColor());

function randomBackground() {
    let x = Math.floor(Math.random() * 256)
    let y = Math.floor(Math.random() * 256)
    let z = Math.floor(Math.random() * 256)
    let bgColor = `rgb(${x}, ${y}, ${z})`
    document.body.style.background = bgColor;
}

randomBackground();

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