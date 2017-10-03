//get a seed
var seed = 87798286123456;//getRandomInt(1, 200000);

//create a new generator, passing a seed value.
gen = new MersenneTwister(seed);
	
for(i = 0; i < 10; i++) {

	//use .next() to get the next random value.
	rand = gen.next();
	
	//this is "pseudo-random" so, every time we seed
	//the generator with 1234, the first random value 
	//will be 272848313
	console.log(rand); //272848313
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getUserPhrase() {
	var userphrase = document.getElementById("user-input-phrase").value;
	console.log(userphrase);
	
	var phrasekey = "";
	
	var res = userphrase.split("");
	console.log(res);
	
	res.forEach(function(element) {
		
		phrasekey += String(element.charCodeAt(0));
	});
	
	console.log(phrasekey);
	console.log(String(seed));
	console.log(phrasekey + String(seed));
}

/*var holdinginput = { 
	
	weight : {
		amount: 0,
		type: "",
		measurement: 0
	},
	
	distance : {
		amount: 0,
		type: "",
		measurement: 0
	},	
	
	temp : {
		amount: 0,
		type: "",
		measurement: 0
	}
	
};

var holdingoutput = {
	
	weight : {
		amount: 0,
		type: "",
		measurement: 0
	},
	
	distance : {
		amount: 0,
		type: "",
		measurement: 0
	},	
	
	temp : {
		amount: 0,
		type: "",
		measurement: 0
	}
	
};

if(holdinginput.weight.measurement === 0) {
	holdinginput.weight.type = document.getElementById("default-input-weight").innerHTML;
	holdinginput.weight.measurement = document.getElementById("default-input-weight").getAttribute("data-weight");
	document.getElementById("type-of-selection-input-weight").innerHTML = holdinginput.weight.type;
	
	holdinginput.distance.type = document.getElementById("default-input-distance").innerHTML;
	holdinginput.distance.measurement = document.getElementById("default-input-distance").getAttribute("data-weight");
	document.getElementById("type-of-selection-input-distance").innerHTML = holdinginput.distance.type;
	
	holdinginput.temp.type = document.getElementById("default-input-temp").innerHTML;
	holdinginput.temp.measurement = document.getElementById("default-input-temp").getAttribute("data-weight");
	document.getElementById("type-of-selection-input-temp").innerHTML = holdinginput.temp.type;
}

if(holdingoutput.weight.measurement === 0) {
	holdingoutput.weight.type = document.getElementById("default-output-weight").innerHTML;
	holdingoutput.weight.measurement = document.getElementById("default-output-weight").getAttribute("data-weight");
	document.getElementById("type-of-selection-output-weight").innerHTML = holdingoutput.weight.type;
	
	holdingoutput.distance.type = document.getElementById("default-output-distance").innerHTML;
	holdingoutput.distance.measurement = document.getElementById("default-output-distance").getAttribute("data-weight");
	document.getElementById("type-of-selection-output-distance").innerHTML = holdingoutput.distance.type;
	
	holdingoutput.temp.type = document.getElementById("default-output-temp").innerHTML;
	holdingoutput.temp.measurement = document.getElementById("default-output-temp").getAttribute("data-weight");
	document.getElementById("type-of-selection-output-temp").innerHTML = holdingoutput.temp.type;
}

(function (angular) {
	
var fieldselection;
var app = angular.module('app', []);

app.controller('MeasurementConvertor', function ($scope, $element) {
	
	$scope.setUnit = function(e) {
		fieldselection = e;
	};
	
	$scope.calculateMeasurement = {
	
		input: {
			weight : {
				amount: holdinginput.weight.amount,
				type: holdinginput.weight.type,
				measurement: holdinginput.weight.measurement
			},
			
			distance : {
				amount: holdinginput.distance.amount,
				type: holdinginput.distance.type,
				measurement: holdinginput.distance.measurement
			},	
			
			temp : {
				amount: holdinginput.temp.amount,
				type: holdinginput.temp.type,
				measurement: holdinginput.temp.measurement
			}
		},	
		
		output: {
			weight : {
				amount: holdingoutput.weight.amount,
				type: holdingoutput.weight.type,
				measurement: holdingoutput.weight.measurement
			},
			
			distance : {
				amount: holdingoutput.distance.amount,
				type: holdingoutput.distance.type,
				measurement: holdingoutput.distance.measurement
			},	
			
			temp : {
				amount: holdingoutput.temp.amount,
				type: holdingoutput.temp.type,
				measurement: holdingoutput.temp.measurement
			}
		},
		
		calculateMeasurementChange: function(e, metric) {
			this.input[metric].amount = e;
			this.output[metric].amount = Math.round(Math.sqrt(Math.pow((this.input[metric].amount / this.input[metric].measurement) * (this.output[metric].measurement), 2)) * 100000) / 100000;
			
			holdinginput[metric] = this.input[metric];
			holdingoutput[metric] = this.output[metric];
		},
		
		setMeasurementType: function(e, metric) {
			if(!fieldselection) {
				holdinginput[metric].measurement = e.target.dataset.weight;
				holdinginput[metric].type = e.currentTarget.innerHTML;
				
				document.getElementById("type-of-selection-input-"+metric).innerHTML = holdinginput[metric].type;
				document.getElementById("outputfield-"+metric).value = clickOutput(holdinginput[metric], holdingoutput[metric], fieldselection);
				
			} else {				
				holdingoutput[metric].measurement = e.target.dataset.weight;
				holdingoutput[metric].type = e.currentTarget.innerHTML;
				
				document.getElementById("type-of-selection-output-"+metric).innerHTML = holdingoutput[metric].type;
				document.getElementById("outputfield-"+metric).value = clickOutput(holdinginput[metric], holdingoutput[metric], fieldselection);
			}
		}
	};
}); 		
		
}(angular));

function clickOutput(input, output, type) {
	if(!type) {
		output.amount = Math.round(Math.sqrt(Math.pow((input.amount / input.measurement) * (output.measurement), 2)) * 100000) / 100000;
		return output.amount;
		
	} else {
		output.amount = Math.round(Math.sqrt(Math.pow((input.amount / input.measurement) * (output.measurement), 2)) * 100000) / 100000;
		return output.amount;
	}
}*/