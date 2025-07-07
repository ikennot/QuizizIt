
export function saveLocalStorage(){
  localStorage.setItem('quiz',JSON.stringify(subjectList));
}

export function deleteQuiz(category){
     let newSubjectList = subjectList;
      subjectList.forEach((subject)=>{
        if(subject.category != category){
            newSubjectList.push(subject);
        }
      }
     
    )
    subjectList = newSubjectList;
    saveLocalStorage();
}
export let subjectList =JSON.parse(localStorage.getItem('quiz')) || [

{ 
  subjectCategory : "academic",
  category : "Math",
  items : 5,
  questionList : [
    {
      question: "1 + 1?",
      ans: "2",
      options: ["3", "2", "1", "0"]
    },
    {
      question: "5 - 3?",
      ans: "2",
      options: ["1", "2", "3", "0"]
    },
    {
      question: "3 x 2?",
      ans: "6",
      options: ["5", "6", "4", "3"]
    },
    {
      question: "8 ÷ 2?",
      ans: "4",
      options: ["2", "3", "4", "5"]
    },
    {
      question: "10 - 7?",
      ans: "3",
      options: ["2", "3", "4", "1"]
    },
    {
      question: "6 + 4?",
      ans: "10",
      options: ["9", "10", "11", "8"]
    },
    {
      question: "9 ÷ 3?",
      ans: "3",
      options: ["2", "3", "4", "1"]
    },
    {
      question: "7 - 5?",
      ans: "2",
      options: ["1", "2", "3", "4"]
    },
    {
      question: "4 x 2?",
      ans: "8",
      options: ["6", "7", "8", "9"]
    },
    {
      question: "12 ÷ 4?",
      ans: "3",
      options: ["2", "3", "4", "5"]
    }
  ],
    items : 10
},

{
  subjectCategory: "academic",
  category: "Science",
  items : 5,
  questionList: [
    {
      question: "What planet is known as the Red Planet?",
      ans: "Mars",
      options: ["Earth", "Venus", "Mars", "Jupiter"]
    },
    {
      question: "What gas do plants absorb from the air?",
      ans: "Carbon Dioxide",
      options: ["Oxygen", "Nitrogen", "Hydrogen", "Carbon Dioxide"]
    },
    {
      question: "What is H2O commonly known as?",
      ans: "Water",
      options: ["Hydrogen", "Water", "Oxygen", "Salt"]
    },
    {
      question: "Which organ pumps blood throughout the body?",
      ans: "Heart",
      options: ["Lungs", "Liver", "Heart", "Brain"]
    },
    {
      question: "How many legs does an insect have?",
      ans: "6",
      options: ["4", "6", "8", "10"]
    }
  ]
 
},

{
    subjectCategory: "academic",
  category: "Tech",
   items : 5,
  questionList: [
    {
      question: "What does HTML stand for?",
      ans: "HyperText Markup Language",
      options: [
        "HyperText Markdown Language",
        "HyperText Markup Language",
        "HyperType Markup Language",
        "Hyperlink and Text Markup Language"
      ]
    },
    {
      question: "Which company created the Android OS?",
      ans: "Google",
      options: ["Microsoft", "Apple", "Google", "Samsung"]
    },
    {
      question: "What does 'CPU' stand for?",
      ans: "Central Processing Unit",
      options: [
        "Central Performance Unit",
        "Central Processing Unit",
        "Computer Processing Unit",
        "Control Processing Unit"
      ]
    },
    {
      question: "Which of the following is a programming language?",
      ans: "Python",
      options: ["Photoshop", "Python", "Excel", "Chrome"]
    },
    {
      question: "What device is used to input text and characters?",
      ans: "Keyboard",
      options: ["Mouse", "Keyboard", "Monitor", "Speaker"]
    }
  ]

}

];
