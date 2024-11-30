const categorias = [
    { nombre: "Inicio", url: "index.html" },
    { nombre: "Producto", url: "Producto.html" },
    { nombre: "#", url: "#.html" }
];

let menu = `
<nav>
    <ul>
`;
for (const categoria of categorias) {
    menu += `<li><a href="${categoria.url}">${categoria.nombre}</a></li>`;
}
menu += `
    </ul>
</nav>
`;

document.querySelector("header").innerHTML = menu;