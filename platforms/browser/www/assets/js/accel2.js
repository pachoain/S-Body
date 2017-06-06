(function () {

	function Countstep() {
		this.init();
		return this.count;

	}

	Countstep.prototype = {
		init: function () {
			var _this = this;
			_this.flag = false;
			_this.count = [];
			_this.count[0] = 0;

			function motionHandler(event) {
				console.log(event.accelerationIncludingGravity);
				var accGravity = event.accelerationIncludingGravity;
				console.log(accGravity);
				_this.yg = accGravity.y;
				return false;
			}

			function orientationHandler(event) {
				// Valentin 16
				// David
				if ((_this.yg - 3 * Math.sin(event.beta * Math.PI / 180)) > 1) {
					_this.flag = true;
				}
				if ((_this.yg - 3 * Math.sin(event.beta * Math.PI / 180)) < -1) {
					if (_this.flag == true) {
						_this.count[0]++;
						_this.flag = false;

					};

				}
			}

			if (window.DeviceMotionEvent && window.DeviceOrientationEvent) {
				window.addEventListener("devicemotion", motionHandler, false);
				window.addEventListener("deviceorientation", orientationHandler, false);
				return _this.count;
			} else {
				alert('您的浏览器不支持本计步插件');
			}

		},


	}
	window.Countstep = Countstep;
})();

window.onload = function what() {
	var count = new Countstep();
	console.log(document.getElementById("accelerometer2"));
	window.addEventListener("devicemotion", function () {
		console.log(count);
		document.getElementById("accelerometer2").innerHTML = count[0];
	}, false);
};

