// When to use type annotations
// 1) Function that return the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json)
console.log(coordinates); // {x: 10, y: 20});

// 2) When we declare a variable on one line
//  and initializate it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

// A ideia é retornar verdadeiro para foundWord quando uma
// palavra for encontrada dentro do array words.

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'green') {
        foundWord = true;
        console.log(foundWord);
    }
}