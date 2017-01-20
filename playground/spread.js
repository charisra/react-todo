//function add (a, b) {
//  return a + b;
//}//

//console.log (add(3, 1));//

//var toAdd = [9, 5];
//console.log(add(...toAdd));

//var groupA = ['Mike', 'Sots'];
//var groupB = ['Niks'];
//var final = [...groupB, ...groupA];//

//console.log(final);

var person = ['Andy', 25];
var person2 = ['Jen', 23];

function greet (name, age) {
  console.log('Hi ' + name + ' you are ' + age)
}

greet(...person);
greet(...person2)

var names = ['Mike', 'Ben'];
var final = ['Bob',...names];

for (i=0; i<3; i++ ) {
  console.log('Hi '+ final[i])
};

final.forEach(function (name) {
  console.log('Hi ' + name);
});
