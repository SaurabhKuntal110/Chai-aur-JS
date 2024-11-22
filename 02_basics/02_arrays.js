const marvelHeroes = ["Thor","IronMan","SpiderMan"]
const dcHeroes = ["SuperMan","BatMan","Flash"]

//marvelHeroes.push(dcHeroes) // pass entire array as an element
//console.log(marvelHeroes);

const superHeroes = marvelHeroes.concat(dcHeroes)
//console.log(superHeroes);

const newSuperHeroes = [...marvelHeroes,...dcHeroes];
//console.log(newSuperHeroes);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const usableAnotherArray = anotherArray.flat(Infinity);
//array.flat(depth) is use to resolve the chaining of array within array

//console.log(usableAnotherArray);

//console.log(Array.isArray("Saurabh"));
//console.log(Array.from("Saurabh"));
//console.log(Array.from({name:"Saurabh"})); //intresting we need to tell which part ofobject to be converted in array keys or values otherwise it will return empty array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
