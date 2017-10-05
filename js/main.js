var seed = localStorage['userseed'] || localStorage.setItem('userseed', getRandomInt(1000000, 9999999));
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
			
		userPhraseGen: function(e) {
			
			var userPhraseGen = e;
			var phrasekey = "";
			var res = userPhraseGen.split("");
			
			res.forEach(function(element) {
				phrasekey = phrasekey + String(element.charCodeAt(0));
			});
			
			masterkey = "";

			masterkey = Number(phrasekey + String(seed));
			
			var gen = new MersenneTwister(masterkey);
			
			var logicchain = "";
			
			do {
				logicchain = String(gen.next()) + logicchain;
				
			} while (logicchain.length < 63);	
			
			logicchain = logicchain.substring(0,63);
			
			var logicchainarray = logicchain.match(/.{1,3}/g);
			
			logicchainarray.forEach(function(element, i) {
				logicchainarray[i] = String.fromCharCode(calculateAsciiCharacter(Number(element), 33, 126));
			});
						
			var finalpassword = "";
			var chainarray = logicchain.match(/.{1,1}/g);
			
			for(var i = 0; i<this.value; i++) {
				finalpassword += logicchainarray[Number(chainarray[i])];
			}
			
			document.getElementById("user-password-output").value = finalpassword;
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