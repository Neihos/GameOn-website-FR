function editNav() {
  var x = document.getElementById("myTopnav");
  var navBar = document.querySelector(".main-navbar"); // added variable for navbar access
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  navBar.classList.toggle("open"); // Added a function to add or remove the "open" class
}


// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const cross = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  cross.addEventListener("click", (event) => {
    modalbg.style.display = "none"; // Added display none to hide the modal
  });
}
closeModal();