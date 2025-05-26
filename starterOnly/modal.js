function editNav() {
  var x = document.querySelector("#myTopnav");
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

function validate(event) {
  event.preventDefault();

  let isValid = true;

  // Fields
  const first = document.querySelector("#first");
  const last = document.querySelector("#last");
  const email = document.querySelector("#email");
  const birthdate = document.querySelector("#birthdate");
  const quantity = document.querySelector("#quantity");
  const checkbox1 = document.querySelector("#checkbox1");

  // Containers
  const firstContainer = first.closest(".formData");
  const lastContainer = last.closest(".formData");
  const emailContainer = email.closest(".formData");
  const birthdateContainer = document.querySelector("#birthdate-container");
  const quantityContainer = document.querySelector("#quantity-container");
  const locationContainer = document.querySelector("#location-container");

  // Radio buttons
  const locationRadios = document.querySelectorAll('input[name="location"]');

  // Labels
  const label1 = document.querySelector('label[for="checkbox1"]');

  // Resetting errors
  const validateElements = [
    firstContainer,
    lastContainer,
    emailContainer,
    birthdateContainer,
    quantityContainer,
    locationContainer,
    label1,
  ];
  validateElements.forEach((el) => {
    el.removeAttribute("data-error");
    el.removeAttribute("data-error-visible");
  });

  // First name validation
  function firstNameCheck() {
    if (first.value.trim().length < 2) {
      firstContainer.setAttribute(
        "data-error",
        "Le prénom doit contenir au moins 2 lettres."
      );
      firstContainer.setAttribute("data-error-visible", "true");
      isValid = false;
    }
  }
  firstNameCheck();

  // Validation name
  function nameCheck() {
    if (last.value.trim().length < 2) {
      lastContainer.setAttribute(
        "data-error",
        "Le nom doit contenir au moins 2 lettres."
      );
      lastContainer.setAttribute("data-error-visible", "true");
      isValid = false;
    }
  }
  nameCheck();

  // Validation email
  function emailCheck() {
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email.value.trim())) {
      emailContainer.setAttribute(
        "data-error",
        "Veuillez entrer une adresse email valide."
      );
      emailContainer.setAttribute("data-error-visible", "true");
      isValid = false;
    }
  }
  emailCheck();

  // Validation date of birth
  function birthCheck() {
    if (!birthdate.value) {
      birthdateContainer.setAttribute(
        "data-error",
        "Vous devez entrer votre date de naissance."
      );
      birthdateContainer.setAttribute("data-error-visible", "true");
      isValid = false;
    } else {
      const today = new Date();
      const birthDate = new Date(birthdate.value);

      const age = today.getFullYear() - birthDate.getFullYear();
      const hasBirthdayPassed =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() &&
          today.getDate() >= birthDate.getDate());
      const exactAge = hasBirthdayPassed ? age : age - 1;

      if (exactAge < 16 || exactAge > 150) {
        birthdateContainer.setAttribute(
          "data-error",
          "Vous devez avoir entre 16 et 150 ans."
        );
        birthdateContainer.setAttribute("data-error-visible", "true");
        isValid = false;
      } else {
        birthdateContainer.removeAttribute("data-error");
        birthdateContainer.setAttribute("data-error-visible", "false");
      }
    }
  }
  birthCheck();

  // Validation quantity
  function quantityCheck() {
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
  }
  quantityCheck();

  // Validation city (radio)
  function radioCheck() {
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
  }
  radioCheck();

  // Validation of the conditions of use
  function conditionsCheck() {
    if (!checkbox1.checked) {
      label1.setAttribute(
        "data-error",
        "Vous devez accepter les conditions d'utilisation."
      );
      label1.setAttribute("data-error-visible", "true");
      isValid = false;
    }
  }
  conditionsCheck();

  // confirmation message
  function confirmationCheck() {
    if (isValid) {
      const form = document.forms["reserve"];
      form.style.display = "none";

      const confirmation = document.querySelector("#successMessage");
      confirmation.style.display = "flex";
    }
  }
  confirmationCheck();

  return isValid;
}
