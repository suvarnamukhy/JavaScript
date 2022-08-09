/*var firstWord = "Deepak";
var secondWord = "Aman";
isAnagram(firstWord, secondWord); // true
function isAnagram(one, two) {
//Change both words to lowercase for case insensitivity..
let a = one.toLowerCase();
let b = two.toLowerCase();
// Sort the strings, then combine the array to a string. Examine the outcomes.
a = a.split("").sort().join("");
b = b.split("").sort().join("");
return a === b;
}*/



function rotateRight(arr,rotations){
    if(rotations == 0) return arr;
    for(let i = 0; i < rotations;i++){
    let element = arr.pop();
    arr.unshift(element);
    }
    return arr;
    }
    rotateRight([2, 3, 4, 5, 7], 3); // Return [4,5,7,2,3]
    rotateRight([44, 1, 22, 111], 5); // Returns [111,44,1,22]