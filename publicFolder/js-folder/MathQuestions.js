
import { questionList } from "./Quiz-data.js";
let html =  '';
let i = 0;
let length = questionList.length-1;
let wrong = document.querySelector('.wrong');
let correct = document.querySelector('.correct');
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
      
      if(answer === questionList[i].ans && i < length){
         correct.play();
        html = '';
        questionnare(++i);
      }else if(answer ==! questionList[i].ans && i < length)
        {
            wrong.play();
            html = '';
            questionnare(i);
        }else{
            window.location.href = `./MainMenu.html`
        }
   })
})

}

questionnare(i);