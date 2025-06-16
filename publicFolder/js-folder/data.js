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
// function showOptions(){
   
//     objectQuestion.options.forEach((option)=>{
//         html+=`${option}`
//     })
// }

// showOptions();
document.querySelector('#question-container').innerHTML = `
  <p>${objectQuestion.question}</p>
   ${html}
   


`;