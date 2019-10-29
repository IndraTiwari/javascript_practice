
	var myName = "Indra";
	console.log("myName -->", myName);

	let myValue = true;

	const a = 10;
	if(a >= 10){
		console.log("a is geater than 10");
		console.log(myValue);
	} else {
		console.log("a is smaller than 10");
		console.log(!myValue);
	}

	let  b = 10;
	//if we declare b as const then we can not change its value/ 
	console.log("value of b",b);
	b = 12;
	console.log("value of b",b);
	//once we declare any variable as const we cann't change its value;/ 

 // checking equality
	var val1 = 10;
	var val2 = 20;

	if(val1 === val2){
		console.log(false);
	} else {
		console.log(true);
	}


	// + operator
	var name = "Hello";
	console.log(val1 + val2 + 25 + name + 25);

	// js will resolve the number and then append the string,
	// if the string occurs first then everthing will be treating as a string
	let myVariable = document.querySelector('h3');
  console.log(myVariable);

let myVariable1 = document.querySelector('h5');
  console.log(myVariable1);
//  and if querySelectors doesn't get anything or didn't find anything then it will return null

function addtion(num1, num2){
	return num1 + num2;
}
console.log(addtion(14, "Hello"));

var someValue;
console.log("printing someValue",someValue);  
// this will show undefined because someValue is declared but never defined

someValue = null;
console.log("printing someValue",someValue); 

// everytime when we interact with the web page and event is called like onclick for click anything
document.querySelector('html').onclick = function() {
    alert('you clicked on the page');
}

