const loginLink = document.querySelector(".button-dark-modal");
const loginPopup = document.querySelector(".modal-find");
const dateDeparture = document.getElementById("date-departure");
const dateArrival= document.getElementById("date-arrival");
const nmbAdults= document.getElementById("nmb-adults");
const nmbChildren= document.getElementById("nmb-children");
loginPopup.classList.remove("modal-show");

loginLink.addEventListener("click", function (evt) {

  evt.preventDefault();

  if (loginPopup.classList.contains("modal-show")) {
    loginPopup.classList.remove("modal-show");
    loginPopup.classList.remove("modal-error");
    loginPopup.focus();
  }

  else if (loginPopup.classList.contains("modal-show")===false) {
    loginPopup.classList.add("modal-show");
  }

});

loginPopup.addEventListener("submit", function (evt) {
  if (!dateDeparture.value || !dateArrival.value || !nmbAdults.value || !nmbChildren.value) {
    evt.preventDefault();
    loginPopup.classList.remove("modal-error");
    loginPopup.offsetWidth = loginPopup.offsetWidth;
    loginPopup.classList.add("modal-error");
  }
});
