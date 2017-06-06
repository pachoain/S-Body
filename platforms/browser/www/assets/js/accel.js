// The watch id references the current `watchAcceleration`
var watchID = null;
var myStepCount = 0;
var myOldValue = 0;
var limitValuePos = 8.7;
var limitValueNeg = 9.8;
var choosenFrequency = 200;

// Wait for device API libraries to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
//
function onDeviceReady() {
	cordova.plugins.backgroundMode.enable();
	startWatch();
	console.log("i'm here");
	console.log(choosenFrequency);
}

// Start watching the acceleration
//
function startWatch() {

	// Update acceleration every 0.5 seconds
	var options = {
		frequency: choosenFrequency
	};

	watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
}

// Stop watching the acceleration
//
function stopWatch() {
	if (watchID) {
		navigator.accelerometer.clearWatch(watchID);
		watchID = null;
	}
}

// onSuccess: Get a snapshot of the current acceleration
//
function onSuccess(acceleration) {
	var element = document.getElementById('accelerometer');
	if (acceleration.y < 0) {
		if (acceleration.y > -limitValueNeg) {
			if (myOldValue < -limitValueNeg) {
				myStepCount = myStepCount + 1;
			}
		}
	} else if (acceleration.y > 0) {
		if (myOldValue != 0) {
			if (acceleration.y > limitValuePos - 0.1 && acceleration.y > limitValuePos + 0.1) {
				if (myOldValue <= limitValuePos) {
					myStepCount = myStepCount + 1;
				}
			}
		}
	}
	element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
		'Acceleration Y: ' + acceleration.y + '<br />' +
		'Acceleration Z: ' + acceleration.z + '<br />' +
		'MyCountStep ' + myStepCount + '<br />' +
		'Timestamp: ' + acceleration.timestamp + '<br />';
	myOldValue = acceleration.y;
}

// onError: Failed to get the acceleration
//
function onError() {
	alert('onError!');
}
