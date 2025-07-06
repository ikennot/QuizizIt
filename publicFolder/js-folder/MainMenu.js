import { subjectList } from "./Quiz-data.js";

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

function generateSubjects(){
let html = ''
html += `<div class="MathQuizContainer flex  flex-col  p-8 items-center gap-3">
      <img src="./assets/subject-icon/math.png" class="sm:w-[100px] sm:h-[100px] w-[50px] h-[50px]">
      <p class="text-[10px] sm:text-3xl font-bold">Math Quiz</p>
      <p class="text-[10px] sm:text-[15px]">10 Items</p>
      <button class="button mathButton" data-category ="Math"><img src="./assets/icons/play.png" class="w-[20px] h-[20px]">Take</button>
    </div>
    <div class="ScienceQuizContainer flex  flex-col  p-8 items-center gap-3">
      <img src="./assets/subject-icon/science.png" class="sm:w-[100px] sm:h-[100px] w-[50px] h-[50px]">
      <p class="text-[10px] sm:text-3xl font-bold">Science Quiz</p>
      <p class="text-[10px] sm:text-[15px]">10 Items</p>
      <button class="button scienceButton" data-category ="Science"><img src="./assets/icons/play.png" class="w-[20px] h-[20px]">Take</button>
    </div>
    
     <div class="TechQuizContainer flex  flex-col  p-8 items-center gap-3">
      <img src="./assets/subject-icon/Technology.png" class="sm:w-[100px] sm:h-[100px] w-[50px] h-[50px]">
      <p class="text-[10px] sm:text-3xl font-bold">Technology Quiz</p>
      <p class="text-[10px] sm:text-[15px]">10 Items</p>
      <button class="button techButton" data-category ="Tech"><img src="./assets/icons/play.png" class="w-[20px] h-[20px]">Take</button>
    </div>`
}