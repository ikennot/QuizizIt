
import { questionList } from "./Quiz-data.js";
let html =  '';
let i = 0;
let length = questionList.length-1;
let wrong = document.querySelector('.wrong');
let correct = document.querySelector('.correct');
let score = 0;

function questionnare(i){
   let questionNum = document.querySelector('.questionNum-js');
   let question = document.querySelector('.question-js');
   let buttonOption = document.querySelector('.button-options-js');

   questionNum.innerHTML = `Question ${i+1}`;
   question.innerHTML = `${questionList[i].question}`;
  
   questionList[i].options.forEach((option)=>{
      html+=`<button class="ansButton ansButton-js" data-answer="${option}">${option}</button>`
   })
   
 
buttonOption.innerHTML = html;
  

document.querySelectorAll('.ansButton-js').forEach((button)=>{
   
   button.addEventListener('click',()=>{
      let {answer} = button.dataset;
      (answer === questionList[i].ans)? (correct.play(), score++) : wrong.play();
      

        if(i < length) {    
        setTimeout(()=>{
           html = '';
          questionnare(++i);
          },1000);
         }else{
            setTimeout(()=>{
         //   window.location.href = `./MainMenu`
         DisplayScore();
          },2000);
           
         }

   })
})
}

function DisplayScore(){
   let mainContainer = document.querySelector('.mainBody');
   mainContainer.innerHTML = `<div class="bg-blue-950 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-2xl flex flex-col items-center justify-center p-5 gap-5">
    <p class=" text-[20px] sm:text-4xl font-bold">Quiz Completed</p>
    <img src="./assets/icons/check.png" class=" h-[50px] w-[50px] sm:h-[150px] sm:w-[150px]">
    <p class="text-[15px] sm:text-3xl">Your Score</p>
    <p class="text-[30px] sm:text-6xl font-bold">${score}/${length+1}</p>
    <button class="button exitButton-js">Exit</button>
  </div>`;

  let button = document.querySelector('.exitButton-js');
}

questionnare(i);