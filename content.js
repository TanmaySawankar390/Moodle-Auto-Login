// Replace 'YOUR_USERNAME' and 'YOUR_PASSWORD' with your actual credentials
var username = 'YOUR_USERNAME';
var password = 'YOUR_PASSWORD';

// Function to find and fill the login form fields
function fillLoginForm() {
  var usernameField = document.querySelector('#username.form-control'); // Replace '#username' with the actual selector for the username field
  var passwordField = document.querySelector('#password.form-control'); // Replace '#password' with the actual selector for the password field

  if (usernameField || passwordField) {
    // Fill the username and password fields
    usernameField.value = username;
    passwordField.value = password;

    // Submit the login form
    var form = usernameField.closest('form');
    if (form) {
      form.submit();
    }
  } else {
    console.log('Login fields not found.');
  }
}

// Wait for the page to load completely before filling the form
window.addEventListener('load', fillLoginForm());
