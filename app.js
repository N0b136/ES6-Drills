let favMovie = (movie = "The Room", name = "World") => console.log(`My name is ${name}, and ${movie} is my favorite movie.`);

favMovie();

let getFirstName = fullname => {
    return fullname.split(' ', 1);
};

let getFN = fullname => fullname.split(' ', 1);

let name1 = getFirstName('Elenor Rigby');
let name2 = getFN('Ryan McCoy');

console.log(name1);
console.log(name2);

let maths = (x,y) => ({
    exponent: (x^y),
    Product: (x*y)
})
let nums = maths(4,89);
console.log(`The product of the numbers is ${nums.Product}, and the exponent is ${nums.exponent}`);

let bio = (name, location, favFood) => {
    console.log(name);
    console.log(location);
    console.log(favFood);
}

let myArray = ['Ryan', 'Camp Dodge', 'Sushi'];
bio(...myArray);

let myName = 'Ryan McCoy';

let newFunc = (n) => {
    let string = [...n];
    for (const i of n) {
        console.log(i);
    }
}

newFunc(myName);