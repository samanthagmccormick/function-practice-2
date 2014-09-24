$(document).on('ready', function() {
  
// 1

var getName = function(x) {
	return x.name;
};

console.log(  getName({ name: 'Samantha', age: 27 })  );

// 2

var totalLetters = function(str) {
	var newString = str.join('');
	return console.log( newString.length );
};

totalLetters(["hello", "hi"]);

// 3 

var createObject = function(key,value) {
	var obj = {key: value};
	return console.log( obj );
};

createObject('city', 'Denver');

// 4

var negativeIndex = function(arr, num) {
	return arr[arr.length + num];
};

console.log( negativeIndex(['a','b', 'c', 'd', 'e'], -2) );
console.log( negativeIndex(['jerry', 'sarah', 'sally'], -1)  );

// 5 

var removeM = function(str) {
	var newWord = [];

	for (var i = 0; i < str.length; i++) {
		if (str[i] != 'm')
			newWord.push(str[i]);
	}

	return newWord.join("");
	
	
};

console.log( removeM('family') );
console.log( removeM('memory') );


// 6

var object = ({ a: 10, b: 20, c: 30 });

var printObject = function(obj) {
	for (i in object) { 
		console.log(i + ' is ' + object[i]); 
	}
};

printObject(object);

// 7
var word = 'alabama';

var getVowels = function(str) {
	var nonVowels = [];
	var vowels = [];

	for (var i = 0; i < str.length; i++) {
		if (str[i] != 'a' && str[i] != 'e' && str[i] != 'i' && str[i] != 'o' && str[i] != 'u')
			nonVowels.push(str[i]);
		else {
			vowels.push(str[i]);
		}
	}

	return vowels;
	
	
};

console.log( getVowels(word) );

// 8

var twins = function(arr) {
var i = 0;
	while (i < arr.length) {	
		if(arr[i] === arr[i+1]) 
			i = i+2;
		else 
			return false;
	}
	return true;
};


console.log( 'twins: ' + twins(['a', 'a', 'b', 'b', 'c', 'c'])  );
console.log( 'twins: ' + twins(['a', 'a', 'b', 'z']) );


// 9  

var orFunction = function(arr) {
var i = 0;
	while (i < arr.length) {	
		if(arr[i] === true)
			return true;
		else 
			i++;
	}
	return false;
};


console.log( 'or: ' + orFunction([false, false, true, false])   );
console.log( 'or: ' + orFunction([false, false, false])  );
console.log( 'or: ' + orFunction([])  );


// 10

var testArray = ['hello', 'hi', 'hi', 'whatup', 'hi', 'yo', 'yo'];
var testArray2 = ['a', 'b', 'a', 'c', 'd', 'd'];
var newArray = [];

var unique = function(arr) {
	var newArray = [];

	newArray.push(arr[0]);

	for (var i = 1; i < arr.length; i++) {
		// If you search through the array and find only 1 occurance of your current array item
		if (arr.indexOf(arr[i]) === i)
			newArray.push(arr[i]);
	}

return newArray;
};

console.log( unique(testArray)  );
console.log( unique(testArray2)  );
console.log( unique(['todd', 'avery', 'maria', 'avery']) );



});  // end document ready