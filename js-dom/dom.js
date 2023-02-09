// console.log('hello javascript dom');
// console.log(document);
// console.log(document.head);
// console.log(document.body);

/** --------- document getElement ------------- */

// document.getElementsByName
// document.getElementsByTagName
// document.getElementsByTagNameNS
// document.getElementById
// document.getElementsByClassName
// document.getAnimations

const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);
for (const li of liCollection) {
    // console.log(li.innerText);
}

const allHeadings = document.getElementsByTagName('h1');
for (const h1 of allHeadings) {
    // console.log(h1);
}

const places = document.getElementsByClassName('places-list');
for (const place of places) {
    // console.log(place.innerHTML);
}


/** ---------- query selector ------------ */

// querySelector
// querySelectorAll
const someLi = document.querySelectorAll('.fruits-container li');
for (const li of someLi) {
    console.log(li.innerText);
}


/** ---------- add html element with js ------------ */

const mainContainer = document.getElementById('main-container');
// console.log(mainContainer);
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = "My Book List";
section.appendChild(h1);

const ul = document.createElement('ul');
const li = document.createElement('li');
li.innerText = 'Math';
ul.appendChild(li)

const li2 = document.createElement('li');
li2.innerText = 'Bangla';
ul.appendChild(li2)

const li3 = document.createElement('li');
li3.innerText = 'Physics';
ul.appendChild(li3)

const li4 = document.createElement('li');
li4.innerText = 'Chemistry';
ul.appendChild(li4)

section.appendChild(ul);

mainContainer.appendChild(section);

// set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress Collection</h1>
<ul>
    <li>T-shirt</li>
    <li>Historical Lungi</li>
    <li>Santo Genji</li>
</ul>
`
mainContainer.appendChild(sectionDress);