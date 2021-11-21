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


// Modal handler for popular cake
var modalPPLcake = document.getElementById("popular-cake-modal");

// Get the button that opens the modal
var btnPPLcake = document.getElementById("popular-cake-button");

// Get the <span> element that closes the modal
var span = document.getElementById("popular-cake-close");

// When the user clicks the button, open the modal 
btnPPLcake.onclick = function() {
  console.log("hello wodddd");
  modalPPLcake.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalPPLcake.style.display = "none";
}


// Modal handler for popular burger
var modalPPLburger = document.getElementById("popular-burger-modal");

// Get the button that opens the modal
var btnPPLburger = document.getElementById("popular-burger-button");

// Get the <span> element that closes the modal
var span = document.getElementById("popular-burger-close");

// When the user clicks the button, open the modal 
btnPPLburger.onclick = function() {
  modalPPLburger.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalPPLburger.style.display = "none";
}


// Modal handler for popular sweet
var modalPPLsweet = document.getElementById("popular-sweet-modal");

// Get the button that opens the modal
var btnPPLsweet = document.getElementById("popular-sweet-button");

// Get the <span> element that closes the modal
var span = document.getElementById("popular-sweet-close");

// When the user clicks the button, open the modal 
btnPPLsweet.onclick = function() {
  modalPPLsweet.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalPPLsweet.style.display = "none";
}


// Modal handler for popular cupcake
var modalPPLcc = document.getElementById("popular-cc-modal");

// Get the button that opens the modal
var btnPPLcc = document.getElementById("popular-cc-button");

// Get the <span> element that closes the modal
var span = document.getElementById("popular-cc-close");

// When the user clicks the button, open the modal 
btnPPLcc.onclick = function() {
  modalPPLcc.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalPPLcc.style.display = "none";
}
 

// Modal handler for popular drink
var modalPPLdrink = document.getElementById("popular-drink-modal");

// Get the button that opens the modal
var btnPPLdrink = document.getElementById("popular-drink-button");

// Get the <span> element that closes the modal
var span = document.getElementById("popular-drink-close");

// When the user clicks the button, open the modal 
btnPPLdrink.onclick = function() {
  modalPPLdrink.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalPPLdrink.style.display = "none";
}

// Modal handler for popular ic
var modalPPLic = document.getElementById("popular-ic-modal");

// Get the button that opens the modal
var btnPPLic = document.getElementById("popular-ic-button");

// Get the <span> element that closes the modal
var span = document.getElementById("popular-ic-close");

// When the user clicks the button, open the modal 
btnPPLic.onclick = function() {
  modalPPLic.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalPPLic.style.display = "none";
}

// Modal handler for burger1
var modalBurger1 = document.getElementById("burger-modal-1");

// Get the button that opens the modal
var btnBurger1 = document.getElementById("burger1-button");

// Get the <span> element that closes the modal
var span = document.getElementById("burger1-close");

// When the user clicks the button, open the modal 
btnBurger1.onclick = function() {
  modalBurger1.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalBurger1.style.display = "none";
}



// Modal handler for burger2
var modalBurger2 = document.getElementById("burger-modal-2");

// Get the button that opens the modal
var btnBurger2 = document.getElementById("burger2-button");

// Get the <span> element that closes the modal
var span = document.getElementById("burger2-close");

// When the user clicks the button, open the modal 
btnBurger2.onclick = function() {
  modalBurger2.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalBurger2.style.display = "none";
}


// Modal handler for burger3
var modalBurger3 = document.getElementById("burger-modal-3");

// Get the button that opens the modal
var btnBurger3 = document.getElementById("burger3-button");

// Get the <span> element that closes the modal
var span = document.getElementById("burger3-close");

// When the user clicks the button, open the modal 
btnBurger3.onclick = function() {
  modalBurger3.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalBurger3.style.display = "none";
}


// Modal handler for burger4
var modalBurger4 = document.getElementById("burger-modal-4");

// Get the button that opens the modal
var btnBurger4 = document.getElementById("burger4-button");

// Get the <span> element that closes the modal
var span = document.getElementById("burger4-close");

// When the user clicks the button, open the modal 
btnBurger4.onclick = function() {
  modalBurger4.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalBurger4.style.display = "none";
}


// Modal handler for burger5
var modalBurger5 = document.getElementById("burger-modal-5");

// Get the button that opens the modal
var btnBurger5 = document.getElementById("burger5-button");

// Get the <span> element that closes the modal
var span = document.getElementById("burger5-close");

// When the user clicks the button, open the modal 
btnBurger5.onclick = function() {
  modalBurger5.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalBurger5.style.display = "none";
}


// Modal handler for burger6
var modalBurger6 = document.getElementById("burger-modal-6");

// Get the button that opens the modal
var btnBurger6 = document.getElementById("burger6-button");

// Get the <span> element that closes the modal
var span = document.getElementById("burger6-close");

// When the user clicks the button, open the modal 
btnBurger6.onclick = function() {
  modalBurger6.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalBurger6.style.display = "none";
}


// Modal handler for pizza1
var modalpizza1 = document.getElementById("pizza-modal-1");

// Get the button that opens the modal
var btnpizza1 = document.getElementById("pizza1-button");

// Get the <span> element that closes the modal
var span = document.getElementById("pizza1-close");

// When the user clicks the button, open the modal 
btnpizza1.onclick = function() {
  modalpizza1.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalpizza1.style.display = "none";
}

// Modal handler for pizza2
var modalpizza2 = document.getElementById("pizza-modal-2");

// Get the button that opens the modal
var btnpizza2 = document.getElementById("pizza2-button");

// Get the <span> element that closes the modal
var span = document.getElementById("pizza2-close");

// When the user clicks the button, open the modal 
btnpizza2.onclick = function() {
  modalpizza2.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalpizza2.style.display = "none";
}


// Modal handler for pizza3
var modalpizza3 = document.getElementById("pizza-modal-3");

// Get the button that opens the modal
var btnpizza3 = document.getElementById("pizza3-button");

// Get the <span> element that closes the modal
var span = document.getElementById("pizza3-close");

// When the user clicks the button, open the modal 
btnpizza3.onclick = function() {
  modalpizza3.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalpizza3.style.display = "none";
}

// Modal handler for pizza4
var modalpizza4 = document.getElementById("pizza-modal-4");

// Get the button that opens the modal
var btnpizza4 = document.getElementById("pizza4-button");

// Get the <span> element that closes the modal
var span = document.getElementById("pizza4-close");

// When the user clicks the button, open the modal 
btnpizza4.onclick = function() {
  modalpizza4.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalpizza4.style.display = "none";
}

// Modal handler for pizza5
var modalpizza5 = document.getElementById("pizza-modal-5");

// Get the button that opens the modal
var btnpizza5 = document.getElementById("pizza5-button");

// Get the <span> element that closes the modal
var span = document.getElementById("pizza5-close");

// When the user clicks the button, open the modal 
btnpizza5.onclick = function() {
  modalpizza5.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalpizza5.style.display = "none";
}


// Modal handler for pizza6
var modalpizza6 = document.getElementById("pizza-modal-6");

// Get the button that opens the modal
var btnpizza6 = document.getElementById("pizza6-button");

// Get the <span> element that closes the modal
var span = document.getElementById("pizza6-close");

// When the user clicks the button, open the modal 
btnpizza6.onclick = function() {
  modalpizza6.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalpizza6.style.display = "none";
}



// Modal handler for cream1
var modalcream1 = document.getElementById("cream-modal-1");

// Get the button that opens the modal
var btncream1 = document.getElementById("cream1-button");

// Get the <span> element that closes the modal
var span = document.getElementById("cream1-close");

// When the user clicks the button, open the modal 
btncream1.onclick = function() {
  modalcream1.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalcream1.style.display = "none";
}

// Modal handler for cream2
var modalcream2 = document.getElementById("cream-modal-2");

// Get the button that opens the modal
var btncream2 = document.getElementById("cream2-button");

// Get the <span> element that closes the modal
var span = document.getElementById("cream2-close");

// When the user clicks the button, open the modal 
btncream2.onclick = function() {
  modalcream2.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalcream2.style.display = "none";
}

// Modal handler for cream3
var modalcream3 = document.getElementById("cream-modal-3");

// Get the button that opens the modal
var btncream3 = document.getElementById("cream3-button");

// Get the <span> element that closes the modal
var span = document.getElementById("cream3-close");

// When the user clicks the button, open the modal 
btncream3.onclick = function() {
  modalcream3.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalcream3.style.display = "none";
}

// Modal handler for cream4
var modalcream4 = document.getElementById("cream-modal-4");

// Get the button that opens the modal
var btncream4 = document.getElementById("cream4-button");

// Get the <span> element that closes the modal
var span = document.getElementById("cream4-close");

// When the user clicks the button, open the modal 
btncream4.onclick = function() {
  modalcream4.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalcream4.style.display = "none";
}

// Modal handler for cream5
var modalcream5 = document.getElementById("cream-modal-5");

// Get the button that opens the modal
var btncream5 = document.getElementById("cream5-button");

// Get the <span> element that closes the modal
var span = document.getElementById("cream5-close");

// When the user clicks the button, open the modal 
btncream5.onclick = function() {
  modalcream5.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalcream5.style.display = "none";
}


// Modal handler for cream6
var modalcream6 = document.getElementById("cream-modal-6");

// Get the button that opens the modal
var btncream6 = document.getElementById("cream6-button");

// Get the <span> element that closes the modal
var span = document.getElementById("cream6-close");

// When the user clicks the button, open the modal 
btncream6.onclick = function() {
  modalcream6.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalcream6.style.display = "none";
}



// Modal handler for drink1
var modaldrink1 = document.getElementById("drink-modal-1");

// Get the button that opens the modal
var btndrink1 = document.getElementById("drink1-button");

// Get the <span> element that closes the modal
var span = document.getElementById("drink1-close");

// When the user clicks the button, open the modal 
btndrink1.onclick = function() {
  modaldrink1.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modaldrink1.style.display = "none";
}

// Modal handler for drink2
var modaldrink2 = document.getElementById("drink-modal-2");

// Get the button that opens the modal
var btndrink2 = document.getElementById("drink2-button");

// Get the <span> element that closes the modal
var span = document.getElementById("drink2-close");

// When the user clicks the button, open the modal 
btndrink2.onclick = function() {
  modaldrink2.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modaldrink2.style.display = "none";
}

// Modal handler for drink3
var modaldrink3 = document.getElementById("drink-modal-3");

// Get the button that opens the modal
var btndrink3 = document.getElementById("drink3-button");

// Get the <span> element that closes the modal
var span = document.getElementById("drink3-close");

// When the user clicks the button, open the modal 
btndrink3.onclick = function() {
  modaldrink3.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modaldrink3.style.display = "none";
}

// Modal handler for drink4
var modaldrink4 = document.getElementById("drink-modal-4");

// Get the button that opens the modal
var btndrink4 = document.getElementById("drink4-button");

// Get the <span> element that closes the modal
var span = document.getElementById("drink4-close");

// When the user clicks the button, open the modal 
btndrink4.onclick = function() {
  modaldrink4.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modaldrink4.style.display = "none";
}

// Modal handler for drink5
var modaldrink5 = document.getElementById("drink-modal-5");

// Get the button that opens the modal
var btndrink5 = document.getElementById("drink5-button");

// Get the <span> element that closes the modal
var span = document.getElementById("drink5-close");

// When the user clicks the button, open the modal 
btndrink5.onclick = function() {
  modaldrink5.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modaldrink5.style.display = "none";
}


// Modal handler for drink6
var modaldrink6 = document.getElementById("drink-modal-6");

// Get the button that opens the modal
var btndrink6 = document.getElementById("drink6-button");

// Get the <span> element that closes the modal
var span = document.getElementById("drink6-close");

// When the user clicks the button, open the modal 
btndrink6.onclick = function() {
  modaldrink6.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modaldrink6.style.display = "none";
}


// Modal handler for sweet1
var modalsweet1 = document.getElementById("sweet-modal-1");

// Get the button that opens the modal
var btnsweet1 = document.getElementById("sweet1-button");

// Get the <span> element that closes the modal
var span = document.getElementById("sweet1-close");

// When the user clicks the button, open the modal 
btnsweet1.onclick = function() {
  modalsweet1.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalsweet1.style.display = "none";
}

// Modal handler for sweet2
var modalsweet2 = document.getElementById("sweet-modal-2");

// Get the button that opens the modal
var btnsweet2 = document.getElementById("sweet2-button");

// Get the <span> element that closes the modal
var span = document.getElementById("sweet2-close");

// When the user clicks the button, open the modal 
btnsweet2.onclick = function() {
  modalsweet2.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalsweet2.style.display = "none";
}

// Modal handler for sweet3
var modalsweet3 = document.getElementById("sweet-modal-3");

// Get the button that opens the modal
var btnsweet3 = document.getElementById("sweet3-button");

// Get the <span> element that closes the modal
var span = document.getElementById("sweet3-close");

// When the user clicks the button, open the modal 
btnsweet3.onclick = function() {
  modalsweet3.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalsweet3.style.display = "none";
}

// Modal handler for sweet4
var modalsweet4 = document.getElementById("sweet-modal-4");

// Get the button that opens the modal
var btnsweet4 = document.getElementById("sweet4-button");

// Get the <span> element that closes the modal
var span = document.getElementById("sweet4-close");

// When the user clicks the button, open the modal 
btnsweet4.onclick = function() {
  modalsweet4.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalsweet4.style.display = "none";
}

// Modal handler for sweet5
var modalsweet5 = document.getElementById("sweet-modal-5");

// Get the button that opens the modal
var btnsweet5 = document.getElementById("sweet5-button");

// Get the <span> element that closes the modal
var span = document.getElementById("sweet5-close");

// When the user clicks the button, open the modal 
btnsweet5.onclick = function() {
  modalsweet5.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalsweet5.style.display = "none";
}


// Modal handler for sweet6
var modalsweet6 = document.getElementById("sweet-modal-6");

// Get the button that opens the modal
var btnsweet6 = document.getElementById("sweet6-button");

// Get the <span> element that closes the modal
var span = document.getElementById("sweet6-close");

// When the user clicks the button, open the modal 
btnsweet6.onclick = function() {
  modalsweet6.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalsweet6.style.display = "none";
}


// Modal handler for breakfast1
var modalbreakfast1 = document.getElementById("breakfast-modal-1");

// Get the button that opens the modal
var btnbreakfast1 = document.getElementById("breakfast1-button");

// Get the <span> element that closes the modal
var span = document.getElementById("breakfast1-close");

// When the user clicks the button, open the modal 
btnbreakfast1.onclick = function() {
  modalbreakfast1.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalbreakfast1.style.display = "none";
}

// Modal handler for breakfast2
var modalbreakfast2 = document.getElementById("breakfast-modal-2");

// Get the button that opens the modal
var btnbreakfast2 = document.getElementById("breakfast2-button");

// Get the <span> element that closes the modal
var span = document.getElementById("breakfast2-close");

// When the user clicks the button, open the modal 
btnbreakfast2.onclick = function() {
  modalbreakfast2.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalbreakfast2.style.display = "none";
}

// Modal handler for breakfast3
var modalbreakfast3 = document.getElementById("breakfast-modal-3");

// Get the button that opens the modal
var btnbreakfast3 = document.getElementById("breakfast3-button");

// Get the <span> element that closes the modal
var span = document.getElementById("breakfast3-close");

// When the user clicks the button, open the modal 
btnbreakfast3.onclick = function() {
  modalbreakfast3.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalbreakfast3.style.display = "none";
}

// Modal handler for breakfast4
var modalbreakfast4 = document.getElementById("breakfast-modal-4");

// Get the button that opens the modal
var btnbreakfast4 = document.getElementById("breakfast4-button");

// Get the <span> element that closes the modal
var span = document.getElementById("breakfast4-close");

// When the user clicks the button, open the modal 
btnbreakfast4.onclick = function() {
  modalbreakfast4.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalbreakfast4.style.display = "none";
}

// Modal handler for breakfast5
var modalbreakfast5 = document.getElementById("breakfast-modal-5");

// Get the button that opens the modal
var btnbreakfast5 = document.getElementById("breakfast5-button");

// Get the <span> element that closes the modal
var span = document.getElementById("breakfast5-close");

// When the user clicks the button, open the modal 
btnbreakfast5.onclick = function() {
  modalbreakfast5.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalbreakfast5.style.display = "none";
}


// Modal handler for breakfast6
var modalbreakfast6 = document.getElementById("breakfast-modal-6");

// Get the button that opens the modal
var btnbreakfast6 = document.getElementById("breakfast6-button");

// Get the <span> element that closes the modal
var span = document.getElementById("breakfast6-close");

// When the user clicks the button, open the modal 
btnbreakfast6.onclick = function() {
  modalbreakfast6.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalbreakfast6.style.display = "none";
}