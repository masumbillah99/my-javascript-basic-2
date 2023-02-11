document.getElementById('item-2').addEventListener('click', function () {
    console.log('item 2 clicked');
    event.stopPropagation();
});

document.getElementById('list-ul').addEventListener('click', function(){
    console.log('ull clicked');
});

document.getElementById('list-container').addEventListener('click', function(){
    console.log('section container clicked');
});