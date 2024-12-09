const roomsInput = document.getElementById('search-rooms-input');
const roomsBox = document.getElementById('search-rooms-box');
const roomsBoxItems = document.querySelectorAll('.search-rooms-box-items')

roomsInput.addEventListener('click', () => {
    roomsBox.style.display = roomsBox.style.display == 'none' ? roomsBox.style.display = 'flex' : roomsBox.style.display = 'none';
})

roomsBoxItems.forEach(item =>{
    item.addEventListener('click', () => {
        roomsInput.value = item.textContent;
        roomsBox.style.display = 'none';
    });
});
