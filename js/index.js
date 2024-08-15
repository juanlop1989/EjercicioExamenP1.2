fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data => {
    let card = '<div class="row row-cols-1 row-cols-md-3 g-4">'
    
    for (let productos of data) {
        card += `<div class="col">
                    <div class="card style="width: 18rem;">
                        <img src="${productos.image}" class="card-img-top" alt="Producto">
                        <div class="card-body">
                            <h5 class="card-title"><b>${productos.title}</b></h5>
                            <p class="card-text">${productos.description}</p>
                        </div>

                            <ul class="list-group list-group-flush" id="ul">
                                <li class="list-group-item"><strong>Price:</strong> ${productos.price}</li>
                                <li class="list-group-item"><strong>Category:</strong> ${productos.category}</li>
                            </ul>

                        </div>
                </div>`
    }
    card += "</div>"

    document.getElementById("cardLista").innerHTML = card
    
})