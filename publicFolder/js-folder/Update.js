import { subjectList,subjectCategoryList } from "./Quiz-data.js"
import { isAllFilledUp,isSubAndCategoryFilledUp } from "./QuizCreation.js";
let categoryHTML = ``;
let questionIndex = 0;  
let choose = localStorage.getItem("choose");
let subjectQuestion;
 let ans = '';
for(let i = 0; i < subjectList.length; i++){

   if(subjectList[i].category === choose)
   {
      subjectQuestion = subjectList[i];
   }
}

const subjectItems = subjectQuestion.items;

document.querySelector('.subject-name').value = subjectQuestion.category;

const category = subjectQuestion.subjectCategory;
subjectCategoryList.forEach((subject)=>{
  const isSelected = (category === subject.value) ?  `selected` : '';
  categoryHTML+=`<option value="${subject.value}" ${isSelected}>${subject.showValue}</option>`

})
 
document.querySelector('.choose-option').innerHTML = categoryHTML;


//for getting questions and dynamically type it
 function generateQuestionsValue(i){
  document.querySelector('.getQuestion').value = subjectQuestion.questionList[i].question
   const option1 = document.querySelector('.option1');
   option1.value = `${subjectQuestion.questionList[i].options[0]}`
   const option2 = document.querySelector('.option2');
   option2.value = `${subjectQuestion.questionList[i].options[1]}`
   const option3 = document.querySelector('.option3');
   option3.value = `${subjectQuestion.questionList[i].options[2]}`
   const option4 = document.querySelector('.option4');
   option4.value = `${subjectQuestion.questionList[i].options[3]}`

 let num = 1;
 document.querySelectorAll('.chooseAnswerButton').forEach((button)=>{
   
  
  let answer = (document.querySelector(`.option${num}`).value).toString();
   console.log(answer)
    
      if(answer === subjectQuestion.questionList[i].ans)
      {
       const choose = document.querySelector(`.class${num}`);
        choose.classList.add('bg-red-500');
      }else{
        num++;
      }
   })
 }

function updateQuestion(ans){
   const question = document.querySelector('.getQuestion').value;
     const O1 = document.querySelector('.option1').value;
     const O2 = document.querySelector('.option2').value;
     const O3 = document.querySelector('.option3').value;
     const O4 = document.querySelector('.option4').value;
       
  
     
      questionList[questionIndex] = (
       {
       question,
       ans,
       options : [O1,O2,O3,O4]
       }
    )
  
}

//generating question to be update
function generateUpdate(){
    document.querySelector('.QuestionContainer-js').innerHTML = `
<p class="text-2xl font-bold">Question ${++questionIndex}</p>
 <input type="text" placeholder="Enter Question" class="bg-white text-black p-1.5 sm:p-2.5 sm:w-[400px] getQuestion">
  <div class=" flex flex-col items-center gap-1.5">
  <div class="flex flex-row items-center gap-2.5"><input type="text" placeholder="Option 1" class="inputChoice option1"> <button class="chooseAnswerButton class1" data-choose="choose1"></button></div> 
  <div class="flex flex-row items-center gap-2.5"><input type="text" placeholder="Option 2" class="inputChoice option2"> <button class="chooseAnswerButton class2" data-choose="choose2"></button></div> 
  <div class="flex flex-row items-center gap-2.5"><input type="text" placeholder="Option 3" class="inputChoice option3"> <button class="chooseAnswerButton class3" data-choose="choose3"></button></div> 
  <div class="flex flex-row items-center gap-2.5"><input type="text" placeholder="Option 4" class="inputChoice option4"> <button class="chooseAnswerButton class4" data-choose="choose4"></button></div> 
  </div>
  <div class="flex flex-row items-center gap-3">
    <button class="button button-done">Done</button>
    <button class="button button-next">Next Question</button>
  </div>
`
//for choosing answer
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
        console.log(ans)
      }

      num++;
    })

  })
 })


//next button
 const nextButton = document.querySelector('.button-next');
 nextButton.addEventListener('click',()=>{
    const isFillAll = isAllFilledUp();
   if(isFillAll){
   updateQuestion(ans);
  ++items;
  ++questionIndex;
  generateUpdate();
   }else
   alert('Please Complete Question form');
 })

const O1 = document.querySelector('.option1').value='tae';
console.log(O1)

 //condition if the update question is in current or new
if(questionIndex < subjectItems)
generateQuestionsValue(questionIndex);


}



generateUpdate();

