let games = ['candy', 'trailrun','pubg'];
console.log(games);

games.pop()
console.log(games);

games.shift()
console.log(games);

games.push('saga')
console.log(games);

games.unshift('templerun')
console.log(games);

delete games[1];
console.log(games);
 
games[1]= 'candycrush';
console.log(games);

games.splice(1,2);
console.log(games);

games.splice(2,0,'runrun','tom');
console.log(games);

let newgame=games.slice(0,2);
console.log(games);
console.log(newgame);

let even=[2,4,6,8];
odd=[1,3,5];
prime=[1,2,3,];
numbers = even.concat ( odd, prime);
console.log(numbers);