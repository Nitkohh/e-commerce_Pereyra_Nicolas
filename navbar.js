const categorias = [
    { nombre: "Pantalones", url: "pantalones.html" },
    { nombre: "Remeras", url: "remeras.html" },
    { nombre: "Zapatillas", url: "zapatillas.html" }
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