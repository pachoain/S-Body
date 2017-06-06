// The watch id references the current `watchAcceleration`
var watchID = null;
var myStepCount = 0;
var myOldValue = 0;
var myOldValueZ = 0;
var myOldValueX = 0;
var limitValuePos = 8.5;
var limitValueNeg = 9.5;
var limitValueZ = 8.9;
var limitOldValueZ = 8.1;
var limitYValueZ = 6.5;
var limitValueX = 3;
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
	// Ecriture du résultat dans ma div
	var element = document.getElementById('accelerometer');
	
	// Calcul des pas quand le téléphone est à l'envers dans la poche
	if (acceleration.y < 0) {
		if (acceleration.y > -limitValueNeg) {
			if (myOldValue < -limitValueNeg) {
				myStepCount = myStepCount + 1;
			}
		}
	// Calcul des pas quand le téléphone est dans le bon sens
	} else if (acceleration.y > 0) {
		if (myOldValue !== 0) {
			if (acceleration.y > limitValuePos - 0.1 && acceleration.y > limitValuePos + 0.1) {
				if (myOldValue <= limitValuePos) {
					myStepCount = myStepCount + 1;
				}
				// Calcul des pas quand on marche le téléphone en main
			} else if(acceleration.y < limitYValueZ && myOldValue < limitYValueZ){
				if(acceleration.z > limitValueZ && myOldValueZ < limitOldValueZ && acceleration.x < limitValueX && acceleration.x > -limitValueX){
					myStepCount = myStepCount + 1;   
				}
        myOldValueZ = acceleration.z;
			}
      /*} else if(acceleration.y < limitYValueZ && myOldValue < limitYValueZ){
				if(acceleration.x > limitValueX && myOldValueX < limitValueX && acceleration.z > limitValueZ){
					myStepCount = myStepCount + 1;
				}			
			}*/
		}
	}
	element.innerHTML = 'Acceleration X: ' + acceleration.x + '<br />' +
		'Acceleration Y: ' + acceleration.y + '<br />' +
		'Acceleration Z: ' + acceleration.z + '<br />' +
		'MyCountStep ' + myStepCount + '<br />' +
		'Timestamp: ' + acceleration.timestamp + '<br />';
	myOldValue = acceleration.y;

  myOldValueX = acceleration.x;
}

// onError: Failed to get the acceleration
//
function onError() {
	alert('onError!');
}
