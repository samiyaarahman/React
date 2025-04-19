//scopes

function scopeDemo (){
    var favoriteFood="pizza";
    const favoriteDrink="soda";

    console.log(favoriteFood)
    console.log(favoriteDrink)

  }

  //scope demo
  var favoriteFood="Burger"
console.log(favoriteFood)


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Squared
const map = array.map((x) => x ** 2);
console.log(map);


//Filtered
function isEven(array) {
for (let i = 1; array> i; i++) {
  if (array % 2 === 0) {
    return true;
  }
}
}
console.log(array.filter(isEven));

//filter2
function isEven(array){
return array%2===0
}
const evenNumbers = array.filter(isEven)
console.log(evenNumbers)


//reduce

function sumNumbers(acc, current){
return acc + current
}
const total = array. reduce(sumNumbers)
console.log(total)
