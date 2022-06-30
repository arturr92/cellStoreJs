class Producto {
  constructor(marca, precio) {
    this.marca = marca;
    this.precio = precio;
  }
} 

let precios = [
  {nombre: 'iPhone_11', precio: 206000},
  {nombre: 'iPhone_12', precio: 263000},
  {nombre: 'iPhone_13_proMax', precio: 353000},
]; 

let menu = '';

let nombre = prompt('Cual es su nombre?');
let producto;

let carrito = [];
let total = 0;


function comprarCelular() {
  function saludo() {
    while (nombre === '') {
      nombre = prompt('Cual es su nombre?');
    }
  
    alert('Bienvenido a iLoveCell' + ' '+ nombre + ' ' + 'deseamos que encuentres lo que estas buscando');
  
    menu = parseInt(prompt('Elija una opcion \n1) Ver productos \n2) Salir'));
    if(menu === 1) {
      mostrarMenu();
    }
  }
  
  function mostrarMenu() {
      do {
        producto = parseInt(prompt('elija uno de nuestros productos \n1) iPhone 11 \n2) iPhone 12 \n3) iPhone 13 Pro Max'));

        switch (producto) {
          case 1:
            total += precios[0];
            carrito.push(new Producto('iPhone 11', 206000));
            alert(`Se agrego: iPhone 11 al carrito su valor es de $${precios[0].precio}`);
            break;
          case 2:
            total += precios[1];
            carrito.push(new Producto('iPhone 12', 263000));
            alert(`Se agrego: iPhone 12 al carrito su valor es de $${precios[1].precio}`);
            break;
          case 3:
            total += precios[2];
            carrito.push(new Producto('iPhone 13 Pro Max', 353000));
            alert(`Se agrego: iPhone 13 Pro Max al carrito su valor es de $${precios[2].precio}`);
            break;
        }
      } while (producto !== 1 && producto !== 2 && producto !== 3);
  
    opcion = parseInt(prompt('Vuelva a ingresar una opcion \n1) comprar otro celular \n2) finalizar compra'));
  
    if(opcion === 1) {
      mostrarMenu();
    } else if(opcion === 2) {
      finalizarCompra();
    }
  }
  
  function finalizarCompra() {
    carrito.forEach(producto => {
      alert(`Usted tiene estos productos en su carrito ${producto.marca} $${producto.precio}`);
    });
    let precioFinal = carrito.reduce((acc, producto) => acc + producto.precio, 0);
    alert(`El total de su compra es de $${precioFinal}`)
    alert('Gracias por su compra, vuelva pronto!!');
  } 
  saludo();
}

document.querySelector('#btn').onclick = () => {
  nombre = prompt('Cual es su nombre?');
  carrito = [];
  total = 0;

  comprarCelular();
}

comprarCelular();