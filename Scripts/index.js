// Question Class

function Question(questiontext, choices, answer) {
    this.questiontext = questiontext;
    this.choices = choices;
    this.answer = answer;
}
Question.prototype.isCorrectanswer = function (choice) {
    return this.answer === choice;

}

//Quiz Class

function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0;
}
Quiz.prototype.getCurrentQuestion = function () {
    return this.questions[this.questionIndex];
}
Quiz.prototype.checkOption = function (choice) {

    if (this.getCurrentQuestion().isCorrectanswer(choice)) {
        this.score++;
    }
    this.questionIndex++;
    LoadQuestion();
}
function getChoice(choiceid) {
    var choice = document.getElementById("choice" + choiceid);
    var answer = choice.innerText;
    quiz.checkOption(answer);
}
Quiz.prototype.done = function () {
    return this.questionIndex === Questions.length;
}

//Load Question
function LoadQuestion() {
    if (quiz.done()) {
        showResult();
    }

    const questionEl = document.getElementById("question");
    questionEl.textContent = quiz.getCurrentQuestion().questiontext;

    for (i = 0; i < quiz.getCurrentQuestion().choices.length; i++) {
        var choice = document.getElementById("choice" + i);
        choice.textContent = quiz.getCurrentQuestion().choices[i];
    }
    var footernote = document.getElementById("progress");
    var questionnumber = quiz.questionIndex + 1;
    footernote.textContent = "Question " + questionnumber + " of " + quiz.questions.length;

}

function showResult() {
    var percentage = (quiz.score/quiz.questions.length)* 100;
    document.getElementById("quiz").innerHTML = `<div id="Score">
   <h1>Result</h1>
   <h2>You Scored ${quiz.score}</h2>
   <h4> You Answered ${percentage}% of questions correctly </h4></div>`
}
const Questions = [
    new Question("JavaScript supports..", ["Functions", "XHTML", "CSS", "HTML"], "Functions"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery", "Django", "NodeJS"], "Django"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("JavaScript is a..", ["Language", "Programming Language", "Development", "All"], "Programming Language")
];

var quiz = new Quiz(Questions);
LoadQuestion();