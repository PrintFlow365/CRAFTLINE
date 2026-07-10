function changeLanguage(){

    alert("English version will be available soon.");

}



// Load Products

fetch("products.json")

.then(response => response.json())

.then(products => {


    let container = document.getElementById("productContainer");


    container.innerHTML = "";


    products.forEach(product => {


        let card = document.createElement("div");

        card.className = "card";


        card.innerHTML = `

        <h3>${product.name_bn}</h3>

        <p>${product.name_en}</p>

        <p>${product.description_bn}</p>

        <small>
        ${product.category} - ${product.subcategory}
        </small>

        `;


        container.appendChild(card);


    });


})


.catch(error => {


    console.log("Product loading error:", error);


});