fetch('data.json')
    .then((respuesta) => respuesta.json())
    .then((data) => {
        let resultado = document.querySelector('.productos__cards');
        let html = ''

        data.forEach(productos => {
            html += `
            <div class="productos__card" data-aos="fade-left" data-aos-delay="350">
                <img src=${productos.img}>
                <div class="info-card">
                    <h4>${productos.nombre}</h4>
                    <p class="precio">$${productos.precio}</p>
                    <a href="#" class="btn agregar-carrito" data-id="1">Agregar Al Carrito</a>
                </div>
            </div>
            `
            resultado.innerHTML = html;
        })
    })