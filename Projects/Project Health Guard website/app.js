

//-------------------------------- Header and dropdown menu

let menuOne = document.getElementById('menuOne');
let menuTwo = document.getElementById('menuTwo')
let dropdownMenuOne = document.querySelector('.dropdownMenuOne');
let dropdownMenuTwo = document.querySelector('.dropdownMenuTwo');
let firstArrow = document.getElementById('firstArrow');
let secondArrow = document.getElementById('secondArrow');


menuOne.addEventListener('click', function() {
  dropdownMenuOne.classList.toggle('dropdownActiveOne');
  dropdownMenuTwo.classList.remove('dropdownActiveTwo');
  firstArrow.classList.toggle('arrowActive');
  secondArrow.classList.remove('arrowActive');
  
})

menuTwo.addEventListener('click', function() {
    dropdownMenuTwo.classList.toggle('dropdownActiveTwo');
    dropdownMenuOne.classList.remove('dropdownActiveOne');
    secondArrow.classList.toggle('arrowActive');
    firstArrow.classList.remove('arrowActive');
})

//---------------------Upper Picture Carousel

let upperPicBody = document.querySelectorAll('.upperPicBody');
let upperNext = document.getElementById('upperNext');
let upperPrev = document.getElementById('upperPrev');
let currentProduct = 0;


let nextProduct = () => {
    upperPicBody.forEach(
        (product) => {
            product.style.transform = `translateX(-${currentProduct * 100}%)`
            
        }
    )
}

upperNext.addEventListener('click', function() {
  currentProduct++;
  if(currentProduct > upperPicBody.length - 4) {
        currentProduct = 0;
    }
    nextProduct();
})


upperPrev.addEventListener('click', function() {
  currentProduct--;
  if(currentProduct < 0) {
        currentProduct = 0;
    }
    nextProduct();
})


//---------------------------------Middle Pic Carousel----------------------------

let midBodyPicCar = document.querySelectorAll('.bodyMidPicCar');
let midPicCar = document.querySelector('.midPicCarousel');
let midNext = document.getElementById('midNext');
let midPrev = document.getElementById('midPrev');
let currentMidPic = 0;
let m = 1;

autoCar = setInterval(function() {
// Accessing All the carousel Items
 Array.from(midBodyPicCar).forEach((item,index) => {

   if(m < midBodyPicCar.length){
    item.style.transform = `translateX(-${m*100}%)`
   }
  })


  if(m < midBodyPicCar.length - 4){
    m++;
  }
  else{
    m=0;
  }
  
}
,4000)

midPicCar.addEventListener("mouseover", function(){ clearInterval(autoCar)});
midPicCar.addEventListener("mouseout", function(){ autoCar = setInterval(function() {
 Array.from(midBodyPicCar).forEach((item,index) => {

   if(m < midBodyPicCar.length){
    item.style.transform = `translateX(-${m*100}%)`
   }
  })


  if(m < midBodyPicCar.length - 4){
    m++;
  }
  else{
    m=0;
  }
  
}
,4000)})






let nextMidPic = () => {
    midBodyPicCar.forEach(
        (midPic) => {
            midPic.style.transform = `translateX(-${currentMidPic * 100}%)`
            
        }
    )
}

midNext.addEventListener('click', function() {
  currentMidPic = m;
  m++;
  if(currentMidPic > midBodyPicCar.length - 4) {
        currentMidPic = 0;
    }
    nextMidPic();
})


midPrev.addEventListener('click', function() {
  currentMidPic = m - 2;
  m--;
  if(m < 0) {
        m = 0;
    }
    nextMidPic();
})


