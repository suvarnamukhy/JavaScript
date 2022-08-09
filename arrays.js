let numbers = [1,2,3,4,5];
console.log(numbers);

let fruits = ['apple','banana','mango'];
console.log(fruits);

let phone = new Array('android', 'ios','apple');
console.log(phone);
console.log(phone[1]);
console.log(phone[0]);
phone[2]='version';
console.log(phone);

fruits.push('cherry');
console.log(fruits);
console.log(fruits.length);

let x;
for(x in phone){
    console.log(phone[x]) ;
}

for(x of phone){
    console.log(x) ;
}