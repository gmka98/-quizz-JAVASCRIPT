const readlineSync = require('readline-sync');

console.log("Hello welcome to JS Quiz.")
let username = readlineSync.question("What's your Name? : \n");
console.log('Hello' + username + ", Leeeeeeeeeeet'sss GOOOOOOO");

console.log('Rules & Instructions: ');
console.log('1.', username + ', There are '+ question.lenght + 'Questions about javascript')
console.log('2. You will get 2 points on each Right Answer.');
console.log('3. One Point will be remove from your score if you chose the wrong Answer');
console.log('4. In MCQ based questions you have to type Serial Number / Index Value')

let score = 0;

var QuestionsList = [
    {
        question : "What's DOM mean? ", 
        answer : "Document Objet Model",
    },
    {
        question : "What is JSON?",
        answer : "Javascript Objet Nation"
    }

]

var MCQList =[
    {
        array : [ '1998' , ' 1995', '2004', "I'm too lazy "],
        question : "In which Year Javascript was created?",
        answer : '1995',
    },
    {
        array : ['backend', 'Front-end', 'Both'],
        question : "What type of language is Javascript?",
        answer :'Both'
    },
    {
        array : [ 'Flask' , ' NodeJs', 'PHP', "Dom "],
        question : "Javsascript use whis lanuiad-ge$",
        answer : 'NodeJs',
    },
    
];
 
function quiz(question,answer){
    let userAnswer = readlineSync.question(question);
  
    if(userAnswer.toLowerCase() == answer.toLowerCase()){
      console.log('You are Right.');
      score = score + 2;
    } else{
      console.log('You are Wrong.');
      console.log('The Correct Answer is:',answer);
      score = score - 1;
    }
  
    if(score < 0){
      score = 0;
    }
    console.log(chalk.cyan('Score is: ',score));
  }
  
  function quizMcq(listOfAnswers,question,answer){
    let userAnswer = readlineSync.keyInSelect(listOfAnswers, question);
    console.log('\n');
    if(listOfAnswers[userAnswer] === answer){
      console.log('You are Right.');
      score = score + 2;
    } else{
      console.log('You are Wrong.');
      console.log('The Correct Answer is: ',answer);
      score = score - 1;
    }
  
    if(score < 0){
      score = 0;
    }
    console.log('Score is: ',score);
  }
  
  for(var i = 0;i<QuestionsList.length;i++){
    console.log('\n');
    quiz(QuestionsList[i].question,QuestionsList[i].answer);
    console.log('*******************************');
  }
  
  for(var i = 0;i < mcqList.length; i++){
    console.log('\n');
    quizMcq(MCQList[i].array,MCQList[i].question,MCQList[i].answer);
    console.log('*******************************');
  }
  
  console.log('\n');
  console.log('Congratulations,',username,'your Total Score is: ',score);
  