//when i put validation this should be the function that runs when something is wrong
function getFieldNames(){
   document.getElementById("output").innerHTML = "Please Enter "+document.validation.username.value;
}

function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);
