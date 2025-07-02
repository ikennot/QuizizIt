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
    <input type="text" placeholder="Option 1" class="bg-white text-black p-1.5 sm:p-2.5 option1">
    <input type="text" placeholder="Option 2" class="bg-white text-black p-1.5 sm:p-2.5 option2">
    <input type="text" placeholder="Option 3" class="bg-white text-black p-1.5 sm:p-2.5 option3">
    <input type="text" placeholder="Option 4" class="bg-white text-black p-1.5 sm:p-2.5 option4">
  </div>
  <div class="flex flex-row items-center gap-3">
    <button class="button button-done">Done</button>
    <button class="button button-next">Next Question</button>
  </div>
`
 const nextButton = document.querySelector('.button-next');
 nextButton.addEventListener('click',()=>{
  CreateQuestion();
 })

 const doneButton = document.querySelector('.button-done');
 doneButton.addEventListener('click',()=>{
  
 })
}

CreateQuestion();
