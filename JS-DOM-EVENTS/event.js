// option - 1: directly set on the HTML element
// <button onclick="console.log(65)">Another Button</button>


// option-2: onclick function on the html element
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// option-3: hold element and add function
const makeBlueBtn = document.getElementById('make-blue');
makeBlueBtn.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'lightblue';
}

const purpleBtn = document.getElementById('make-purple');
purpleBtn.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

// option-4: add event listener
const greenBtn = document.getElementById('make-green');
greenBtn.addEventListener('click', makeGreen);

function makeGreen() {
    document.body.style.backgroundColor = 'lightgreen';
}

const grayBtn = document.getElementById('make-gray');
grayBtn.addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightgray';
})


// handle event by add onclick function
function handleOnClick() {
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = "Handled by function attached on onclick";
}

// option 2
document.getElementById('event-listener').addEventListener('click', function () {
    const handlerStatus = document.getElementById('handler-status');
    handlerStatus.innerText = 'Text updated by add event Listener Button';
})

// option 2 : recap
document.getElementById('btn-update').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;

    const p = document.getElementById('input-text-display');
    p.innerText = inputText;
    inputField.value = '';
})