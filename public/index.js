const bookmarkSwitch = document.getElementById("bookmark-switch");
const bookmarkToggle = document.getElementById("bookmark-toggle");
const bookmarkText = document.querySelector(".bookmark-text");

let isBookmarked = false;

bookmarkSwitch.addEventListener("click", function () {
  isBookmarked = !isBookmarked;

  if (isBookmarked === true) {
    console.log("bookmarked");
    bookmarkSwitch.classList.add("active");
    bookmarkSwitch.classList.replace("bg-light-gray", "bg-moderate-cyan");
    bookmarkToggle.classList.add("translate-x-[143px]");
    bookmarkText.textContent = "Bookmarked";
    bookmarkText.classList.replace("right-6", "left-7");
    bookmarkText.classList.replace("text-dark-gray", "text-white");
  } else {
    console.log("not yet bookmarked");
    bookmarkSwitch.classList.remove("active");
    bookmarkSwitch.classList.replace("bg-moderate-cyan", "bg-light-gray");
    bookmarkToggle.classList.remove("translate-x-[143px]");
    bookmarkText.textContent = "Bookmark";
    bookmarkText.classList.replace("left-7", "right-6");
    bookmarkText.classList.replace("text-white", "text-dark-gray");
  }
});
