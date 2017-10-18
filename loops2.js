// Loop Practice #2
// ===========
// Requirements
// ---------
// For each problem below, write a loop that prints the given output. Assume a global array called animals is defined as follows:
// <pre>var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];</pre>
// For example:
// -----------
// <em>Problem:</em>
// <pre>
// rat
// cat
// butterfly
// marmot
// ocelot
// </pre>
// <em>Solution:</em>
// ```javascript
// for(var i=0; i < animals.length; i++) {
//     console.log(animals[i]);
// }
// ```
// Problems:
// ---------
var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
// - <code>rat cat butterfly marmot</code>
// for (var i=0; i < 4; i++) {
//   console.log(animals[i]);
// }


// - <code>rat butterfly ocelot</code>
// for (var i=0; i < animals.length; i += 2) {
//   console.log(animals[i]);
// }

// - <code>ocelot marmot butterfly cat rat</code>
// for (var i = animals.length -1; i >= 0; i--) {
//   console.log(animals[i]);
// }


// - <code>rat cat cat butterfly butterfly marmot marmot ocelot</code>

// ---------First Idea------------
// var slicedAnimals = animals.slice(1,4);
// var ratHolder = animals.slice(0,1);
// var ocelotHolder = animals.slice(4);
// var newAnimalArray = [];
// //
// newAnimalArray.push(ratHolder.toString());
// for (var i=0; i < 3; i++) {
//   for (var k=0; k < 2; k++) {
//     newAnimalArray.push(slicedAnimals[i]);
//   }
// }
// newAnimalArray.push(ocelotHolder.toString());
// for (var i = 0; i < newAnimalArray.length; i++) {
//   console.log(newAnimalArray[i]);
// }
//----------Better Idea----------------
console.log(animals[0]);
for (var i=0; i < animals.length; i++) {
  if (i > 0 && i < 4) {
    for (var k = 0; k < 2; k++)
    console.log(animals[i]);
  }
}
console.log(animals[4]);
