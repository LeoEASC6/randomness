//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = "abcdefghijklmnopqrstuvwxyz";
function randomLetter (){
    const len = alphabet.length
    const num = Math.random()* len;
   // console.log("len:", len);
    //console.log("num",num);
    const roundnum = Math.floor(num)
  const final = alphabet[roundnum]
    
  return final

}
console.log(randomLetter());













const foods = [

    "pizza",
"burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
 "baked potatoes"
];
function randomFood() {
const len = foods.length
const food = Math.random()* len;
const roundnum = Math.floor(food)
const final = foods [roundnum]
return final
}
console.log(randomFood());
//const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
"Sean",
"Robert"
//];
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////