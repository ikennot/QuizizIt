import { subjectList,subjectCategoryList } from "./Quiz-data.js"
let categoryHTML = ``;
let questionIndex = 0;  
let choose = localStorage.getItem("choose");
let subjectQuestion;
for(let i = 0; i < subjectList.length; i++){

   if(subjectList[i].category === choose)
   {
      subjectQuestion = subjectList[i];
   }
}

document.querySelector('.subject-name').value = subjectQuestion.category;

const category = subjectQuestion.subjectCategory;
subjectCategoryList.forEach((subject)=>{
  const isSelected = (category === subject.value) ?  `selected` : '';
  categoryHTML+=`<option value="${subject.value}" ${isSelected}>${subject.showValue}</option>`

})

document.querySelector('.choose-option').innerHTML = categoryHTML;
 function generateOptionValue(i){
   const option1 = document.querySelector('.option1');
   option1.value = `${subjectQuestion.questionList[i][0]}`
   const option2 = document.querySelector('.option2');
   option2.value = `${subjectQuestion.questionList[i][1]}`
   const option3 = document.querySelector('.option3');
   option3.value = `${subjectQuestion.questionList[i][2]}`
   const option4 = document.querySelector('.option3');
   option4.value = `${subjectQuestion.questionList[i][3]}`
 }
function generateUpdate(){
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
generateOptionValue(0)
}
generateUpdate();