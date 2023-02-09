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
const someLi = document.querySelectorAll('.fruits-container li');
for (const li of someLi) {
    console.log(li.innerText);
}
