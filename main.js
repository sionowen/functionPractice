$(document).on('ready', function() {
  
});
var tripleFive = function(){
	for (var i = 0;i < 3; ++i){
		console.log("high five son");
	}
};
tripleFive();

var lastLetter = function(string){
	var letterSelector = string.length - 1;
	console.log(string[letterSelector]);
};
lastLetter("rob");

var square = function(num){
console.log(num * num);
};
square(9);


var allStates = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
var selectedStates = ['Alaska', 'Minnesota', 'California'];

var stateSelector = function(selectedStates){
	var stateList = selectedStates;
	var stateRemoval = allStates;
	var filterTest = function(string){
		return	(stateList.indexOf(string) != 0);
	};
	var newList = stateRemoval.filter(filterTest);

	return stateList.concat(newList);

};


stateSelector(selectedStates);



//console.log(selectedStates.indexOf('Alaska'));



