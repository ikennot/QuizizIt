let choose = localStorage.getItem("choose");

const mathButton = document.querySelector('.mathButton');
mathButton.addEventListener('click',()=>{
let {category} = mathButton.dataset;
localStorage.setItem("choose",category);
window.location.href = `./Questions.html`
})

const scienceButton = document.querySelector('.scienceButton');
scienceButton.addEventListener('click',()=>{
let {category} = scienceButton.dataset;
localStorage.setItem("choose",category);
window.location.href = `./Questions.html`;
})

const techButton = document.querySelector('.techButton');
techButton.addEventListener('click',()=>{
let {category} = techButton.dataset;
localStorage.setItem("choose",category);
window.location.href = `./Questions.html`;
})


const createQuiz = document.querySelector('.create-quiz-js');
createQuiz.addEventListener('click',()=>{
    window.location.href = './QuizCreation.html';
})
