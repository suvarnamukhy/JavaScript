/*let firstName = 'chinnu';
console.log(typeof firstName);

let n = 123;
console.log(typeof n);
 let s = true;
 console.log(typeof s );

 let lastName = new String('chinnu');
 console.log (lastName instanceof String);*/

/* let num = new Number (123);
 console.log(num instanceof Number);*/

 //console.log( five * 2);


 /*var lastName = 'Micah';
var x = 0;
switch (lastName) {
	case 'Micah' : x = 10;
	case 'Rozy'  :x = 20;
	default: x = 30;
}
console.log(x);*/

/****

var a = 20;
for (var i = 1; i <= a; i += 2)
{
 	console.log(i);
if ( i == 11)
break;
}

function subtract (a, b, difference) {
	difference = a-b;
}

let diff = 0;
subtract (10, 4, diff)
console.log(diff)
***/

/*
function multiply (a, b) {
	product = a * b;
}
let product = 0;
multiply (10, 4);
console.log(product);*/

let defaults = 
                  { ignore: true,
                    color: 'red',
                    speed: 'fast' 
};


 const config =
                  { ignore: false, 
                  speed: 'slow' };

let result;
for(result in config){
console.log(config[result]);
}
console.log(result+defaults[1]);


/*let result= Object.assign({}, defaults, config);

console.log(result);*/









 
