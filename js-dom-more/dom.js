document.getElementById('apply-bg').addEventListener('click', function () {
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends) {
       friend.style.backgroundColor = 'tomato';
       friend.style.marginBottom = '10px';
       friend.style.padding = '5px 30px';
    }    
});

document.getElementById('align-center').addEventListener('click', function () {
    const friendThree = document.getElementById("friend-3");
    friendThree.style.textAlign = 'center';
});

document.getElementById('add-friend').addEventListener('click', function () {
    const friends = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.innerHTML = `
        <h3 class="friend-name">new friend added</h3>
        <p>one div added by js dom</p>
    `;
    friend.classList.add('friend');
    friends.appendChild(friend);
});