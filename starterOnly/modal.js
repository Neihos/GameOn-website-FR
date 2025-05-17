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

function validate() {
  let isValid = true;

  // Champs
  const first = document.getElementById("first");
  const last = document.getElementById("last");
  const email = document.getElementById("email");
  const birthdate = document.getElementById("birthdate");
  const quantity = document.getElementById("quantity");
  const checkbox1 = document.getElementById("checkbox1");

  // Conteneurs
  const firstContainer = first.closest(".formData");
  const lastContainer = last.closest(".formData");
  const emailContainer = email.closest(".formData");
  const birthdateContainer = document.getElementById("birthdate-container");
  const quantityContainer = document.getElementById("quantity-container");
  const locationContainer = document.getElementById("location-container");
  const conditionsContainer = document.getElementById("conditions-container");

  // Boutons radio
  const locationRadios = document.querySelectorAll('input[name="location"]');

  // Réinitialisation des erreurs
  const containers = [
    firstContainer,
    lastContainer,
    emailContainer,
    birthdateContainer,
    quantityContainer,
    locationContainer,
    conditionsContainer,
  ];
  containers.forEach((container) => {
    container.removeAttribute("data-error");
    container.removeAttribute("data-error-visible");
  });

  // Validation prénom
  if (first.value.trim().length < 2) {
    firstContainer.setAttribute(
      "data-error",
      "Le prénom doit contenir au moins 2 lettres."
    );
    firstContainer.setAttribute("data-error-visible", "true");
    isValid = false;
  }

  // Validation nom
  if (last.value.trim().length < 2) {
    lastContainer.setAttribute(
      "data-error",
      "Le nom doit contenir au moins 2 lettres."
    );
    lastContainer.setAttribute("data-error-visible", "true");
    isValid = false;
  }

  // Validation email
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email.value.trim())) {
    emailContainer.setAttribute(
      "data-error",
      "Veuillez entrer une adresse email valide."
    );
    emailContainer.setAttribute("data-error-visible", "true");
    isValid = false;
  }

  // Validation date de naissance
  if (!birthdate.value) {
    birthdateContainer.setAttribute(
      "data-error",
      "Vous devez entrer votre date de naissance."
    );
    birthdateContainer.setAttribute("data-error-visible", "true");
    isValid = false;
  }

  // Validation quantité
  const quantityValue = quantity.value.trim();
  if (
    quantityValue === "" ||
    isNaN(quantityValue) ||
    Number(quantityValue) < 0
  ) {
    quantityContainer.setAttribute(
      "data-error",
      "Veuillez entrer un nombre valide (0 ou plus)."
    );
    quantityContainer.setAttribute("data-error-visible", "true");
    isValid = false;
  }

  // Validation ville (radio)
  let locationSelected = false;
  locationRadios.forEach((radio) => {
    if (radio.checked) locationSelected = true;
  });
  if (!locationSelected) {
    locationContainer.setAttribute(
      "data-error",
      "Veuillez sélectionner une ville."
    );
    locationContainer.setAttribute("data-error-visible", "true");
    isValid = false;
  }

  // Validation conditions d’utilisation
  if (!checkbox1.checked) {
    conditionsContainer.setAttribute(
      "data-error",
      "Vous devez accepter les conditions d'utilisation."
    );
    conditionsContainer.setAttribute("data-error-visible", "true");
    isValid = false;
  }

  return isValid;
}
