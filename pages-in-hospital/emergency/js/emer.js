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

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& //

// progress under inputs in request discount section
//input text in form in request discount section
let inputText = document.querySelector(".input-text");
let progressText = document.querySelector(".progress-text");
let maxLengthText = inputText.getAttribute("maxlength");

inputText.oninput = function () {
    progressText.style.width = `${(inputText.value.length * 100) / maxLengthText}%`;
    if (inputText.value.length <= 10) {
        progressText.style.backgroundColor = "yellow";
    }
    else if (inputText.value.length <= 20) {
        progressText.style.backgroundColor = "green";
    } 
    else {
        progressText.style.backgroundColor = "var(--green-color)";
    } 
};
//input Phone in form in request discount section
let inputPhone = document.querySelector(".input-phone");
let progressPhone = document.querySelector(".progress-phone");
let maxLengthPhone = inputPhone.getAttribute("maxlength");

inputPhone.oninput = function () {
    progressPhone.style.width = ` ${(inputPhone.value.length * 100) / maxLengthPhone}% `;
    if (inputPhone.value.length <= 5) {
        progressPhone.style.backgroundColor = "yellow";
    }
    else if (inputPhone.value.length <= 10) {
        progressPhone.style.backgroundColor = "green";
    } 
    else {
        progressPhone.style.backgroundColor = "var(--green-color)";
    } 
};
                        //input Email in form in request discount section
let inputEmail = document.querySelector(".input-email");
let progressEmail = document.querySelector(".progress-email");
let maxLengthEmail = inputEmail.getAttribute("maxlength");

inputEmail.oninput = function () {
    progressEmail.style.width = `${(this.value.length * 100) / maxLengthEmail}%`;
    if (this.value.length <= 10) {
        progressEmail.style.backgroundColor = "yellow";
    }
    else if (inputEmail.value.length <= 20) {
        progressEmail.style.backgroundColor = "green";
    } 
    else {
        progressEmail.style.backgroundColor = "var(--green-color)";
    } 
};
                        //input password number in form in request discount section
let inputPassword = document.querySelector(".input-password");
let progressPassword = document.querySelector(".progress-password");
let maxLengthPassword = inputPassword.getAttribute("maxlength");

inputPassword.oninput = function () {
    progressPassword.style.width = `${(this.value.length * 100) / maxLengthPassword}%`;
    if (this.value.length <= 5) {
        progressPassword.style.backgroundColor = "yellow";
    }
    else if (inputText.value.length <= 10) {
        progressPassword.style.backgroundColor = "green";
    } 
    else {
        progressPassword.style.backgroundColor = "var(--green-color)";
    }
};