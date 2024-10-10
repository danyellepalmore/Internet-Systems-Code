//when i put validation this should be the function that runs when something is wrong
function getFieldNames(){
   document.getElementById("output").innerHTML = "Please Enter "+document.validation.username.value;
}

function checkUsername(){
  const usernameInput = document.getElementById("username").value;
  // /^ : start of input
  // $: end of string
  const pattern = /^[a-z0-9]$;
  if (pattern.test(usernameInput)){
    console.log('valid Username');
    return true;
  } else{
    console.log('invalid username');
    return false;
  }
}

function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
// username: [0-9a-z]
//phone number: /(\d{3})-\d{3}-\d{4}
showTime();
setInterval(function () {
	showTime();
}, 1000);
