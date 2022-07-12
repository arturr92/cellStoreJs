let cards = document.querySelector('.cards');

let cardsItem = [
    {
        nombre: 'iPhone 11',
        precio: 206000,
        img: './assets/img/iPhone-11.jpg'
    },
    {
        nombre: 'iPhone 12',
        precio: 263000,
        img: './assets/img/iPhone-12.jpg'
    },
    {
        nombre: 'iPhone 13 Pro Max',
        precio: 353000,
        img: './assets/img/iPhone-13-promax.jpg'
    }
]

let crearCards = () => {
    cards.innerHTML = cardsItem.map( card => {
        return (
            `
            <div class="card">
                <h3>${card.nombre}</h3>
                <p>$${card.precio}</p>
                <img src="${card.img}">
            </div>
        `
        )
    });
};

crearCards();