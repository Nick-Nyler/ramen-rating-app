const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "./images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "./images/kojiro.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "./images/naruto.jpg" ,rating: 3, comment: "Good but too salty." },
    { id: 4, name: "Gyukotsu Ramen", restaurant: "Gyukotsu", image: "./images/gyukotsu.jpg" ,rating: 5, comment: "Best ramen in town!" },
    { id: 5, name: "Shio Ramen", restaurant: "Shio", image: "./images/nirvana.jpg", rating: 4, comment: "Very light and refreshing!" }
 ];

function displayRamens() {
    const ramenMenu = document.getElementById('menu');
    ramenMenu.innerHTML = '';
    ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener('click', () => handleClick(ramen));
        ramenMenu.appendChild(img);
    });
}

function handleClick(ramen) {
    document.getElementById('detail-image').src = ramen.image;
    document.getElementById('name').textContent = ramen.name;
    document.getElementById('restaurant').textContent = ramen.restaurant;
    document.getElementById('rating').textContent = `Rating: ${ramen.rating}`;
    document.getElementById('comment').textContent = `Comment: ${ramen.comment}`;
}

function addSubmitListener() {
    const form = document.getElementById('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const newRamen = {
            name: document.getElementById('form-name').value,
            restaurant: document.getElementById('form-restaurant').value,
            image: document.getElementById('form-image').value,
            rating: document.getElementById('form-rating').value,
            comment: document.getElementById('form-comment').value
        };
        ramens.push(newRamen);
        displayRamens();
        form.reset();
    });
}

function main() {
    displayRamens();
    addSubmitListener();
    if (ramens.length > 0) {
        handleClick(ramens[0]);
    }
}

document.addEventListener('DOMContentLoaded', main);