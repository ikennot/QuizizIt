import { saveLocalStorage,subjectList } from "./Quiz-data.js";
let questionIndex = 0;  
 
    let subjectCategory = '';
    let category= ``;
    let  items = 1;
    let questionList = [] 

function addQuestion(ans){
   const question = document.querySelector('.getQuestion').value;
     const O1 = document.querySelector('.option1').value;
     const O2 = document.querySelector('.option2').value;
     const O3 = document.querySelector('.option3').value;
     const O4 = document.querySelector('.option4').value;
      questionList.push(
       {
       question,
       ans,
       options : [O1,O2,O3,O4]
       }
    )
  console.log(questionList);
}
function CreateQuestion(){
  let ans = '';
document.querySelector('.QuestionContainer-js').innerHTML = `
<p class="text-2xl font-bold">Question ${++questionIndex}</p>
 <input type="text" placeholder="Enter Question" class="bg-white text-black p-1.5 sm:p-2.5 sm:w-[400px] getQuestion">
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
    let num = 1;
    document.querySelectorAll('.chooseAnswerButton').forEach((removebutton)=>{
      const remove = removebutton.dataset.choose;
    
      if(choose !== remove){
        removebutton.classList.remove('bg-red-500'); 
      }else{
        ans = document.querySelector(`.option${num}`).value;
      }

      num++;
    })

  })
 })

 const nextButton = document.querySelector('.button-next');
 nextButton.addEventListener('click',()=>{

   addQuestion();
  ++items;
  CreateQuestion();
 })

 const doneButton = document.querySelector('.button-done');
 doneButton.addEventListener('click',()=>{
  //  window.location.href ="./MainMenu.html";
  addQuestion(ans);
   category = document.querySelector('.subject-name').value;
   subjectCategory = document.querySelector('.subject-category').value;
 
   subjectList.push({
    subjectCategory,
    category,
    items,
    questionList
   })
  
   console.log(subjectList)
 })
}

CreateQuestion();
