const getNewsletterBtn = document.getElementById("get-newsletter-btn");
const popupWrapper = document.querySelector(".popup-wrapper");
const popupForm = document.querySelector(".popup-form");
const closeBtnWrapper = document.querySelector(".close-btn-wrapper");
const closeBtnForm = document.querySelector(".close-btn-form");

getNewsletterBtn.addEventListener("click", () => {
  popupWrapper.style.display = "none";
  popupForm.classList.remove("hidden");
});

closeBtnWrapper.addEventListener("click", () => {
  popupWrapper.style.display = "none";
});

closeBtnForm.addEventListener("click", () => {
  popupForm.classList.add("hidden");
});
