// Paste your JavaScript code here
function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Hardcoded validation will update this later
    if (username === 'user' && password === 'password') {
      document.getElementById('loginResult').innerText = 'Login successful! Redirecting...';
          // Redirect to the home page after a delay 
    setTimeout(() => {
        window.location.href = 'home.html';
    }, 2000);
    } else {
      document.getElementById('loginResult').innerText = 'Invalid username or password.';
    }
  }
  