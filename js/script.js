var link = document.querySelector(".button-address");

var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-window");
  
  if (storage) {
	name.value = storage;
	email.focus();
  } else {
	name.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-window");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
  if (!name.value || !email.value) {
	evt.preventDefault();
	popup.classList.add("modal-error");
	console.log("Нужно ввести своё имя и электронную почту");
  } else {
	if (isStorageSupport) {
      localStorage.setItem("name", name.value);
	}
  }
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

