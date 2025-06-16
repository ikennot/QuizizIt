let objectQuestion = {
    question : "1+1?",
    ans : "2",
    options : [
        "3",
        "2",
        "1",
        "0"
    ]
}
let html ='';
function showOptions(){
   
    objectQuestion.options.forEach((option)=>{
        html+=` <button class="flex justify-center items-center bg-blue-300 cursor-pointer" id="option-js" "data-answer="${option}">${option}</button>`
    })
}
  
showOptions();

document.querySelectorAll('#option-js').forEach
document.querySelector('#question-container').innerHTML = `
  <p class="text-base">${objectQuestion.question}</p>
  <div class="grid grid-cols-2 m-2 gap-2">
   ${html}
   </div>


`;