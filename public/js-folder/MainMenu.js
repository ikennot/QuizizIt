import { subjectList } from "./Quiz-data.js";
//main menu
const createquiz = document.querySelector('.create-quiz-js');
createquiz.addEventListener('click',()=>{
  window.location.href='./QuizCreation.html'
})

const managequiz = document.querySelector('.manage-quiz-js');
managequiz.addEventListener('click',()=>{
  window.location.href = './ManageQuiz.html'
})
function generateSubjects(){
let html = ''

subjectList.forEach((subject)=>{
html += `<div class="${subject.subjectCategory}QuizContainer flex  flex-col  p-8 items-center gap-3">
      <img src="./assets/subject-icon/${subject.subjectCategory}.png" class="sm:w-[100px] sm:h-[100px] w-[50px] h-[50px]">
      <p class="text-[10px] sm:text-3xl font-bold">${subject.category}</p>
      <p class="text-[10px] sm:text-[15px]">${subject.items} Items</p>
      <button class="button take-button" data-category ="${subject.category}"><img src="./assets/icons/play.png" class="w-[20px] h-[20px]">Take</button>
    </div>
    `
})


    document.querySelector('.quiz-grid-container').innerHTML = html;
   
    document.querySelectorAll('.take-button').forEach((button)=>{

    button.addEventListener('click',()=>{
      const {category} = button.dataset;
    localStorage.setItem("choose",category);
    window.location.href = `./Questions.html`
    })
})

}

generateSubjects();
console.log(subjectList)
