/* Bookmark Switch */
const bookmarkSwitch = document.getElementById("bookmark-switch");
const bookmarkToggle = document.getElementById("bookmark-toggle");
const bookmarkText = document.querySelector(".bookmark-text");

let isBookmarked = false;

bookmarkSwitch.addEventListener("click", function () {
  isBookmarked = !isBookmarked;

  if (isBookmarked === true) {
    console.log("bookmarked");
    bookmarkSwitch.classList.add("active");
    bookmarkToggle.classList.add("translate-x-[143px]");
    bookmarkText.textContent = "Bookmarked";
    bookmarkText.classList.replace("right-6", "left-7");
    bookmarkText.classList.replace("text-dark-gray", "text-dark-cyan");
  } else {
    console.log("not yet bookmarked");
    bookmarkSwitch.classList.remove("active");
    bookmarkToggle.classList.remove("translate-x-[143px]");
    bookmarkText.textContent = "Bookmark";
    bookmarkText.classList.replace("left-7", "right-6");
    bookmarkText.classList.replace("text-dark-cyan", "text-dark-gray");
  }
});

/* Modal */
const modal = document.getElementById("modal");
const openModalTriggers = document.querySelectorAll(".open-modal-btn");
const closeModalTriggers = document.querySelectorAll(".close-modal-btn");

// open modal
openModalTriggers.forEach((openModalTrigger) => {
  openModalTrigger.addEventListener("click", function () {
    modal.showModal();
  });
});

// close modal
closeModalTriggers.forEach((closeModalTrigger) => {
  closeModalTrigger.addEventListener("click", function () {
    modal.close();
    forms.forEach((form) => {
      form.reset();
    });
  });
});

/* Forms */
const radio = document.querySelector(".radio");
const progressBar = document.getElementById("progress-bar");
const forms = document.querySelectorAll("form");
const successMessage = document.getElementById("sucess-message");
const submitRewardBtn = document.querySelector(".submit-reward");
let backersVal = document.getElementById("backers-value");
let formattedBackersVal = Number(backersVal.innerHTML.replace(",", ""));
let moneyRaised = document.getElementById("money-raised-value");
let formattedMoneyRaised = Number(moneyRaised.innerHTML.replace(",", ""));

// no reward pledge
const noRewardInitial = document.getElementById("no-reward-initial");
const formNoReward = document.getElementById("no-reward-form");

// bamboo stand pledge
const bambooPledgeAmount = document.getElementById("bamboo-quantity");

// black edition pledge
const blackEditionAmount = document.getElementById("black-edition-quantity");

let isSelected = radio.checked;

function validateForm(event) {
  event.preventDefault();

  isSelected = !isSelected;

  if (isSelected === false) {
    successMessage.classList.remove("flex", "flex-col");
    successMessage.classList.add("hidden");
    return false;
  } else {
    noRewardInitial.style.display = "none";
    successMessage.classList.remove("hidden");
    successMessage.classList.add("flex", "flex-col");
    backersVal.textContent = (formattedBackersVal + 1).toLocaleString("en-US"); 
    moneyRaised.textContent = (formattedMoneyRaised + Number(bambooPledgeAmount.value)).toLocaleString("en-US");
    moneyRaised.textContent = (formattedMoneyRaised + Number(blackEditionAmount.value)).toLocaleString("en-US");

    progressBar.classList.replace("w-3/4", "w-[80%]");
    return true;
  }
}
