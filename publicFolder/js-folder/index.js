import { questionList } from "./Quiz-data.js";
let i = 0;
function questionnare(i){
    let html ='';
  
    let objectQuestion = questionList[i];
  
    objectQuestion.options.forEach((option)=>{
        html+=` <button class="flex justify-center items-center bg-blue-300 cursor-pointer option-js" data-answer="${option}">${option}</button>`
 
    })



document.querySelector('#question-container').innerHTML = `
  <p class="text-base">${objectQuestion.question}</p>
  <div class="grid grid-cols-2 m-2 gap-2">
   ${html}
   </div>


`;

document.querySelectorAll('.option-js').forEach((button)=>{

    button.addEventListener('click',()=>{
     const {answer} = button.dataset;
      if(objectQuestion.ans === answer)
      {
       questionnare(++i);
       console.log('correct');
      }
    })
    
})
}

questionnare(i);
