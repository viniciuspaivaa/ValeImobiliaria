const searchRoomsInput = document.getElementById('search-rooms-input');
const searchRoomsBox = document.getElementById('search-rooms-box');

searchRoomsInput.addEventListener('click', () => {
    searchRoomsBox.style.display = searchRoomsBox.style.display == 'none' ? searchRoomsBox.style.display = 'flex' : searchRoomsBox.style.display = 'none';
})