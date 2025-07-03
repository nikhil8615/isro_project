function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error-message");

  if (user === ENV.USERNAME && pass === ENV.PASSWORD) {
    error.textContent = "";

    // Set session flag (you can use sessionStorage or localStorage)
    localStorage.setItem("isLoggedIn", "true");

    // Redirect to admin.html
    window.location.href = "admin.html";
  } else {
    error.textContent = "Incorrect username or password.";
  }
}
