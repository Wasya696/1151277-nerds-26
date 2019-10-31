var link = document.querySelector(".button-address");

var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var userName = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("userName");
} catch (err) {
	isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("modal-window");
	
	if (storage) {
		userName.value = storage;
		email.focus();
	} else {
		userName.focus();
  }
});

close.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("modal-window");
	popup.classList.remove("modal-error");
	userName.classList.remove("error");
	email.classList.remove("error");
});

form.addEventListener("submit", function(evt) {
	
	if (!userName.value) {
		evt.preventDefault();
		userName.classList.add("error");
		popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else if (!email.value) {
		evt.preventDefault();
		email.classList.add("error");
		popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
		
		if (isStorageSupport) {
			localStorage.setItem("userName", userName.value);
    }
  }
});

userName.addEventListener("focus", function() {
	
	if (userName.classList.contains("error")) {
		userName.classList.remove("error");
  }
});

email.addEventListener("focus", function() {
	
	if (email.classList.contains("error")) {
		email.classList.remove("error");
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


