class Producto {
    constructor(nombre, gama, stock, precio, imagen) {
        this.nombre = nombre;
        this.gama = gama;
        this.stock = stock;
        this.precio = precio;
        this.imagen = imagen;
    }
}


const prod = new Producto(
    "FORD",
    "GAMA MEDIA",
    "DISPONIBLE",
    "100000",
    "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/8.jpg"
);


const contenidos = `
<div class="productos">
    <h1>${prod.nombre}</h1>
    <img src="${prod.imagen}" class="card-img-top" alt="Imagen de ${prod.nombre}">
    <h2>Gama: ${prod.gama}</h2>
    <p>Precio: $${prod.precio}</p>
    <p>Stock disponible: ${prod.stock}</p>
</div>
`;


document.querySelector("main").innerHTML = contenidos;


