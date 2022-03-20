//slider section
var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide(){

  if(index<0){
    index = slides.length-1;
  }
  
  if(index>slides.length-1){
    index = 0;
  }
  
  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
    dot[i].classList.remove("active");
  }
  
  slides[index].style.display= "block";
  dot[index].classList.add("active");
  
  index++;
  
  setTimeout(changeSlide,4000);
  
}
changeSlide();





//product section


$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product",function(response){
    var productList=response;
    for( var i = 0 ; i < productList.length ; i++ ){
    createCard( productList[i].name , productList[i].brand, productList[i].price , productList[i].isAccessory , productList[i].preview,i )
    var divs=document.getElementById("card"+i)
    divs.addEventListener("click",function(){
      var loc= "https://kalyanasundaram201.github.io/shoplane-preview/?id="+this.id
      location.assign(loc)
      console.log(loc)
      
    })
  }
    
    });

function createCard(name,brand,price,isAccessory,preview,i){

    var productCard = document.createElement("div");
    productCard.className = "card";
    productCard.id="card"+i
    var image = document.createElement("img");
    image.className = "image";
    image.src = preview;
    productCard.appendChild(image)
    var detailsDiv = document.createElement("div");
    detailsDiv.className = "details";
    var productName = document.createElement("h3");
    productName.className = "product-name";
    productName.innerText = name;
    var productBrand = document.createElement("h4");
    productBrand.className = "product-brand";
    productBrand.innerText = brand;
    var productPrice = document.createElement("h5");
    productPrice.className = "product-price";
    productPrice.innerText = "Rs " + price;
    detailsDiv.appendChild(productName);
    detailsDiv.appendChild(productBrand);
    detailsDiv.appendChild(productPrice);
    productCard.appendChild(detailsDiv);
    if(isAccessory  == true){
     var AccessoriesSection = document.getElementById("Accessories-section");
     AccessoriesSection.appendChild(productCard)
    }else{

      var clothingSection = document.getElementById("clothing-section");
      clothingSection.appendChild(productCard)

    }
    
}

var cartclick=document.getElementById("cartwraper")
cartclick.addEventListener("click",function(){
  location.assign("https://kalyanasundaram201.github.io/shoplane-cart/")
})

var totlcnt=JSON.parse(localStorage.getItem("totalcount"))
document.getElementById("cartlist").innerText=totlcnt
