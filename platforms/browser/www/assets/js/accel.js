// The watch id references the current `watchAcceleration`

/*  Variables nécessaires pour le compteur de pas */
var watchID = null;
var myStepCount = 0;

/*  Accesseurs HTML  */
var element, distancePrint, calBurnPrint, objectiveStep;

/*   Old Values and limit Values    */
var myOldValue = 0;
var myOldValueZ = 0;
var myOldValueX = 0;
var limitValuePos = 8.5;
var limitValueNeg = 9.5;
var limitValueZ = 9;
var limitOldValueZ = 7.5;
var limitYValueZ = 6.5;
var limitValueX = 1.5;

var choosenFrequency = 120;
var lockbar = 0;

/*  User Variables  */
var username = "David Briceno";
var userSize = 170;


/*   Coefficients calcul distance en fonction de la taille de l'utilisateur  */
var a = 0.64878048;
var b = 44.6744;

/*   Coefficients calcul calories brulées   */
var a1 = 0.448952;

function goBar(step, goal){
  var percent = step / goal;

  if (percent < 1) {
		if(lockbar === 0){
			var bar = new ProgressBar.Circle(container, {
      	strokeWidth: 6,
      	duration: 0,
      	color: '#ffac53',
      	trailColor: '#CCCCCC',
      	trailWidth: 1,
      	svgStyle: null
    	});
			lockbar++;
		}
    
    //bar.animate(percent);
    document.getElementById('goal').style.visibility = "hidden";
    document.getElementById('reached').style.visibility = "hidden";
  } else {
    document.getElementById('goal').style.visibility = "visible";
    document.getElementById('reached').style.visibility = "visible";
  }
}

// Wait for device API libraries to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// Calcul of distance with user's size
//
function calculDistance(userSize, stepCount){
  return (userSize * a - b) * stepCount;
}

// Calcul of burn calories with step counter and unactivity
//
function calculBurnCal(stepCount){
  return a1 * stepCount;
}

// device APIs are available
//
function onDeviceReady() {
	cordova.plugins.backgroundMode.enable();
	startWatch();
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
	element = document.getElementById('accelerometer');
	distancePrint = document.getElementById('distance');
  calBurnPrint = document.getElementById('calBurn');
	objectiveStep = document.getElementById('objective');
		
	
	// Calcul des pas quand le téléphone est à l'envers dans la poche
	if (acceleration.y < 0) {
		if (acceleration.y > -limitValueNeg) {
			if (myOldValue < -limitValueNeg) {
				//myStepCount = myStepCount + 1;
				constellation.server.sendMessage({Scope:'Package', Args:['SfitDataManager']}, 'incrementStep', [username, 1]);
			}
		}
	// Calcul des pas quand le téléphone est dans le bon sens
	} else if (acceleration.y > 0) {
		if (myOldValue !== 0) {
			if (acceleration.y > limitValuePos - 0.1 && acceleration.y > limitValuePos + 0.1) {
				if (myOldValue <= limitValuePos) {
					//myStepCount = myStepCount + 1;
          constellation.server.sendMessage({Scope:'Package', Args:['SfitDataManager']}, 'incrementStep', [username, 1]);
				}
				// Calcul des pas quand on marche le téléphone en main
			} else if(acceleration.y < limitYValueZ && myOldValue < limitYValueZ){
				if(acceleration.z > limitValueZ && myOldValueZ < limitOldValueZ && acceleration.x < limitValueX && acceleration.x > -limitValueX){
					//myStepCount = myStepCount + 1;
          constellation.server.sendMessage({Scope:'Package', Args:['SfitDataManager']}, 'incrementStep', [username, 1]);
				}
        myOldValueZ = acceleration.z;
			}
		}
	}
	
	myOldValue = acceleration.y;
  myOldValueX = acceleration.x;
}

// onError: Failed to get the acceleration
//
function onError() {
	alert('onError!');
}

function subscribeConst() {
	constellation.client.registerStateObjectLink("*", "SfitDataManager", "TodaySteps"+username, "*", (so) => {
		console.log(so.Value["step"]);
		console.log(objectiveStep);
		if (element && distancePrint && calBurnPrint && objectiveStep) {
			console.log(so);
			element.innerHTML = so.Value.step;
			objectiveStep.innerHTML = so.Value.goal;
			distancePrint.innerHTML = (calculDistance(userSize, so.Value.step)/100).toFixed(2) + " m";
			calBurnPrint.innerHTML = (calculBurnCal(so.Value.step)).toFixed(2) + " Cal";

			goBar(so.Value, so.Value.goal);
		}
	});
}
