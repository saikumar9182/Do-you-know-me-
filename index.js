var readlineSync= require("readline-sync");
var score=0;

var username=readlineSync.question("What's your name? ");
console.log("Welcome "+username+" Do you know Me?");
console.log("----------------");
console.log("For every right answer you get 1 point. No marks are given for wrong answer.")


function play(question,answer){
  var userAnswer= readlineSync.question(question);

  if(userAnswer==answer)
  {
    console.log("Right!");
    score=score+1;
    console.log("current score:"+score);
    console.log("---------------");
  }
  else{
    console.log("Wrong!");
    console.log("current score:"+score);
    console.log("---------------");

  }
}
var questions=[
  {
    question:"1) Where do I live?",
    answer:"Mahabubnagar"
  },
  {
    question: "2) My favorite superhero wouldbe?",
    answer:"Iron man"
  },
  {
    question: "3) In which year I was born?",
    answer: "1998"
  },
  {
    question: "4) What is my favourite tiffin?",
    answer: "Uggrani"
  },
  {
    question:"5) What is my favourite Author?",
    answer:"Osho"
  },
  {
    question: "6) In which city do I study?",
    answer:"Hyderabad"
  }
  
];
for(var i=0;i<questions.length;i++)
{
  var currentQuestion= questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}

console.log("Your Total score is ",score);
