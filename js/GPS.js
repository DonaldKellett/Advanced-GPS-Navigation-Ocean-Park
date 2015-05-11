/*
	GPS.js
	This is the file that enables GPS Tracking.
	Don't worry - this file does not send any information to the server or any third party.  If you are a coder, you should know that right away because the properties of Javascript do not allow server communication.
	This is quite a small project so feel free to use and modify it.  Just don't forget to credit me ;)
	(c) Donald Leung.  All rights reserved.
*/

var gpsNavigation = {
	// Object literal
	init: function() {
		document.getElementById("javascript").style.display = "block";
	},
	alertUser: 1,
	getPosition: function() {
		document.getElementById("enableGPS").style.display = "none";
		navigator.geolocation.watchPosition(gpsNavigation.createMap, gpsNavigation.alertError);
	},
	createMap: function(position) {
		document.getElementById("map").src = "http://maps.googleapis.com/maps/api/staticmap?center=" + position.coords.latitude + "," + position.coords.longitude + "&zoom=17&size=400x300&sensor=false";
		document.getElementById("error").innerHTML = "";
		if (Math.round(1000000 * position.coords.latitude) * 0.000001 === 22.246661 && Math.round(1000000 * position.coords.longitude) * 0.000001 === 114.175724 && gpsNavigation.alertUser === 1) {
			// Alerts user once if he or she reaches approximate location of Ocean Park
			alert("Hooray!  You have reached Ocean Park!");
			gpsNavigation.alertUser = 0;
		}
	},
	alertError: function(error) {
		switch(error.code) {
			case error.PERMISSION_DENIED:
			document.getElementById("map").src = "images/red-cross.png";
			document.getElementById("error").innerHTML = "Sorry, you denied permission for this website to track your location.";
			break;
			case error.POSITION_UNAVAILABLE:
			document.getElementById("map").src = "images/red-cross.png";
			document.getElementById("error").innerHTML = "Sorry, your position is currently unavailable.";
			break;
			case error.TIMEOUT:
			document.getElementById("map").src = "images/red-cross.png";
			document.getElementById("error").innerHTML = "Sorry, your current location timed out.";
			break;
			case error.UNKNOWN_ERROR:
			document.getElementById("map").src = "images/red-cross.png";
			document.getElementById("error").innerHTML = "Sorry, an unknown error occurred.";
			break;
		}
	}
};

// Initialize GPS Navigation
gpsNavigation.init();