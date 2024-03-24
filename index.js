document.addEventListener("DOMContentLoaded", function() {
  var loginButton = document.getElementById('login-btn');
  var body = document.querySelector('body');
  
  loginButton.addEventListener('click', function() {
      // Disable the button to prevent multiple clicks
      loginButton.disabled = true;

      // Change the text of the button to display a GIF
      body.innerHTML = '<img src="pikachu.gif" alt="Loading...">';

      // Simulate login process (You may replace this with your actual login logic)
      setTimeout(function() {
          // Once the login process is complete, enable the button and change the text back to "Login"
          loginButton.disabled = false;
          loginButton.innerHTML = 'Login';
      }, 3000); // Simulating a 3-second login process
  });
});
