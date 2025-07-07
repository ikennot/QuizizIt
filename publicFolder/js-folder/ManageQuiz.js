import { subjectList,deleteQuiz } from "./Quiz-data.js";

function generateManageTables(){
let html = ''

subjectList.forEach((subject)=>{
html += `<div class="${subject.subjectCategory}QuizContainer flex  flex-col  p-8 items-center gap-3">
      <img src="./assets/subject-icon/${subject.subjectCategory}.png" class="sm:w-[100px] sm:h-[100px] w-[50px] h-[50px]">
      <p class="text-[10px] sm:text-3xl font-bold">${subject.category}</p>
      <p class="text-[10px] sm:text-[15px]">${subject.items} Items</p>
      <button class="button bg-red-500 delete-button" data-category ="${subject.category}"><img src="./assets/icons/delete.png" class="w-[20px] h-[20px]">Delete</button>
    </div>
    `
})


    document.querySelector('.quiz-grid-container').innerHTML = html;
   
    document.querySelectorAll('.delete-button').forEach((button)=>{

    button.addEventListener('click',()=>{
      const {category} = button.dataset;
      deleteQuiz(category);
      generateManageTables();
    
    })

   
})
}

generateManageTables();