const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");
const password2 = document.getElementById("password2");
const message = document.getElementById("message");
const free = document.getElementById("subscription-free");
const paid = document.getElementById("subscription-paid");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();
  const messageValue = message.value.trim();

  if (
    username.checkValidity() &&
    email.checkValidity() &&
    password.checkValidity() &&
    message.checkValidity() &&
    password2.checkValidity()
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
    setErrorFor(free, "Please select a subscription");
    setErrorFor(paid, "Please select a subscription");
  } else if ((free.checked && !paid, checked)) {
    setSuccesFor(free);
  } else {
    setSuccesFor(paid);
  }

  if (!free.checked && paid.checked) {
    setErrorFor(free, "Please choose a subscription");
  } else if ((!paid.checked && free, checked)) {
    setErrorFor(paid, "Please choose a subscription");
  }

if(){
    displayMessage();
}

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

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function displayMessage(){
    
}