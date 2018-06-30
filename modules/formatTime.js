function formatTime(input) {
	var hours = Math.floor(input / 3600);
	var minutes = Math.floor(input % 3600 / 60);
	var seconds = Math.floor(input % 3600 % 60);
	if (hours > 1 || hours == 0) {
		var hoursDisplay = hours + ' hours ';
	} else {
		var hoursDisplay = hours + ' hour ';
	}
	if (minutes > 1 || minutes == 0) {
		var minutesDisplay = minutes + ' minutes ';
	} else {
		var minutesDisplay = minutes + ' minute ';
	}
	if (seconds > 1 || seconds == 0) {
		var secondsDisplay = seconds + ' seconds';
	} else {
		var secondsDisplay = seconds + ' second';
	}
	return hoursDisplay + minutesDisplay + secondsDisplay;
}
exports.format = formatTime;