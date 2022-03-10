//Named Function:
var a = 2;
var b = 3;
var i = addVariables(a, b);

function addVariables(c, k) {
	return (c + k);
}

console.log(addVariables(a, b));
console.log(i);


//Anonymous Function:
var stringA = "me";
var stringB = "ow";
var combineWords = function(me, ow) {
	console.log("Yo")
	return(me + ow);
}

combineWords(stringA, stringB);
var returned = combineWords(stringA, stringB);
console.log(returned);
