const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const password2 = document.getElementById("password2");
const message = document.getElementById("message");
const free = document.getElementById("subscription-free");
const paid = document.getElementById("subscription-paid");
const valmessage = document.getElementById("checked-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  displayMessage();
  valmessage.className = "checked-message green";

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  const messageValue = message.value.trim();
  const closeTag = document.getElementById("close-tag");

  if (
    !username.checkValidity() &&
    !email.checkValidity() &&
    !password.checkValidity() &&
    !message.checkValidity() &&
    !password2.checkValidity()
  ) {
    console.log(`Username: ${usernameValue}`);
    console.log(`Email: ${emailValue}`);
    console.log(`Message: ${messageValue}`);
    console.log(`Password: ${passwordValue}`);
    console.log(`Passoword2: ${password2Value}`);
  }

  if (free.checked) {
    console.log("Free subscription");
  } else if (paid.checked) {
    console.log("Paid Subscription");
  }

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
  } else {
    setSuccesFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email invalid");
  } else {
    setSuccesFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be blank");
  } else {
    setSuccesFor(password);
  }

  if (password2Value === "") {
    setErrorFor(password2, "Password cannot be blank");
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, "Passwords does not match");
  } else {
    setSuccesFor(password2);
  }

  if (messageValue === "") {
    setErrorFor(message, "Message cannot be blank");
  } else {
    setSuccesFor(message);
  }
  if (!free.checked && !paid.checked) {
    setErrorFor(paid, "Please select a subscription");
    setErrorFor(free, "Please select a subscription");
  }
  free.addEventListener("click", function () {
    setSuccesFor(free);
    setSuccesFor(paid);
  });
  paid.addEventListener("click", function () {
    setSuccesFor(free);
    setSuccesFor(paid);
  });
  closeTag.addEventListener("click", function () {
    valmessage.innerText = "";
    valmessage.className = "close-tag hidden";
    
  });
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccesFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control succes";
}


function displayMessage() {
  valmessage.innerHTML = `<i class="fas fa-check-circle check"></i> &nbsp Thank you for contacting us, ${username.value} &nbsp <button class = "close-tag" id = "close-tag"><i class="fa-solid fa-x"></i></button>`;
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}