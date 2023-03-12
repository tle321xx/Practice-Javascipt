let userName = ''
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello, Jane!');
const userQuestion = 'yes-no question'
console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

let eightBall = randomNumber;
switch (eightBall) {
  case 0 : eightBall = 'It is certain';
    break;
  case 1 : eightBall = 'It is decidedly so';
    break;
  case 2 : eightBall = 'Reply hazy try again';
    break;
  case 3 : eightBall = 'Cannot predict now';
    break;
  case 4 : eightBall = 'Do not count on it';
    break;
  case 5 : eightBall = 'My sources say no';
    break;
  case 6 : eightBall = 'Outlook not so good';
    break;
  case 7 : eightBall = 'Signs point to yes';
    break;  
}
console.log(eightBall)
if (eightBall = 0) {
  console.log ('It is certain');
} else if (eightBall = 1) {
  console.log ('It is decidedly so');
} else if (eightBall = 2) {
  console.log ('Reply hazy try again');
} else if (eightBall = 3) {
  console.log ('Cannot predict now');
} else if (eightBall = 4) {
  console.log ('Do not count on it');
} else if (eightBall = 5) {
  console.log ('My sources say no');
} else if (eightBall = 6) {
  console.log ('Outlook not so good');
} else if (eightBall = 7) {
  console.log ('Signs point to yes');
} else {
  console.log('invalid number');
}














