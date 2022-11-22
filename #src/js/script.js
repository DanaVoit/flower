//header scroll
const header = document.querySelector('.header')
  window.addEventListener('scroll', function(){
  header.classList.add('_scroll')
})


//mobile-menu
const mobileMenuBtn = document.querySelector('.header-mobile-menu')
const mobileMenu = document.querySelector('.header-nav-links')
const mobileHeader = document.querySelector('.header-nav')
const mobileLinks = document.querySelectorAll('.header-nav-links-item')


if(mobileMenuBtn){
  mobileMenuBtn.addEventListener('click', function(){
    mobileMenu.classList.toggle('_mobile')
    document.body.classList.toggle('_lock')
    mobileHeader.classList.toggle('_mobile')
  })
}

  mobileLinks.forEach(element => element.addEventListener('click', function() {
      mobileMenu.classList.remove('_mobile')
      document.body.classList.remove('_lock')
      mobileHeader.classList.remove('_mobile')
  }))


//isMobile
const isMobile = {
  Android: function () {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
      return (
              isMobile.Android()
              || isMobile.BlackBerry()
              || isMobile.iOS()
              || isMobile.Opera()
              || isMobile.Windows()
              );
  }
};


//open cart
const lockBkg = document.querySelector('.headen')
const openCart = document.querySelectorAll('#open-cart')
const cartPopup = document.querySelector('#popup')

openCart.forEach(element => element.addEventListener('click', function() {
    if(isMobile.any()) {
      cartPopup.style.right = "-30%"
    } else{
      cartPopup.style.right = "-12%";
    }
  
  document.body.classList.add('_lock')
  lockBkg.classList.remove('headen')
  header.style.zIndex = 0;
}))

//close cart
const cartClose = document.querySelector('.popup-close')
cartClose.addEventListener('click', function(){
  cartPopup.style.right = "-1200%";
  document.body.classList.remove('_lock')
  lockBkg.classList.add('headen')
  header.style.zIndex = 100;

})  

//catalogItem
function createCatalogItem (flower) {
  const catalogItem = 
  `<li class="catalog-item">
      <div class="catalog-item-img" id="product-img" style="background-image: url(${flower.image})"></div>
      <div class="catalog-item-profile">
        <p class="catalog-item-profile-name" id="product-name">${flower.name}: <br> ${flower.flovers} </p>
        <p class="catalog-item-profile-price" id='product-price'>${flower.price} грн</p>
        <button type="button" class="btn" id="add-cart">В кошик</button>
      </div>
    </li>`

  return createFragmentTemplate(catalogItem);
}


function createFragmentTemplate(str) {
  const template = document.createElement('template');
  template.innerHTML = str;
  return template.content;
}


function appendContent(content) {
  const catalog = document.getElementById('catalog');

  catalog.appendChild(content);
}

function init() {
  fetch('https://run.mocky.io/v3/275cc213-7485-4396-b1ba-c1969194d67f')
  .then((res) => res.json())
  .then((data) => {
    const fragment = document.createDocumentFragment();

    data.forEach((flower) => {
      fragment.appendChild(createCatalogItem(flower));
    });

    appendContent(fragment);
  })
  addCartInit;
}

init();



function  addCartInit() {
  const addCart = document.querySelectorAll('#add-cart')
  button = addCart[i];
  for (var i = 0; i < addCart.length; i++) {
  button.addEventListener('click', addToCartClicked)
}
}

 
const productRow = document.querySelector('#cart-inner');

function addToCartClicked (event) {
  button = event.target;
  var cartItem = button.parentElement;
  var price = cartItem.querySelector('#product-price')[0].innerText;
  var productName = document.querySelector('#product-name')[0].innerText
  
  var imageSrc = cartItem.querySelector('#product-img')[0].src;
  addItemToCart (price, productName, imageSrc);
  updateCartPrice()
}

function addItemToCart (price, productName, imageSrc) {
  var productRow = document.createElement('div');
  productRow.classList.add('popup-cart');
  var productRows = document.getElementsByClassName('product-rows')[0];
  var cartImage = document.getElementsByClassName('cart-image');
  
 
  
  var cartRowItems = `
  <div class="popup-cart>
       <img src=${imageSrc} width="100">
       <div class="popup-cart-name">
                <p class="popup-txt">${productName}</p> 
                <p class="popup-txt">${price} </p> 
            </div>  
        </div>
        <button class="remove-btn">Remove</button>
        </div>
        
      `
  productRow.innerHTML = cartRowItems;
  productRows.append(productRow);
  productRow.getElementsByClassName('remove-btn')[0].addEventListener('click', removeItem)
  productRow.getElementsByClassName('product-quantity')[0].addEventListener('change', changeQuantity)
  updateCartPrice()
}
// end of add products to cart

// Remove products from cart
const removeBtn = document.getElementsByClassName('remove-btn');
for (var i = 0; i < removeBtn.length; i++) {
  button = removeBtn[i]
  button.addEventListener('click', removeItem)
}

function removeItem (event) {
  btnClicked = event.target
  btnClicked.parentElement.parentElement.remove()
  updateCartPrice()
}




//Slider
let slideNext = document.querySelector('#slider-next')
let slidePrev = document.querySelector('#slider-prev')

let slideIndex = 1;
showSlides(slideIndex);

slideNext.addEventListener('click', function plusSlide() {
    showSlides(slideIndex += 1);
})


slidePrev.addEventListener('click', function minusSlide() {
    showSlides(slideIndex -= 1);
})

function currentSlide(n) {
    showSlides(slideIndex = n);
    
}


function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".review-main");
    
    if (n > slides.length) {
        slideIndex = 1
      }
      if (n < 1) {
          slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; 
         
      }
      
      slides[slideIndex - 1].style.display = "flex";
       
  }


