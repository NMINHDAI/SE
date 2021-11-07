let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 500){
      document.querySelector('#scroll-top').classList.add('active');
      var item = document.getElementById("order_section"); 
      item.style.display = "block";
    }else{
      document.querySelector('#scroll-top').classList.remove('active');
      var item = document.getElementById("order_section"); 
      item.style.display = "none";
    }
}
document.querySelector('#cart-icon').classList.add('active');
const cartbtn = document.querySelector(".fa-times")
const cartshow = document.querySelector(".fa-shopping-cart")
cartshow.addEventListener("click",function(){
  if(window.scrollY > 500){
    document.querySelector(".cart").style.right="0"
  }
})
cartbtn.addEventListener("click",function(){
  document.querySelector(".cart").style.right="-100%"
})
// This is a function to show or hide the Burger menu when clicking to the category. 
function add_burger(){
  var item = document.getElementById("burger"); 
  item.style.display = "block";
}

function hide_burger(){
  var item = document.getElementById("burger"); 
  item.style.display = "none";
}
function add_pizza(){
  var item = document.getElementById("pizza"); 
  item.style.display = "block";
}

function hide_pizza(){
  var item = document.getElementById("pizza"); 
  item.style.display = "none";
}
function add_cream(){
  var item = document.getElementById("cream"); 
  item.style.display = "block";
}

function hide_cream(){
  var item = document.getElementById("cream"); 
  item.style.display = "none";
}
function add_drink(){
  var item = document.getElementById("drink"); 
  item.style.display = "block";
}

function hide_drink(){
  var item = document.getElementById("drink"); 
  item.style.display = "none";
}
function add_sweet(){
  var item = document.getElementById("sweet"); 
  item.style.display = "block";
}

function hide_sweet(){
  var item = document.getElementById("sweet"); 
  item.style.display = "none";
}
function add_breakfast(){
  var item = document.getElementById("breakfast"); 
  item.style.display = "block";
}

function hide_breakfast(){
  var item = document.getElementById("breakfast"); 
  item.style.display = "none";
}
//---------------------------------------------------------------------------------//


if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  var removeCartItemButtons = document.getElementsByClassName('btn-danger')
  for (var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i]
      button.addEventListener('click', removeCartItem)
  }

  var quantityInputs = document.getElementsByClassName('cart-quantity-input')
  for (var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i]
      input.addEventListener('change', quantityChanged)
  }

  var addToCartButtons = document.getElementsByClassName('shop-item-button')
  for (var i = 0; i < addToCartButtons.length; i++) {
      var button = addToCartButtons[i]
      button.addEventListener('click', addToCartClicked)
  }

  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
  alert('Thank you for your purchase')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  while (cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild)
  }
  updateCartTotal()
}

function removeCartItem(event) {
  var buttonClicked = event.target
  buttonClicked.parentElement.parentElement.remove()
  updateCartTotal()
}

function quantityChanged(event) {
  var input = event.target
  if (isNaN(input.value) ) {
    input.value = 1
  }

  if(input.value <= 0){
    removeCartItem(event);
  }
  updateCartTotal()
}

function addToCartClicked(event) {
  var button = event.target
  var shopItem = button.parentElement.parentElement
  var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
  var price = shopItem.getElementsByClassName('price')[0].innerText
  var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
  addItemToCart(title, price, imageSrc)
  updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement('div')
  cartRow.classList.add('cart-row')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
  for (var i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText == title) {
          alert('This item is already added to the cart')
          return
      }    
  }
  alert('Succesfully add to the cart')
  var cartRowContents = `
      <div class="cart-item cart-column">
          <img class="cart-item-image" src="${imageSrc}" width="120" height="80">
          <span class="cart-item-title" >${title}</span>
      </div>
      <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" value="1" style="font-size:1.5rem">
          <button class="btn btn-danger" type="button" style="display:none">REMOVE</button>
      </div>
      <span class="cart-price cart-column" >${price}</span>`
  cartRow.innerHTML = cartRowContents
  cartItems.append(cartRow)
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

var hello; 
function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('cart-items')[0]
  var cartRows = cartItemContainer.getElementsByClassName('cart-row')
  var total = 0
  for (var i = 0; i < cartRows.length; i++) {
      var cartRow = cartRows[i]
      var priceElement = cartRow.getElementsByClassName('cart-price')[0]
      var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
      var price = parseFloat(priceElement.innerText.replace('$', ''))
      var quantity = quantityElement.value
      total = total + (price * quantity)
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
  hello = total;
}


function showPayment(){
  // show the payment form and hide all the web. 
  var item = document.getElementById("my_header"); 
  item.style.display = "none";

  item = document.getElementById("home");
  item.style.display = "none";

  item = document.getElementById("cart-icon");
  item.style.display = "none";

  item = document.getElementById("speciality");
  item.style.display = "none";

  item = document.getElementById("burger");
  item.style.display = "none";
  item = document.getElementById("pizza");
  item.style.display = "none";
  item = document.getElementById("cream");
  item.style.display = "none";
  item = document.getElementById("drink");
  item.style.display = "none";
  item = document.getElementById("sweet");
  item.style.display = "none";
  item = document.getElementById("breakfast");
  item.style.display = "none";

  item = document.getElementById("popular");
  item.style.display = "none";

  item = document.getElementById("instruction");
  item.style.display = "none";

  item = document.getElementById("gallery");
  item.style.display = "none";

  item = document.getElementById("review");
  item.style.display = "none";

  item = document.getElementById("order_section");
  item.style.display = "none";

  item = document.getElementById("reservation");
  item.style.display = "none";

  item = document.getElementById("footer");
  item.style.display = "none";



  item = document.getElementById("payment");
  item.style.display = "block";

  document.getElementsByName('amount')[0].placeholder= hello;

}





 

