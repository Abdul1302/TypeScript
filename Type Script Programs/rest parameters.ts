//Named function with Rest parameters
function builtName(firstName: string, ...restOfName: string[]) {
	return firstName + " " + restOfName.join(" ");
}

var employeeName = buildName("Muhammad", "Abdul");




//anonymous function with Rest parameters
var buildNameFun: (fname: string, ...rest: string[])=>string =
function (firstName: string, ...restOfName: string[]) {
	return firstName + " " + restOfName.join(" ");
}