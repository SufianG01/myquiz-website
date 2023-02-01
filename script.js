const questions = [
  {
question: 'What is the currency of Denmark?',
answers: [
{ text: 'Euro', correct: false },
  { text: 'Dollar', correct: false },
  { text: 'Krone', correct: true },
  { text: 'Krouna', correct: false }
]
  },
  {
question: 'Australia is wider than the moon',
answers: [
  { text: 'True', correct: true },
  { text: 'False', correct: false },
 
]
  },
  {
question: 'Hippos sweat a red substance',
answers: [
  { text: 'False', correct: false },
  { text: 'True', correct: true },
 
]
  },
  {
question: "'A' is the most common letter used in the English language",
answers: [
  { text: 'False', correct: false },
  { text: 'True', correct: true }
]
  },
   {
question: "'A' is the most common letter used in the English language",
answers: [
  { text: 'False', correct: false },
  { text: 'True', correct: true }
]
  }
]

const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('next-button')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
const button = document.createElement('button')
button.innerText = answer.text
button.classList.add('button')
if (answer.correct) {
  button.dataset.correct = answer.correct
}
button.addEventListener('click', selectAnswer)
answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
nextButton.classList.remove('hide')
  } else {
startButton.innerText = 'Restart'
startButton.classList.remove('hide')
  }
}


function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
element.classList.add('correct')
  } else {
element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

