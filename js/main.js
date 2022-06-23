let menu = '';

let nombre = prompt('Cual es su nombre?');
let producto;

let iPhone_11 = 206000;
let iPhone_12 = 263000;
let iPhone_13_proMax = 353000;

let carrito = '';
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
            total += iPhone_11;
            carrito += "\n iPhone 11 : $206.000";
            alert('Se agrego: iPhone 11 al carrito su valor es de $206.000');
            break;
          case 2:
            total += iPhone_12;
            carrito += "\n iPhone 12 : $263.000";
            alert('Se agrego: iPhone 12 al carrito su valor es de $263.000');
            break;
          case 3:
            total += iPhone_13_proMax;
            carrito += "\n iPhone 13 : $353.000";
            alert('Se agrego: iPhone 13 Pro Max al carrito su valor es de 353.000');
            break;
        }
      } while (producto !== 1 && producto !== 2 && producto !== 3 && producto !== 4);
  
    opcion = parseInt(prompt('Vuelva a ingresar una opcion \n1) comprar otro celular \n2) finalizar compra'));
  
    if(opcion === 1) {
      mostrarMenu();
    } else if(opcion === 2) {
      finalizarCompra();
    }
  }
  
  function finalizarCompra() {
    let mostrarCarrito = carrito;
    let precioFinal = total;
    
    alert(`Usted tiene estos productos en su carrito ${mostrarCarrito}`);
    alert(`Y el total de su compra es de $${precioFinal}`)
    alert('Gracias por su compra, vuelva pronto!!');
  } 
  saludo();
}

document.querySelector('#btn').onclick = () => {
  nombre = prompt('Cual es su nombre?');
  carrito = '';
  total = 0;

  comprarCelular();
}

comprarCelular();