const loginLink = document.querySelector(".button-dark-modal");
const loginPopup = document.querySelector(".modal-find");

loginLink.addEventListener("click", function (evt) {

  evt.preventDefault();

  if (loginPopup.classList.contains("modal-show")) {
    loginPopup.classList.remove("modal-show");
    loginPopup.focus();
  }

  else if (loginPopup.classList.contains("modal-show")===false) {
    loginPopup.classList.add("modal-show");
  }

});
