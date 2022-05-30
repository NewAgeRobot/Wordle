//wordsArr is name of array of words

let randomNumber = Math.floor(Math.random() * wordsArr.length)

let todaysWord = wordsArr[randomNumber]
let rowOne = [];


console.log(todaysWord)

let chosenWordArr = [...todaysWord];
console.log(chosenWordArr);

document.addEventListener('keypress', checkKey);

function checkKey(e) {
  e.preventDefault();
  if(e.code.slice(0,3) == "Key"){
    addLetter(e.code.slice(3));
  }
}

function addLetter(letter){
  if(rowOne.length < 5){
    rowOne.push(letter);
    console.log(rowOne);
  }
}