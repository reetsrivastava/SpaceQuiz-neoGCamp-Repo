const readlineSync = require('readline-sync');
const chalk = require('chalk');
var score = 0;
var i;
var listScore = ["Reet:32", "Sachan:26"];

var userName = readlineSync.question(chalk.bgYellow("Please enter your name : "));
console.log(chalk.green.bold("Hi "+ userName +"!!"));
 
console.log(chalk.bgRed("Let's begin with the Space Quiz"));
console.log("------------------------------------");
function quiz(question,option,answer) {
  console.log(chalk.bgCyan(question));
  
  console.log(chalk.blue(option));
  const userAnswerLower = readlineSync.question("Your Answer:");
  const userAnswer = userAnswerLower.toUpperCase();
  if(userAnswer===answer) {
    console.log(chalk.bgGreen("Right Answer"));
    score=score+4;
  } else {
    console.log(chalk.bgRed("Wrong Answer!"));
    score=score-2;
  }
}

var questions = [
  {ques : "Who is the trainer in neoGCamp?",
  options: "A: Tanay Pratap  B:NeogCamp  C:Abhinav Chikara",
  answer:"A"},
  {ques: "What is the name of India's first satellite?",
  options: "A:Param  B:Aryabhatta  C:Chandrayaan",
  answer:"B"},
  {ques: "Who was the first Indian to go to space?",
  options:"A:Rakesh Sharma  B:Kalpana Chawla  C:Sunita Williams",
  answer:"A"},
  {ques:"Who is the current Chairman of ISRO?",
  options:"A:S. Chandrashekhar B:Ashok Sen  C:K. Sivan",
  answer:"C"},
  {ques:"What is the highest record number for successful placement of satellite into orbit?",
  options:"A:114 B:104 C:108",
  answer:"B"},
  {ques:"What is the name of ISRO's mission to study Sun's outer layer?",
  options:"A:SORs  B:Fermi  C:Aditya-L1",
  answer:"C"},
  {ques:"What is the the Indian name of astronauts going into space from Indian Soil?",
  options:"A:Cosmonauts  B:Vyomnauts  C:Astronauts",
  answer:"B"},
  {ques:"Where is the official launch site of ISRO?",
  options:"A:Thruvananthpuram  B:Shriharikota  C:Bhopal",
  answer:"B"}
];

for(i=0;i<questions.length;i++) {
  console.log(chalk.magenta("Question Number "+(i+1)));
  quiz(questions[i].ques,questions[i].options,questions[i].answer);
  console.log(chalk.yellow("Score : "+score));
  console.log("----------------------------------")
}


console.log(chalk.green("Thanks for playing "+userName));
console.log(chalk.bgRedBright("Your Final Score is: "+score));
console.log("---------------------------");
console.log(chalk.green("HighScores as of Now :"))
for(i=0;i<listScore.length;i++) {
  console.log(chalk.bgCyan(listScore[i]));
}
