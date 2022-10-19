//catalogItem
function createCatalogItem (flower) {
  const catalogItem = 
  `<li class="catalog-item">
      <div class="catalog-item-img" style="background-image: url(${flower.image})"></div>
      <div class="catalog-item-profile">
        <p class="catalog-item-profile-name">${flower.name}: <br> ${flower.flovers} </p>
        <p class="catalog-item-profile-price">${flower.price} грн</p>
        <button type="button" class="btn">В кошик</button>
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
    
}

init();





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

/* Функція слайдера */
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

  
  





    