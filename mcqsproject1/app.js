// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, ref, onChildAdded } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkarPcPqUUQ-2z5Gc4dfotyS9gOlsbQlM",
  authDomain: "mcqs-app-tufail.firebaseapp.com",
  projectId: "mcqs-app-tufail",
  storageBucket: "mcqs-app-tufail.appspot.com",
  messagingSenderId: "865585763375",
  appId: "1:865585763375:web:55c23ec1737a0a69dba2da",
  measurementId: "G-45Y3VPJMQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase()

var laoder = document.getElementById("loader")
var showQuestion = getElementById("showQuestion")

function getDataFromDatabase(){

  laoder.style.display ='block'
  showQuestion.style.display ='none'

  const reference = ref(db,'questions/')
  onChildAdded(reference,function(data){
    console.log(data.val())
    questions.push(data.val())
    renderQuestion()
    laoder.style.display ='none'
    showQuestion.style.display ='block'

  })
}
getDataFromDatabase()











var questions = []
  


  var currentQuestion = document.getElementById('currentQuestion')
  var totalQuestion = document.getElementById('totalQuestion')
  var question = document.getElementById('question')
  var answerParent = document.getElementById('answerParent')

  var indexNum = 0
  var score = 0

  


  
  window.checkQuestion = function(a,b){
    if(a == b){
      score++
      console.log(score)
    }
    netQuestion()
  }

  window.netQuestion = function() {
    if(indexNum + 1 == question.length){
alert('your score is ' + score)
    }else{
      indexNum++  
      renderQuestion()
    
    }
    
  }


  function renderQuestion(){

    currentQuestion.innerHTML = indexNum + 1
    totalQuestion.innerHTML = questions.length

    var obj = questions[indexNum];

    question.innerHTML = obj.question
    answerParent.innerHTML = '';

    for(var i = 0;i < obj.options.length; i++){
      answerParent.innerHTML += `<div class="col-md-4">
      <div>
      <button onclick="checkQuestion('${obj.options[i]}','${obj.correctAnswer}')" class="btn btn-primary fs-3 rounded-pill w-100 mt-3 shadow">
          ${obj.options[i]} 
      </button>
  </div></div>`
    }
  } 
  renderQuestion()

