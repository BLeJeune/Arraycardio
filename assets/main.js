// 1. Create an array - with a name that makes sense - that contains the following items: English, History, Science, PE, Math, Computer Science, World Language. Write a second statement that logs this array to the console.
const subjects = [`English`, `History`, `Science`, `PE`, `Math`, `Computer Science`, `World Language`];
console.log(subjects);
// 2. Using an array method, add an item to the end of the array for Fine Arts. Log the updated array to the console.
// Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
subjects.push(`Fine Arts`);
console.log(subjects);
// 3. Using an array sorting method, arrange the array in alphabetical order and log it to the console.
// Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
subjects.sort()
console.log(subjects);
// 4. Using bracket notation, output a statement to the console that says something like, `My favorite class is ___________!`
subjects[2];
console.log(`My favorite class is ${subjects[2]}!`);
// 5. Using an array method, output a statement to the console that lets a user know what the first three classes are.
// Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
subjects[0];
subjects[1];
subjects[2];
console.log(`The first three subjects are ${subjects[0]}, ${subjects[1]}, and ${subjects[2]}.`);
// 6. Using an array method, remove the last class from the array and set it equal to a new variable. Then, log the updated version to the console.
// Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
subjects.pop(subjects[7]);
const subjects2 = `World Language`;
console.log(subjects);
// 7. Using an array method, add the removed class back and print the updated version to the console.
subjects.push(`World Language`);
console.log(subjects);
// 8. Using dot notation, write a statement that outputs a sentence saying how many items are in the array.
// Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
console.log(`There are ${subjects.length} classes on the list.`)
var grades = [89, 91, 78, 98, 82, 83, 98, 100]; // Use this array for the remaining questions

// 9. Using bracket notation, construct a statement that is true comparing two values in the array using the `==` operators.
console.log(`${grades[3]} == ${grades[6]}.`);
// 10. Using bracket notation, construct a statement that is false comparing two values in the array using the `>=` operators.
console.log(`${grades[3]} >= ${grades[2]}.`);
