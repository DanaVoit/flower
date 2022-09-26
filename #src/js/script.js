//динамічне додавання елементів каталогів
const flowers = [
    {
      "image": "https://i.ibb.co/qk3WZzd/bouquet-cart1.png",
      "name": "Ніжна свіжість",
      "flovers": "троянди та лілії",
      "price": 445
    },
    {
      "image": "https://i.ibb.co/kSqMtYg/bouquet-cart2.png",
      "name": "Сорбет",
      "flovers": "хризантеми та троянди",
      "price": 450
    },
    {
      "image": "https://i.ibb.co/P9mTcQT/bouquet-cart3.png",
      "name": "Yellow song",
      "flovers": "соняшники та солідаго",
      "price": 455
    },
    {
      "image": "https://i.ibb.co/M8NL0gT/bouquet-cart4.png",
      "name": "Персиковий нектар",
      "flovers": "лілії та троянди",
      "price": 455
    },
    {
      "image": "https://i.ibb.co/LYMJ9mc/bouquet-cart5.png",
      "name": "Аврора",
      "flovers": "лілії та троянди",
      "price": 460
    },
    {
      "image": "https://i.ibb.co/Y7jdbq5/bouquet-cart6.png",
      "name": "Класика кохання",
      "flovers": "червоні троянди",
      "price": 465
    },
   

 ];
  
  function createCatalogItem (flower){
    const catalogItem = document.createElement('li')
    catalogItem.classList.add('catalog-item')

    
    const catalogItemProfile = document.createElement('div')
    catalogItemProfile.classList.add('catalog-item-profile')

    const catalogImg = document.createElement('div')
    catalogImg.style.backgroundImage= `url(${flower.image})`
    catalogImg.classList.add('catalog-item-img')

    const catalogItemProfileName = document.createElement('p')
    catalogItemProfileName.classList.add('catalog-item-profile-name')
    catalogItemProfileName.textContent = `${flower.name} : ${flower.flovers}`

    const catalogItemProfilePrice= document.createElement('p')
    catalogItemProfilePrice.classList.add('catalog-item-profile-price')
    catalogItemProfilePrice.textContent = `${flower.price} грн `

    const catalogBtn = document.createElement('button')
    catalogBtn.classList.add('btn')
    catalogBtn.textContent = 'В кошик'

    catalogItemProfile.append(catalogItemProfileName);
    catalogItemProfile.append(catalogItemProfilePrice);
    catalogItemProfile.append(catalogBtn);


    catalogItem.append(catalogImg)
    catalogItem.append(catalogItemProfile)

    return catalogItem;
  }


  function appendContent(content) {
    const catalog = document.getElementById('catalog');
  
    catalog.appendChild(content);
  }
  
  function init(flowers) {
    const fragment = document.createDocumentFragment();
  
    flowers.forEach((flower) => {
      fragment.appendChild(createCatalogItem(flower));
    });
  
    appendContent(fragment);
  }
  
  init(flowers);


  //слайдер


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
    let dot = document.querySelectorAll("#slider-review-dot");
    if (n > slides.length) {
        slideIndex = 1
      }
      if (n < 1) {
          slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; 
          dot[i].classList.remove('slider-dot--active')
 
      }

      

      slides[slideIndex - 1].style.display = "flex";
      dot[slideIndex - 1].classList.add('slider-dot--active')
       
  }
  
