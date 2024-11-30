const data = [
    {
        id: 1,
        nombre: "Auto Importado 1",
        descripcion: "Auto de alta gama, modelo 2024.",
        precio: 50000,
        stock: 10,
        imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/1.jpg"
    },
    {
        id: 2,
        nombre: "Auto Importado 2",
        descripcion: "Auto deportivo, diseño aerodinámico.",
        precio: 60000,
        stock: 8,
        imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/2.jpg"
    },
    {
        id: 3,
        nombre: "Auto Importado 3",
        descripcion: "Auto eléctrico, tecnología avanzada.",
        precio: 70000,
        stock: 5,
        imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/3.jpg"
    },
    {
        id: 4,
        nombre: "Auto Importado 4",
        descripcion: "Vehículo todo terreno, ideal para aventuras.",
        precio: 55000,
        stock: 7,
        imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/4.jpg"
    },
    {
        id: 5,
        nombre: "Auto Importado 5",
        descripcion: "Convertible, perfecto para paseos al aire libre.",
        precio: 62000,
        stock: 6,
        imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/5.jpg"
    },
    {
        id: 6,
        nombre: "Auto Importado 6",
        descripcion: "Superdeportivo, máxima velocidad y rendimiento.",
        precio: 120000,
        stock: 3,
        imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/6.jpg"
    },
    {
        id: 7,
        nombre: "Auto Importado 7",
        descripcion: "Auto clásico, diseño vintage y elegante.",
        precio: 80000,
        stock: 4,
        imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/7.jpg"
    },
    {
        id: 8,
        nombre: "Auto Importado 8",
        descripcion: "Auto de lujo, comodidad y estilo incomparable.",
        precio: 90000,
        stock: 2,
        imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/8.jpg"
    },
    {
        id: 9,
        nombre: "Auto Importado 9",
        descripcion: "Sedán ejecutivo, ideal para negocios y viajes.",
        precio: 75000,
        stock: 9,
        imagen: "https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/9.jpg"
    }
];

function renderProducts() {
    const productList = document.querySelector("#product-list");

    const productsHTML = data.map(producto => `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div class="card">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <p>Precio: $${producto.precio}</p>
                    <a href="producto.html?prod=${producto.id}" class="btn btn-primary">Ver más</a>
                </div>
            </div>
        </div>
    `).join("");

    productList.innerHTML = productsHTML;
}

renderProducts();
