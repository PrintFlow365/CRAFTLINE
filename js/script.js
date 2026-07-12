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
fetch("data/products.json")
...

// Load Products

fetch("data/products.json")

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
document.addEventListener("DOMContentLoaded", function () {

    const slider = document.querySelector(".swiper");

    if (slider) {

        const swiper = new Swiper(".swiper", {

            loop: true,

            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },

            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            }

        });

    }

});
let currentSlide = 0;

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");


function showSlide(index){

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

}


function nextSlide(){

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

}


function prevSlide(){

    currentSlide--;

    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);

}


if(nextBtn){
    nextBtn.addEventListener("click", nextSlide);
}


if(prevBtn){
    prevBtn.addEventListener("click", prevSlide);
}


setInterval(nextSlide, 5000);

fetch("./header.html")
.then(response => {
    if (!response.ok) {
        throw new Error("Header file not found");
    }
    return response.text();
})
.then(data => {
    document.getElementById("header").innerHTML = data;
})
.catch(error => {
    console.log(error);
});
const submitOrder = document.getElementById("submitOrder");

if(submitOrder){

    submitOrder.addEventListener("click", function(){

        let name = document.querySelector('input[placeholder="Your Name"]').value;
        let company = document.querySelector('input[placeholder="Company Name (Optional)"]').value;
        let whatsapp = document.querySelector('input[placeholder="WhatsApp Number"]').value;
        let quantity = document.querySelector('input[placeholder="Quantity"]').value;
        let specification = document.querySelector('input[placeholder="Size / Specification"]').value;
        let requirement = document.querySelector('textarea').value;


        alert(
            "Order Received\n\n" +
            "Name: " + name +
            "\nCompany: " + company +
            "\nWhatsApp: " + whatsapp +
            "\nQuantity: " + quantity +
            "\nSpecification: " + specification +
            "\nRequirement: " + requirement
        );

    });

}