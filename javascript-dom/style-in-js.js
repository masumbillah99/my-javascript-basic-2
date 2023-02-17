/** ---------- style html element with js ------------ */

const sections = document.querySelectorAll('section');
// console.log(sections)for(const of sections)
for (const section of sections) {
    section.style.border = "2px solid steelblue";
    section.style.borderRadius = '13px';
    section.style.marginBottom = '10px';
    section.style.padding = '7px 13px';
    section.style.backgroundColor = 'lightgray';
}

const placesContainer = document.getElementById('places-container');
placesContainer.classList.add('text-style');

// const jalaliContainer = document.getElementsByClassName('jalali-container');
