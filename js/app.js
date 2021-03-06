const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
let articulosCarrito = [];


cargarEventListeners();

function cargarEventListeners() {
     listaCursos.addEventListener('click', agregarCurso);
     
     carrito.addEventListener('click', eliminarCurso);

     vaciarCarritoBtn.addEventListener('click', vaciarCarrito);

     document.addEventListener('DOMContentLoaded', () => {
          //OPERADOR OR 
          articulosCarrito = JSON.parse( localStorage.getItem('carrito') ) || []  ;
          carritoHTML();
     });
}



function agregarCurso(e) {
     e.preventDefault();
     
     if(e.target.classList.contains('agregar-carrito')) {
          const curso = e.target.parentElement.parentElement;
          
          leerDatosCurso(curso);
     }
}

function leerDatosCurso(curso) {
     const infoCurso = {
          imagen: curso.querySelector('img').src,
          titulo: curso.querySelector('h4').textContent,
          precio: curso.querySelector('.precio').textContent,
          id: curso.querySelector('a').getAttribute('data-id'), 
          cantidad: 1
     }


     if( articulosCarrito.some( curso => curso.id === infoCurso.id ) ) { 
          const cursos = articulosCarrito.map( curso => {
               if( curso.id === infoCurso.id ) {
                    let cantidad = parseInt(curso.cantidad);
                    //OPERADOR ++
                    cantidad++
                    curso.cantidad =  cantidad;
                    return curso;
               } else {
                    return curso;
               }
          })
          //SPREAD
          articulosCarrito = [...cursos];
     }  else {
          //SPREAD
          articulosCarrito = [...articulosCarrito, infoCurso];
     }


     carritoHTML();
}


function eliminarCurso(e) {
     e.preventDefault();
     if(e.target.classList.contains('borrar-curso') ) {
          const curso = e.target.parentElement.parentElement;
          const cursoId = curso.querySelector('a').getAttribute('data-id');
          
          
          articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

          carritoHTML();
     }
}


function carritoHTML() {

     vaciarCarrito();

     articulosCarrito.forEach(curso => {
          const row = document.createElement('tr');
          //DESTRUCTURACION 
          const {imagen, titulo, precio, cantidad} = curso;
          row.innerHTML = `
               <td>  
                    <img src="${imagen}" width=100>
               </td>
               <td>${titulo}</td>
               <td>${precio}</td>
               <td>${cantidad} </td>
               <td>
                    <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
               </td>
          `;
          contenedorCarrito.appendChild(row);
     });


     sincronizarStorage();

}



function sincronizarStorage() {
     localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}


function vaciarCarrito() {
     while(contenedorCarrito.firstChild) {
          contenedorCarrito.removeChild(contenedorCarrito.firstChild);
     }
}

