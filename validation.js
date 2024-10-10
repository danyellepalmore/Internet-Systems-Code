//when i put validation this should be the function that runs when something is wrong
function getFieldNames(){
   document.getElementById("output").innerHTML = "Please Enter "+document.validation.username.value;
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
