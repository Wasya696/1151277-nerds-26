var link = document.querySelector(".button-address");

var popup = document.querySelector(".modal-login");

var close = popup.querySelector(".modal-close");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-window");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-window");
  popup.classList.remove("modal-error");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
	evt.preventDefault();
	if (popup.classList.contains("modal-window")) {
	  popup.classList.remove("modal-window");
	  popup.classList.remove("modal-error");
	}
  }
});

