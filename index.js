function renderProducts() {
    console.log("Buen Dia, esta es la consola");

    let h1 = document.querySelector("h1");
    h1.innerHTML = "Productos";

    let array = [];
    for (let i = 1; i < 10; i++) {
        array.push(`
            <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div class="card">
                    <img src="https://66d9ee6caa07a954166f10ed--gregarious-melba-cacdba.netlify.app/${i}.jpg" class="card-img-top" alt="Auto">
                    <div class="card-body">
                        <h5 class="card-title">Auto Importado ${i}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Ver más</a>
                    </div>
                </div>
            </div>
        `);
    }

    let section = document.querySelector("#product-list");
    section.innerHTML = array.join("");
}

renderProducts();
