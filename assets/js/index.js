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

const priceInput = document.getElementById('search-price-input');
const priceBox = document.getElementById('search-price-box');
const priceBoxItems = document.querySelectorAll('.search-price-box-items')

priceInput.addEventListener('click', () => {
    priceBox.style.display = priceBox.style.display == 'none' ? priceBox.style.display = 'flex' : priceBox.style.display = 'none';
})

priceBoxItems.forEach(item =>{
    item.addEventListener('click', () => {
        priceInput.value = item.textContent;
        priceBox.style.display = 'none';
    });
});
