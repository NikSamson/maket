let loginButton = document.querySelector(".login-but");
let loginPopUp = document.querySelector(".logpopup");

loginButton.addEventListener("click", showPopup);

function showPopup(evt) {
  console.log(evt);
  evt.preventDefault();
  loginPopUp.classList.toggle("show-popup");
}
