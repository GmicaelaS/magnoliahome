function agregarAlCarrito(producto){
    const memoria =localStroge.getItem ("producto")
    console.log (memoria)
    if (!memoria){
        const nuevoproducto = producto;
        nuevoproducto.cantidad =1;
        localStorage.setItem ("poducto", JSON.stringify)

    }
}