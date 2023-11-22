const contenedorProductos =document.getElementById ("container-productos");

function crearTarjetasProductosInicio(productos) {
productos.forEach(producto => {
    const nuevosproductos =document.creatElement ("div")
    nuevosproductos.claaslist = "tarjeta-productos"
    nuevosproductos.innerHTML = `
 <img src=" ./assets/img/productos/${producto.img}.jpg"
 <h3>${title-producto}</h3>
 <p>${producto-precio}</p>
 <button>Agregar Producto</button>
 `
    contenedorProductos.productos.appendChild(nuevosproductos)
    contenedorProductos.getElementsByTagName("button")[0].addEventListener("click",()=> agregarAlCarrito(producto))
});
}

crearTarjetasProductosInicio(productos) {

}