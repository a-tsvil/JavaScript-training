// Simple example of console based application with infinite loop
// use it as reference to your command-line based wrapper
// readline is node.js moudule awailable in LTS (16.x.x) and latest
const readline = require("readline");
const util = require("util");

// readline initialisation
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// promisifying question function for more convenient usage with async/await 
const question = util.promisify(rl.question).bind(rl);

// game main function with infinite loop
async function mainLoop() {
  // use rl to write message to console (stdout)
  rl.write("Welcome to the Guessing Game!\n");
  rl.write("Try to guess number from 1 to 100.\n");
  rl.write("To exit press ctrl + c.");
  // empty variable for user guess
  let guessedNumber;
  // game is creating random number that user should guess in range from 1 + 100 exactly
  const secretNumber = 1 + Math.round(Math.random() * 99);
  // game main loop which only ends if user would guess the correct number or interrupt program with ctrl + c ofcorse 
  while (true) {
    // reading user guess and parsing to Number via constructor (await is mandatory to promisified call of question)
    guessedNumber = Number(await question('Please, input your guess: '));
    // comparing is users's guess is correct if not just informing user in which way he/she can think in next turn
    if (guessedNumber === secretNumber) {
      rl.write('Yay! You guessed correct number.\n');
      break;
    } else if (guessedNumber > secretNumber) { // user guessed greater number
      rl.write('Number is lesser.\n');
    } else { // at this branch we knew that user guessed lesser number
      rl.write('Number is bigger.\n');
    }
    rl.write('<------Next Turn!------>\n');  // emphasizing that this turn is ended
  }
  return;
}

// mainLoop is async function and its return promise, this is just correct way to handle promise
// calls to .then and .catch isn't mandatory, you can just put lines 48 and 49 right after loop in function at line 41 before 'return;'
mainLoop()
  .then(() => {
    rl.write("Goodbye!");
    process.exit(0);
  })
  .catch(console.error);
