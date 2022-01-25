
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
      }

      
const gifts = ["teddy bear", "drone", "doll"];     
function wrapGifts(gifts) {
  for (let i = 0; i <gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  debugger;
  }
  return gifts;
}
wrapGifts(gifts);

const names = ["Lucas", "Phil", "Janice"];
function writeCards(names, event) {
  let message = [];
  for (let i = 0; i < names.length; i++) {
  message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
}
return message;
}
//console.log(writeCards(["Lucas", "Phil", "Janice"], "surprise"));

function countDown(num) {
  while (num >= 0) {
  console.log(num);
  num--;
}
}
console.log(countDown(10));