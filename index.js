var readlineSync = require('readline-sync')
var chalk = require('chalk')
console.log(chalk.bold('Hey! This is D. Hope you are having a great day'))

//function[-.-.-.]
var score = 0;
function play( question ,answer){
  var userAnswer = readlineSync.question(chalk.bold.white(question));

  if (userAnswer === answer){
    console.log(chalk.bold.green('You are right! '))
     score = score +1;
    console.log(chalk.bold.green( 'you scored ' + score))
  }
  else{
    score = score -1
    console.log(chalk.bold.red('oops!You are wrong.Better luck next time'))
    console.log(chalk.bold.red( 'you scored ' + score))
  }
  return '------'
 

}


 
 var userName= readlineSync.question('May I have your name? ');

 console.log(chalk.bgBlue('Hi! ' + userName + ' welcome. ' + ('Try to type the answers in lower-case.') ))
 console.log(chalk.bold.red.bgWhite('Watch out for spellings and avoid abbreviations'))

 var welcomeMessage = readlineSync.question('Do you know me? ');
 var answerZero = ('yes')
 if(welcomeMessage === answerZero){
   console.log(chalk.bold.bgYellow('lets find out how well you know me! '))
   console.log(play('am I older than 20? ', 'no'))
console.log(play('am I taller than 5ft.? ' ,'yes'))
console.log(play('Do I Live in Kolkata? ' , 'yes'))
console.log(play('Am I an introvert or an extrovert? ', 'introvert'))
console.log(play('In which month was I born? ' , 'november'))
console.log(play('What is my zodiac? ', 'scorpio'))
console.log(play('What is my nickname? ', 'bony'))
console.log(play('Do I prefer dogs or cats? ', 'dogs'))
console.log(play('Do I like hills or oceans? ', 'hills'))
console.log(play('Do I like tea or coffee? ' , 'coffee'))
console.log(play('Do I like clubs or bars? ', 'bars'))
console.log(play('Do I like maggi or pakodas? ', 'maggi'))
console.log(play('Do I like music or dance? ', 'music'))
console.log(play('Do I like day or night? ', 'night'))
console.log(play('Do I like chemistry very much? ', 'no'))
console.log(play('Do I like deep conversations or shallow talks? ', 'deep conversations'))
console.log(play('Am I more of a call person or a text person? ', 'text person'))
console.log(play('Do I like orange lays or blue lays?', 'orange lays'))
console.log(play('Do I like ice cream or cold drinks? ', 'cold drinks'))
console.log(play('Do i really like to attend all the classes in college or hell no? ', 'hell no'))
console.log(play('Do I like long term relations or short term hook ups? ', 'long term relations'))
console.log(play('Do I like getting called by my first name initial, D? ', 'yes'))
console.log(play('How many love relationships have I had? ', '2'))
console.log(play('Do I like you? ', 'yes'))

console.log(chalk.blue.underline("Wonderful! " + userName + ' You scored a total ' + score))
console.log(chalk.bold.green('I am sure we could be better than that :D'))
console.log(chalk.bold.yellow('Do not forget to send me the screenshot!' ))
 }
 else{
   console.log('oops! Know D,know fun- No D,No fun')
 }
