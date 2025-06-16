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
        html+=` <div class="flex justify-center items-center bg-blue-300">${option}</div>`
    })
}
  
showOptions();
document.querySelector('#question-container').innerHTML = `
  <p>${objectQuestion.question}</p>
  <div class="grid grid-cols-4 m-4 gap-4">
   ${html}
   </div>


`;