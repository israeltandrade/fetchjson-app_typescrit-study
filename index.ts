// When to use type annotations
// 1) Function that return the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json)
console.log(coordinates); // {x: 10, y: 20});

