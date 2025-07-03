import { saveLocalStorage,subjectList } from "./Quiz-data.js";
let questionIndex = 0;  


let subject = {
    category: ``,
    items: 0,
    questionList : [] 
}
function CreateQuestion(){
document.querySelector('.QuestionContainer-js').innerHTML = `
<p class="text-2xl font-bold">Question ${++questionIndex}</p>
 <input type="text" placeholder="Enter Question" class="bg-white text-black p-1.5 sm:p-2.5 sm:w-[400px]">
  <div class=" flex flex-col items-center gap-1.5">
  <div class="flex flex-row items-center gap-2.5"><input type="text" placeholder="Option 1" class="inputChoice option1"> <button class="chooseAnswerButton" data-choose="choose1"></button></div> 
  <div class="flex flex-row items-center gap-2.5"><input type="text" placeholder="Option 2" class="inputChoice option2"> <button class="chooseAnswerButton" data-choose="choose2"></button></div> 
  <div class="flex flex-row items-center gap-2.5"><input type="text" placeholder="Option 3" class="inputChoice option3"> <button class="chooseAnswerButton" data-choose="choose3"></button></div> 
  <div class="flex flex-row items-center gap-2.5"><input type="text" placeholder="Option 4" class="inputChoice option4"> <button class="chooseAnswerButton" data-choose="choose4"></button></div> 
  </div>
  <div class="flex flex-row items-center gap-3">
    <button class="button button-done">Done</button>
    <button class="button button-next">Next Question</button>
  </div>
`
 document.querySelectorAll('.chooseAnswerButton').forEach((button)=>{
  button.addEventListener('click',()=>{
    const {choose} = button.dataset;
    button.classList.add('bg-red-500'); 
     
    document.querySelectorAll('.chooseAnswerButton').forEach((buttonRemove)=>{
      const buttonRemove  = button.dataset.choose;
      buttonRemove.forEach((remo))
    })

      
  })
 })

 const nextButton = document.querySelector('.button-next');
 nextButton.addEventListener('click',()=>{

  
  CreateQuestion();
 })

 const doneButton = document.querySelector('.button-done');
 doneButton.addEventListener('click',()=>{
   window.location.href ="./MainMenu.html";
 })
}

CreateQuestion();
