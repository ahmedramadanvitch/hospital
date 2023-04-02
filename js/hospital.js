// start pre-loader
let preLoader = document.querySelector("#pre-loader");

window.addEventListener("load" , () => {
  preLoader.style.display = "none";
})

// ******************************************************* //

// change color in all page
// local storage  
let mainColor = localStorage.getItem("color_option");
// check if there is color option
if (mainColor !== null) {
    document.documentElement.style.setProperty("--green-color", mainColor)
    // document.documentElement.style.setProperty("--main-color", mainColor)
}

let colorLi = document.querySelectorAll(".switcher li");
let navColor = document.querySelector(".nav-color");
let navColorLarge = document.querySelector(".nav-color-large");
let switcherColor = document.querySelector(".switcher");
let switcherColorLarge = document.querySelector(".switcher-large");

navColor.addEventListener("click", ()=>{
  switcherColor.classList.toggle("open");
})
navColorLarge.addEventListener("click", ()=>{
  switcherColorLarge.classList.toggle("open");
})

// do loop on < li >
colorLi.forEach( (ele) => {
    // click on every li  
    ele.addEventListener("click", function (even) {

        // this is very important code for me
        
        // set colors in root ( in css )
        document.documentElement.style.setProperty("--green-color" ,ele.dataset.color);
        // document.documentElement.style.setProperty("--dark-color" ,ele.dataset.bg);
        
        // set color in local storage
        localStorage.setItem("color_option", ele.dataset.color);

        even.target.parentElement.querySelectorAll(".switcher .active").forEach((element) => {

        element.classList.remove("active");

        });

    even.target.classList.add("active");

    // localStorage.setItem("class_active",even.target.classList.add("active"));

    })
});

// ********************************************************************//

// right button in window
let btn = document.querySelector(".btn-up");

window.onscroll = function () {
    // scroll button right of page
    if (window.scrollY >= 300) {
        btn.style.cssText = "display: block; opacity: .9;"
    } else {
        btn.style.cssText = "display: block; right: -70px"
    }
};
// function of button up in window
btn.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
};

// *********************** gallery ******************************//


// Get Slider Items | Array.form [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get Number Of Slides
var slidesCount = sliderImages.length;

// Set Current Slide
var currentSlide = 1;

// Slide Number Element
var slideNumberElement = document.getElementById('slide-number');

// Previous and Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main UL Element
var paginationElement = document.createElement('ul');

// Set ID On Created Ul Element
paginationElement.setAttribute('id', 'pagination-ul');

// Create List Items Based On Slides Count
for (var i = 1; i <= slidesCount; i++) {

  // Create The LI
  var paginationItem = document.createElement('li');

  // Set Custom Attribute
  paginationItem.setAttribute('data-index', i);

  // Set Item Content
  paginationItem.appendChild(document.createTextNode(i));

  // Append Items to The Main Ul List
  paginationElement.appendChild(paginationItem);

}

// Add The Created UL Element to The Page
document.getElementById('indicators').appendChild(paginationElement);

// Get The New Created UL
var paginationCreatedUl = document.getElementById('pagination-ul');

// Get Pagination Items | Array.form [ES6 Feature]
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop Through All Bullets Items
for (var i = 0; i < paginationsBullets.length; i++) {

  paginationsBullets[i].onclick = function () {

    currentSlide = parseInt(this.getAttribute('data-index'));

    theChecker();

  }

}

// Trigger The Checker Function
theChecker();

// Next Slide Function
function nextSlide() {

  if (nextButton.classList.contains('disabled')) {

    // Do Nothing
    return false;

  } else {

    currentSlide++;

    theChecker();

  }

}

// Previous Slide Function
function prevSlide() {

  if (prevButton.classList.contains('disabled')) {

    // Do Nothing
    return false;

  } else {

    currentSlide--;

    theChecker();

  }

}

// Create The Checker Function
function theChecker() {

  // Set The Slide Number
  slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);

  // Remove All Active Classes
  removeAllActive();

  // Set Active Class On Current Slide
  sliderImages[currentSlide - 1].classList.add('active');

  // Set Active Class on Current Pagination Item
  paginationCreatedUl.children[currentSlide - 1].classList.add('active');

  // Check if Current Slide is The First
  if (currentSlide == 1) {

    // Add Disabled Class on Previous Button
    prevButton.classList.add('disabled');

  } else {

    // Remove Disabled Class From Previous Button
    prevButton.classList.remove('disabled');

  }

  // Check if Current Slide is The Last
  if (currentSlide == slidesCount) {

    // Add Disabled Class on Next Button
    nextButton.classList.add('disabled');

  } else {

    // Remove Disabled Class From Next Button
    nextButton.classList.remove('disabled');

  }

}

// Remove All Active Classes From Images and Pagination Bullets
function removeAllActive() {

  // Loop Through Images
  sliderImages.forEach(function (img) {

    img.classList.remove('active');

  });

  // Loop Through Pagination Bullets
  paginationsBullets.forEach(function (bullet) {

    bullet.classList.remove('active');

  });

}
























// **********************************************************************//
// ************** start ul li projects ****************************************//
// let liProject = document.querySelectorAll(".swicher-common li");
// let imgsProjects = document.querySelectorAll(".big-box");

// liProject.forEach( (li)=> {
//     li.addEventListener("click", removeActive);
//     li.addEventListener("click", manageImg);
// });

// remove active class from all li and add to the current element you clicked on it

// function removeActive(){
//     liProject.forEach((li) => {
//         li.classList.remove("active-common");
//         this.classList.add("active-common");
//     })
// };
// manage img

// function manageImg() {
//     imgsProjects.forEach((box) => {
//         box.style.display = "none";
//     });
//     document.querySelectorAll(this.dataset.work).forEach((ele) => {
//         ele.style.display = "block";
//     })
// };

// ************** End ul li projects ************************************//





