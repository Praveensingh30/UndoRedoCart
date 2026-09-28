let allProducts = [];

for (let i = 0; i < storeData.categories.length; i++) {

    let category = storeData.categories[i];

    for (let j = 0; j < category.subcategories.length; j++) {

        let subcategory = category.subcategories[j];

        for (let k = 0; k < subcategory.products.length; k++) {

            let product = subcategory.products[k];

            allProducts.push(product);
        }
    }
}


let recentProducts = [];


function displayRecentProducts() {

    let recentContainer = document.getElementById("recent-products");

    recentContainer.innerHTML = "";

    if (recentProducts.length == 0) {

        recentContainer.innerHTML = "<p>No products viewed yet.</p>";

        return;
    }

    for (let i = 0; i < recentProducts.length; i++) {

        let product = recentProducts[i];

        let productCard = document.createElement("div");

        productCard.className = "product-card";

        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>Brand: ${product.brand}</p>
            <p>Price: ₹${product.price}</p>
            <p>Rating: ${product.rating}</p>
            <p>Reviews: ${product.reviews}</p>
        `;

        recentContainer.appendChild(productCard);
    }
}


function addToRecentProducts(product) {

    for (let i = 0; i < recentProducts.length; i++) {

        if (recentProducts[i].id == product.id) {

            recentProducts.splice(i, 1);

            break;
        }
    }

    recentProducts.unshift(product);

    if (recentProducts.length > 5) {

        recentProducts.pop();
    }

    displayRecentProducts();
}


function displayProducts() {

    let productsContainer = document.getElementById("products-container");

    for (let i = 0; i < allProducts.length; i++) {

        let product = allProducts[i];

        let productCard = document.createElement("div");

        productCard.className = "product-card";

        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>Brand: ${product.brand}</p>
            <p>Price: ₹${product.price}</p>
            <p>Rating: ${product.rating}</p>
            <p>Reviews: ${product.reviews}</p>

            <button class="view-button">View Product</button>
        `;

        let viewButton = productCard.querySelector(".view-button");

        viewButton.addEventListener("click", function() {

            addToRecentProducts(product);

        });

        productsContainer.appendChild(productCard);
    }
}


displayProducts();


let clearButton = document.getElementById("clear-history");

clearButton.addEventListener("click", function() {

    recentProducts = [];

    displayRecentProducts();

});


displayRecentProducts();