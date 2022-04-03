let years = 0;
let days = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
let arr;
let cd = true;

const sound = new Audio ("sound.mp3");

function pickDeathDate() {
	if (!localStorage.getItem("username")) {
		localStorage.setItem("username", prompt("Username: "));
	}

	//if (!localStorage.getItem("Years")) {
		/*** 
		localStorage.setItem("Years", String(Math.floor(Math.random() * 5)));
		localStorage.setItem("Days", String(Math.floor(Math.random() * 99)));
		localStorage.setItem("Hours", String(Math.floor(Math.random() * 24)));
		localStorage.setItem("Minutes", String(Math.floor(Math.random() * 60)));
		localStorage.setItem("Seconds", String(Math.floor(Math.random() * 60)));
		*/

		localStorage.setItem("Years", String(0));
		localStorage.setItem("Days", String(2));
		localStorage.setItem("Hours", String(12));
		localStorage.setItem("Minutes", String(49));
		localStorage.setItem("Seconds", String(56));
	//}

	years = parseInt(localStorage.getItem("Years"));
	days = parseInt(localStorage.getItem("Days"));
	hours = parseInt(localStorage.getItem("Hours"));
	minutes = parseInt(localStorage.getItem("Minutes"));
	seconds = parseInt(localStorage.getItem("Seconds"));

	arr = new Array (5);

	arr.push(years, days, hours, minutes, seconds);

	countdown();
}

function countdown() {
	if (cd) {
		setInterval(function() {
			document.getElementById("years").textContent = (years).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
			if (years <= 5) {
				document.getElementById("years").style.color = "red";
			}
			else {
				document.getElementById("years").style.color = "white";
			}
			document.getElementById("days").textContent = (days).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});;
			if (days <= 5) {
				document.getElementById("days").style.color = "red";
			}
			else {
				document.getElementById("days").style.color = "white";
			}
			document.getElementById("hours").textContent = (hours).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});;
			if (hours <= 5) {
				document.getElementById("hours").style.color = "red";
			}
			else {
				document.getElementById("hours").style.color = "white";
			}
			document.getElementById("minutes").textContent = (minutes).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});;
			if (minutes <= 5) {
				document.getElementById("minutes").style.color = "red";
			}
			else {
				document.getElementById("minutes").style.color = "white";
			}
			document.getElementById("seconds").textContent = (seconds).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});;
			if (seconds <= 5) {
				document.getElementById("seconds").style.color = "red";
			}
			else {
				document.getElementById("seconds").style.color = "white";
			}

			seconds --;

			if (seconds <= 0) {
				minutes --;
				sound = new Audio ("sound.mp3");
				sound.play();
				seconds = 59;
			}
			if (minutes <= 0) {
				hours --;
				minutes = 59;
			}
			if (hours <= 0) {
				days --;
				hours = 23;
			}
			if (days <= 0) {
				years --;
				days = 363;
			}
			if (seconds + minutes + hours + days + years <= 0) {
				sound.play()
				cd = false;
			}

			localStorage.setItem("Years", String(years));
			localStorage.setItem("Days", String(days));
			localStorage.setItem("Hours", String(hours));
			localStorage.setItem("Minutes", String(minutes));
			localStorage.setItem("Seconds", String(seconds));
		}, 1000);
	}
}