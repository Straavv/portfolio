
/////////////////////////////////////////////////Picture Carousel


let next = document.getElementById('next');
let prev = document.getElementById('prev');
let pics = document.querySelector(".picsCarousel");
let slides = document.querySelectorAll(".slide");
let picBtn = document.querySelector('.picBtn');


let currentSlide = 0;
let i = 1;
let m = 1;




setInterval(() => {
// Accessing All the carousel Items
 Array.from(slides).forEach((item,index) => {

   if(m < slides.length){
    item.style.transform = `translateX(-${m*100}%)`
   }
  })


  if(m < slides.length){
    m++;
  }
  else{
    m=0;
  }
},5000)




slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)



next.addEventListener('click', function() {

    currentSlide++;
    if(currentSlide > slides.length - 1) {
        currentSlide = 0;
    }
    slideImage();
})

prev.addEventListener("click", function() {
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    slideImage();
})



let slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${currentSlide * 100}%)`
        }
    )
}

/////////////////////////////////////END OF CAROUSEL


//////////////////////////////////START OF PRODUCT CATEGORY ARRAY WITH PICS AND TEXT

let ProductCatPics = [                             // Array of all pics, headings and texts for Product Category
    
    {
        id: 1,
        heading: "Accelerators",
        text: "Accelerators are innovative formulas with tyrosine, activating the natural process of formation of brown skin pigment. During tanning sessions in a solarium, they shorten the time of exposure to UV radiation, protect and consolidate the achieved tanning effect. The activators, enriched with extracts and caring oils, moisturize and nourish the skin, guaranteeing its softness and wonderful quality.",
        src: "./images/ProductCategoryAccelerators.png"
    },

    {
        id: 2,
        heading: "Bronzers",
        text: "Professional tanning cosmetics for tanning beds with a powerful double bronzing formula with tyrosine and DHA. They accelerate the achievement of a bronze tan during a tanning session, intensify the effect and deepen the achieved skin tone. Natural plant extracts and conditioning oils protect the skin from excessive dryness, moisturize and regenerate.",
        src: "./images/ProductCategoryBronzers.png"
    },

    {
        id: 3,
        heading: "Tingle",
        text: "Solarium tanning cosmetics with a tingle effect intensify the tanning process by visibly and perceptibly stimulating the skin's microcirculation. The warming up visible as reddening of the skin improves the formation of pigment especially difficult to tan parts of the body. Recommended for regular tanning users.",
        src: "./images/ProductCategoryTingle.png"
    },
    
    {
        id: 4,
        heading: "After-tan lotions",
        text: "After-sun lotions moisturize, regenerate and soothe irritation after tanning sessions in tanning beds and in the sun. They prolong the attractiveness of the tan by maintaining a constant level of skin hydration and emphasize the skin tone obtained during the melanin formation process. Active ingredients and selected oils promote skin condition and protect against premature aging.",
        src: "./images/ProductCategoryLotions.png"
    },

    {
        id: 5,
        heading: "Accessories",
        text: "Tanning bed accessories make it easier for you to organize your work and to be comfortable and protected when using tanning beds.",
        src: "./images/ProductCategoryAccessories.png"
    },

    {
        id: 6,
        heading: "POS",
        text: "Marketing support facilitates communication, creates an image and develops sales in your tanning salon. Catalogs, posters, displays and samples support the perfect presentation of cosmetics and attract the eye. Choose the best POS materials for your business.",
        src: "./images/ProductCategoryPOS.png"
    }
]

let ProductCatMainPic = document.getElementById('productCategoryPic'); // Main picture
let ProductCatHeading = document.getElementById('accel'); // Main heading
let ProductCatText = document.getElementById('productCatText'); // Main text
let ProductCategorySecondRow = document.querySelector('.secondRowProductCategory');


let currentItem = 0;

function showInfo() {                               // function to exchange inputs from array with my data
    let item = ProductCatPics[currentItem];
    ProductCatMainPic.src = item.src;
    ProductCatHeading.innerHTML = item.heading;
    ProductCatText.innerHTML = item.text;
}

let bronzers = document.getElementById('bronzers'); // variable of bronzers link

bronzers.addEventListener('mouseover', function() {  // mouse hover exchanges to bronzers info
    
    currentItem = 1;
    ProductCategorySecondRow.style.marginTop = "-60px";
    showInfo();
    
})

let accelerators = document.getElementById('accelerators'); // variable of accelerators link

accelerators.addEventListener('mouseover', function() {  // mouse hover exchanges to accelerators info
    currentItem = 0;
    ProductCategorySecondRow.style.marginTop = "0px";
    showInfo();
})

let tingle = document.getElementById('tingle'); // variable of tingle link

tingle.addEventListener('mouseover', function() {  // mouse hover exchanges to tingle info
    currentItem = 2;
    ProductCategorySecondRow.style.marginTop = "-80px";
    showInfo();

})

let lotions = document.getElementById('lotions'); // variable of lotions link

lotions.addEventListener('mouseover', function() {  // mouse hover exchanges to lotions info
    currentItem = 3;
    ProductCategorySecondRow.style.marginTop = "-50px";
    showInfo();

})

let accessories = document.getElementById('accessories'); //  variable of accessories link

accessories.addEventListener('mouseover', function() {  // mouse hover exchanges to accessories info
    currentItem = 4;
    ProductCategorySecondRow.style.marginTop = "-130px";
    showInfo();

})

let POS = document.getElementById('POS'); //  variable of POS link

POS.addEventListener('mouseover', function() {  // mouse hover exchanges to POS info
    currentItem = 5;
    ProductCategorySecondRow.style.marginTop = "-130px";
  
   showInfo();
    

})



//------------------------------------------Section of Picture Slide Show--------------------------//

let productNext = document.getElementById('productNext');
let productPrev = document.getElementById('productPrev');
let slideShowPics = document.querySelector('.slideShowPics');
let newProductsPics = document.querySelectorAll('.newProductsPics');
let newProductsInfo = document.querySelectorAll('.newProductsInfo');


let currentProduct = 0;


// IDFK What the fuck is this yet, but it takes an array of some elements, in my case its both times array of pictures, then it takes For Each element in the array which are pictures, and it goes 1 by 1, which I have to put completely new name(label) for each element(picture) again as a new variable name and then it applies some rules to them, in my case its changing style of every element to go left by 1 by 1, index is just 0 to 99999, the full length of my array, 1 by 1 and applying style left by 100%. Right now it doesnt work.


newProductsPics.forEach(                                         
    (product, index) => {
        product.style.right = `${index * 100}%`
    }
)





productNext.addEventListener('click', function() {

    currentProduct++;
    if(currentProduct > newProductsPics.length - 4) {
        currentProduct = 0;
    }
    slideProduct();
    slideProductInfo();
})

productPrev.addEventListener("click", function() {
    currentProduct--;
    if(currentProduct < 0) {
        currentProduct = 0;
    }
    slideProduct();
    slideProductInfo();
})



let slideProduct = () => {
    newProductsPics.forEach(
        (product) => {
            product.style.transform = `translateX(-${currentProduct * 133}%)`
        }
    )
}

let slideProductInfo = () => {
    newProductsInfo.forEach(
        (info) => {
            info.style.transform = `translateX(-${currentProduct * 133}%)`
        }
    )
}




// REMINDER TO MAKE BUTTONS APPEAR ONLY ON BOTH END AND START

// ------------------------------------Swipe icons section------------------------------------------//

let slider = document.querySelector('.swipeIconsContainer');
let pressed = false;
let startX;
let scrollLeft;


slider.addEventListener('mousedown', function(e) {
    pressed = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    slider.classList.add('activeM');
    
    
})


slider.addEventListener('mouseleave', function() {
    pressed = false;
})


slider.addEventListener('mouseup', function() {
    pressed = false;
    slider.classList.remove('activeM');
})


slider.addEventListener('mousemove', function(e) {
    if(!pressed) {
        return;
    }
    e.preventDefault();
    let x = e.pageX - slider.offsetLeft;
    let walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
    slider.classList.add('activeM');
    
})

//PLEASE PRACTICE MORE ON THIS STUFF WITH SLIDER, SUPER USEFUL, MAKE SMALL PROJECTS ABOUT IT LATER PLEASE


// ----Chosen for you products at the bottom, carousel of pics again but with automatic this time-----//

let chosenDetails = document.querySelectorAll('.chosenDetails');
let chosenNext = document.getElementById('chosenNext');
let chosenPrev = document.getElementById('chosenPrev');
let chosenCurrent = 0;



let chosenSlide = () => {
    chosenDetails.forEach(
        (chosenproduct) => {
            chosenproduct.style.transform = `translateX(-${chosenCurrent * 137.5}%)`;
           
            
        }
    )
}

chosenNext.addEventListener('click', function() {
    chosenCurrent++;
    if(chosenCurrent > chosenDetails.length - 4) {
        chosenCurrent = 0;
    }
    chosenSlide();
})


chosenPrev.addEventListener('click', function() {
    chosenCurrent--;
    if(currentProduct < 0) {
        currentProduct = 0;
    }
    chosenSlide();
})


setInterval(() => {
// Accessing All the Items
 Array.from(chosenDetails).forEach((item,index) => {

   if(i < chosenDetails.length){
    item.style.transform = `translateX(-${i*137.5}%)`
   }
  })


  if(i < chosenDetails.length - 4){
    i++;
  }
  else{
    i=0;
  }
},3000)

