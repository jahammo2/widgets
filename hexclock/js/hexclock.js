var clock = document.querySelector('.clock');
var clockText = document.querySelector('.clock-text');
var svg = document.querySelector('svg');

function addZero (timeSpec) {
	if (timeSpec < 10) {
		timeSpec = "0" + timeSpec;
	}
	return timeSpec;
}

(function() {



		var newTime = function () {



			var date = new Date();
			var hours = date.getHours();
			var minutes = date.getMinutes();
			var seconds = date.getSeconds();

			hours = addZero(hours);
			minutes = addZero(minutes);
			seconds = addZero(seconds);

			clockText.innerHTML = hours + " : " + minutes + " : " + seconds;



			var yesterday = new Date()
			yesterday.setHours(0, 0, 0, 0);
			var dateDifference = date - yesterday;			



			// This will change the value of any number between 10-15 to a letter
			// so it fits correctly into the hexadecimal code
			var changeHexValue = function (number) {
				if (number >= 10 && number <= 15) {
					number = String.fromCharCode(65 + number - 10);
				}
				return number;
			}



			// 5,400,000 comes from 86,400,00 and dividing by 16 with 
			// the former being the amount of milliseconds in a day
			// and 15 being the single digit max value for hex colors.
			// This function is then lumping all of these values (as strings)
			// to a variable holder called hexHolder
            var hexValueStart = Math.round(dateDifference / 5400000);

            var multiples = [.16667, .33333, .5, .66667, .83333, 1];
            var hexHolder = "";
            for (var i = 0; i < multiples.length; i++) {
                hexHolder += changeHexValue(Math.round(hexValueStart * multiples[i]));
            }			
			


			// 86.4 comes from taking 86,400,000 and dividing by 999,999
			// with the former being the amount of milliseconds in a day
			// and 999,999 being the best max value for hex colors
			svg.style.fill = "#" + hexHolder;


			
			// 240,000 comes from taking 86,400,000 and dividing by 360
			// with the former being the amount of milliseconds in a day
			// and 360 being the best max value on the color wheel
			var clockColor = Math.round(dateDifference/240000);
			clockText.style.color = 'hsl(' + clockColor + ',100%,50%)';




			// 11.13 comes from 256/23 with 256 being the max value 
			// of a rgb value and 23 for the max value of the variable
			// hours
			var rgbValueHours = Math.round(hours * 11.13)
			// 4.339 comes from 256/59 with 256 being the max value 
			// of a rgb value and 59 for the max value of the variable
			// minutes/seconds
			var rgbValueMinutes = Math.round(minutes * 4.339)
			var rgbValueSeconds = Math.round(seconds * 4.339)

			var backDiv = document.querySelector('.back');
			backDiv.style.background = 'rgb(' + rgbValueHours + ',' + rgbValueMinutes +
				',' + rgbValueSeconds + ')'



		};

		newTime();

		window.setInterval(newTime, 1000);

})();




