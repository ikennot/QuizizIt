import { saveLocalStorage,subjectList } from "./Quiz-data.js";
let questionIndex = 0;  
 
    let subjectCategory = '';
    let category= ``;
    let  items = 1;
     let ans = '';
    let questionList = [] 
  
    //fill up question and ans validation
 export function isAllFilledUp(ans){
    const question = document.querySelector('.getQuestion').value;
     const O1 = document.querySelector('.option1').value;
     const O2 = document.querySelector('.option2').value;
     const O3 = document.querySelector('.option3').value;
     const O4 = document.querySelector('.option4').value;
       console.log('question:', question);
    console.log('O1:', O1);
    console.log('O2:', O2);
    console.log('O3:', O3);
    console.log('O4:', O4);
    console.log('ans:', ans);
     return (question !== '') && (ans !== '') && (O1 !== '') && (O2 !== '') && (O3 !== '') && (O4 !== '');
 }

 //category and subject validation
export function isSubAndCategoryFilledUp(){
  const subname = document.querySelector('.subject-name').value;
  const category = document.querySelector('.subject-category').value;

  return (subname !=='') && (category !== '');
 }

 //pushing question
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
  
}

//for generating questions
function CreateQuestion(){
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
//adding function for choosing answer 
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

 //adding button function for next question
 const nextButton = document.querySelector('.button-next');
 nextButton.addEventListener('click',()=>{
    const isFillAll = isAllFilledUp(ans);
   if(isFillAll){
   addQuestion(ans);
  ++items;
  CreateQuestion();
   }else
   alert('Please Complete Question form');
 })

 //validation for done button
 const doneButton = document.querySelector('.button-done');
 doneButton.addEventListener('click',()=>{
  const isCompleteQuestion = isAllFilledUp();
  const isThereSubAndCat = isSubAndCategoryFilledUp();
  if(!isCompleteQuestion || !isThereSubAndCat)
  {
    alert('Please Fill up all forms');
    return;
  }
  addQuestion(ans);
   category = document.querySelector('.subject-name').value;
   subjectCategory = document.querySelector('.subject-category').value;
   subjectList.push({
    subjectCategory,
    category,
    items,
    questionList
   })
    saveLocalStorage();
     window.location.href ="./MainMenu.html";
 })
}

CreateQuestion();
