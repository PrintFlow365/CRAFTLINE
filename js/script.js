import { db } from "./firebase-config.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


async function testFirebase(){

    try{

        const querySnapshot = await getDocs(collection(db, "products"));

        console.log("Firebase connected");

        querySnapshot.forEach((doc)=>{

            console.log(doc.id, doc.data());

        });

    }catch(error){

        console.log("Firebase error:", error);

    }

}


testFirebase();
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


const submitOrder = document.getElementById("submitOrder");

if(submitOrder){

    submitOrder.addEventListener("click", function(){

        let name = document.querySelector('input[placeholder="Your Name"]').value;
        let company = document.querySelector('input[placeholder="Company Name (Optional)"]').value;
        let whatsapp = document.querySelector('input[placeholder="WhatsApp Number"]').value;
        let quantity = document.querySelector('input[placeholder="Quantity"]').value;
        let specification = document.querySelector('input[placeholder="Size / Specification"]').value;
        let requirement = document.querySelector('textarea').value;

let selectedItem = "";

let selected = document.querySelector('input[type="radio"]:checked');

if(selected){
    selectedItem = selected.value;
}

        let orderSummary = 
"CRAFTLINE Order Request\n\n" +
"Item: " + selectedItem +
"\n\nCustomer Details\n" +
"Name: " + name +
"\nCompany: " + company +
"\nWhatsApp: " + whatsapp +
"\n\nOrder Details\n" +
"Quantity: " + quantity +
"\nSpecification: " + specification +
"\nRequirement: " + requirement;


alert(orderSummary);

    });

}
document.addEventListener("change", function(e){

    if(e.target.type === "radio"){

        let display = document.getElementById("selectedItemDisplay");

        if(display){
            display.innerText = e.target.value;
        }

    }

});
document.querySelectorAll('input[type="radio"]').forEach(function(item){

    item.addEventListener("click", function(){

        document.getElementById("selectedItemDisplay").innerHTML = this.value;

    });

});