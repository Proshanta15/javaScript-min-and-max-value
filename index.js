
//Min and Max value

const points = [10,1000,1,59.10,120,4,-1,30];

console.log(points.sort(function(a, b){return a - b}));
console.log(points.sort(function(a, b){return b - a}));