const usernameInput = document.querySelector(".username");
const passwordInput = document.querySelector(".password");
const loginBtn = document.querySelector(".login-button");
const usernameMessage = document.querySelector(".username-message");
const passwordMassage = document.querySelector(".password-message");
const successModal = document.querySelector(".modal-screen");
const modalButtom = document.querySelector(".modal-button");
loginBtn.addEventListener("click", function () {
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username.length > 3) {
    usernameMessage.classList.remove("hidden");
    usernameMessage.classList.remove("unsuccess");
    usernameMessage.classList.add("success");
    usernameMessage.innerHTML = "The username is correct";
  } else {
    usernameMessage.classList.remove("hidden");
    usernameMessage.classList.remove("success");
    usernameMessage.classList.add("unsuccess");
    usernameMessage.innerHTML = "Username must have 3 characters";
  }

  if (password.length > 8) {
    passwordMassage.classList.remove("hidden");
    passwordMassage.classList.remove("unsuccess");
    passwordMassage.classList.add("success");
    passwordMassage.innerHTML = "The password is correct";
  } else {
    passwordMassage.classList.remove("hidden");
    passwordMassage.classList.remove("success");
    passwordMassage.classList.add("unsuccess");
    passwordMassage.innerHTML = "Password must be more than 8 characters";
  }

  if (username.length > 3 && password.length > 8) {
    successModal.classList.remove("hidden");
  }
});
modalButtom.addEventListener("click", function () {
  successModal.classList.add("hidden")  
})