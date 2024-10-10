const isValidUsername = /^[a-z0-9]{4,12}$/;
const isValidPassword = /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,}$/;

function validateForm(){
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!isValidUsername.test(username)){
    alert("Invalid username. It must be 4-12 lowercase letters or digits.");
    return false;
  } 
  if (!isValidPassword.test(password)){
    alert("Invalid password. It must be at least 8 characters long and contain at least one digit, one uppercase letter, one lowercase letter, and one special character.");
    return false;
  }
  alert("both username and password are valid!")
  return true;
}

function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}

//phone number: /(\d{3})-\d{3}-\d{4}
showTime();
setInterval(function () {
	showTime();
}, 1000);
