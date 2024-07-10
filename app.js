const  question = [{
    'que' : 'which of the following is a markup language',
    'a' : 'html',
    'b' : 'css',
    'c' : 'Javascript',
    'd' : 'php',
    'correct' : 'a'
},
{
    'que' : 'when was javascript launched?',
    'a' : '1996',
    'b' : '1995',
    'c' : '1994',
    'd' : '1997',
    'correct' : 'b'
},
{
    'que' : 'what does css stands for?',
    'a' : 'hypertext markup language',
    'b' : 'cascading stylesheet',
    'c' : 'Jason object notation',
    'd' : 'bla bla bla',
    'correct' : 'b'
}
]
let index = 0;
let total = question.length;
let right = 0;
let wrong = 0;

const quesBox = document.getElementById("quesBox")           //it will access the question area dynamically
const optionInputs = document.querySelectorAll(".options")       //it will access all options by an array oi
const loadQuestion = () => {
    if(index == total){
        return endQuiz()
    }
    reset();
    const data = question[index]
    quesBox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
    
}

const submitQ = () => {
    const data = question[index]
    const ans = getAnswer();
    if(ans === data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion()
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer = input.value
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <h3>thank you for playing the quiz</h3>
    <h2> ${right}/${total} are correct</h2>
    `
}
loadQuestion()