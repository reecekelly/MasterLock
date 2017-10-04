var seed = localStorage['userseed'] || localStorage.setItem('userseed', getRandomInt(10000, 99999));
//var seed = getRandomInt(10000, 99999);
var value  = 33;

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

(function (angular) {
	
var app = angular.module('app', []);

app.controller('EncryptorController', function ($scope, $element) { 
		
	$scope.Encryptor = {
			
		value: value,
		finalpass: "",
			
		userPhrase: function(e) {
			
			var userphrase = e;
			var phrasekey = "";
			var res = userphrase.split("");
			
			res.forEach(function(element) {
				phrasekey += String(element.charCodeAt(0));
			});
			
			masterkey = Number(String(seed) + phrasekey);
			
			var gen = new MersenneTwister(masterkey);
			
			var logicchain = "";
			
			do {
				logicchain += String(gen.next());
				
			} while (logicchain.length < 63);	
			
			logicchain = logicchain.substring(0,63);
			
			var logicchainarray = logicchain.match(/.{1,3}/g);
			
			logicchainarray.forEach(function(element, i) {
				logicchainarray[i] = String.fromCharCode(calculateAsciiCharacter(Number(element), 33, 126));
			});
			
			var finalpassword = "";
			
			for(var i = 0; i<this.value; i++) {
				var chainarray = logicchain.match(/.{1,1}/g);
				
				finalpassword += logicchainarray[Number(chainarray[i])];
			}
			
			document.getElementById("user-password-output").innerHTML = finalpassword;
		}
	
	};
}); 		
		
}(angular));

function calculateAsciiCharacter(e, lower, upper) {
		
	while(e > upper) {
		e -= (upper - lower);
	}
	
	if(e < lower) {
		var newvalue = upper - (lower - e);
		e = newvalue;
	}
	
	return e;
}