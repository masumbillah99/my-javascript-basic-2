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