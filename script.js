function changeLanguage(){

    alert("English version will be available soon.");

}

function changeLanguage(){

    alert("English version will be available soon.");

}

const orderBtn = document.getElementById("orderNowBtn");

if(orderBtn){
    orderBtn.addEventListener("click", function(e) {
        e.preventDefault();
        alert("Online Order System will be available in Version 3.");
    });
}
// Load Products
fetch("products.json")
...

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

<img src="images/${product.image}" alt="${product.name_en}" style="width:100%;max-height:200px;object-fit:contain;margin-bottom:10px;">

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
document.addEventListener("DOMContentLoaded", function(){

const swiper = new Swiper('.swiper', {

    loop: true,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

});