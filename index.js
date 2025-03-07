// Code your solutions in this file

// Function to return an array of thank you messages for each name provided
function writeCards(names) {
  let messages = [];
  for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
  }
  return messages;
}

// Function to log each number counting down from the number provided to zero
function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}
