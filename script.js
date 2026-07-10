function changeLanguage(){

    alert("English version will be available soon.");

}



// Load Products

fetch("products.json")
.then(response => response.json())
.then(products => {


    console.log(products);


})
.catch(error => {

    console.log("Product loading error:", error);

});