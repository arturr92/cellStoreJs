    const getProducts = async () => {
        try {
        const results = await fetch("productos.json");
        const data = await results.json();
        const productos = data.productos;
        return productos;
        } catch (err) {
        console.log(err);
        }
    };
    
    const categoryCenter = document.querySelector(".category__center");
    
    window.addEventListener("DOMContentLoaded", async function () {
        const productos = await getProducts();
        displayProductItems(productos);
    });
    
    const displayProductItems = items => {
        let displayProduct = items.map(
        productos => ` 
                        <div class="product category__products" id="productos">
                        <div class="product__header">
                            <img src=${productos.imagen} alt="product">
                        </div>
                        <div class="product__footer">
                            <h3>${productos.titulo}</h3>
                            <div class="product__price">
                            <h4>$${productos.precio}</h4>
                            </div>
                            <a href="#"><button type="submit" class="product__btn">AGREGAR AL CARRITO</button></a>
                        </div>
                        <ul>
                            <li>
                            <a data-tip="Quick View" data-place="left" href="#">
                                <svg>
                                <use xlink:href="./images/sprite.svg#icon-eye"></use>
                                </svg>
                            </a>
                            </li>
                            <li>
                            <a data-tip="Add To Wishlist" data-place="left" href="#">
                                <svg>
                                <use xlink:href="./images/sprite.svg#icon-heart-o"></use>
                                </svg>
                            </a>
                            </li>
                            <li>
                            <a data-tip="Add To Compare" data-place="left" href="#">
                                <svg>
                                <use xlink:href="./images/sprite.svg#icon-loop2"></use>
                                </svg>
                            </a>
                            </li>
                        </ul>
                        </div>
                        `
        );
    
        displayProduct = displayProduct.join("");
        if (categoryCenter) {
        categoryCenter.innerHTML = displayProduct;
        }
    };
    
    const filterBtn = document.querySelectorAll(".filter-btn");
    const categoryContainer = document.getElementById("category");
    
    if (categoryContainer) {
        categoryContainer.addEventListener("click", async e => {
        const target = e.target.closest(".section__title");
        if (!target) return;
    
        const id = target.dataset.id;
        const products = await getProducts();
    
        if (id) {
            // remove active from buttons
            Array.from(filterBtn).forEach(btn => {
            btn.classList.remove("active");
            });
            target.classList.add("active");
    
            // Load Products
            let menuCategory = products.filter(product => {
            if (product.categoria === id) {
                return product;
            }
            });
    
            if (id === "Todos Los Productos") {
            displayProductItems(products);
            } else {
            displayProductItems(menuCategory);
            }
        }
        });
    }
    
    