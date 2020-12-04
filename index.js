const myQuestions = [
    {
        question: 'Javascript is ______ language.',
        answer: {
            a: 'Programing',
            b: 'Application',
            c: 'None of These',
            d: 'Scripting',
        },
        multi: false,
        correctAnswer: 'd',
    },
    {
        question: 'Javascript is ______ language.',
        answer: {
            a: 'Programing',
            b: 'Application',
            c: 'None of These',
            d: 'Scripting',
        },
        multi: false,
        correctAnswer: 'a',
    }
];

const quiz = document.getElementById('quiz');
const submit = document.getElementById('submit');
const result = document.getElementById('result');
const btnSubmmit = document.getElementById('btnSubmmit');


function showQuiz() {
    const output = [];

    myQuestions.forEach((questions, index) => {
        const answer = [];

        for (currentAnswer in questions.answer) {
            answer.push(
                `<label class="answer">
                <input type="radio" name="question${index}" value="${currentAnswer}">
                ${currentAnswer} :
                ${questions.answer[currentAnswer]}
              </label>`
            );
        }

        output.push(
            `<div class="question"><h3> ${index + 1}. ${questions.question}</h3></div>
            <div class="answers"> ${answer.join('')} </div>`
        );
    });

    quiz.innerHTML = output.join('');
}

function showResult() {
    const answers = quiz.querySelectorAll('.answers');

    const listquestion = quiz.querySelectorAll('.question');

    myQuestions.forEach((questions, index) => {
        listquestion[index].style.color = 'black';
    });

    var point = 0;

    myQuestions.forEach((questions, index) => {
        const answer = answers[index];

        const selector = `input[name=question${index}]:checked`;

        const answerSelect = (answer.querySelector(selector) || {}).value;

        if(answerSelect === questions.correctAnswer) {
            point = point + 1;
            listquestion[index].style.color = 'green';
        } else {
            listquestion[index].style.color = 'red';
        }
    });

    result.innerHTML = `Result: ${point} / ${myQuestions.length}`;
}

showQuiz();

submit.addEventListener('click', showResult);



