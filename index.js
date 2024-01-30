const nameInput = document.querySelector(".name-input");
const resultBox = document.querySelector(".result-box");
const questionBox = document.querySelector(".questions");
const submitBtn = document.querySelector(".btn");
const resultBtn = document.querySelector(".result-btn");
let score = 0;
let selectedQuestion = 0;
const quizQuestions = [
  {
    question: "What is the correct syntax to declare an array in JavaScript?",
    choices: [
      "[1, 2, 3]",
      "{1: 'a', 2: 'b', 3: 'c'}",
      "(1, 2, 3)",
      "var arr = new Array(1, 2, 3);",
    ],
    answer: "[1, 2, 3]",
  },
  {
    question: "Which method adds a new element to the end of an array?",
    choices: ["push", "pop", "shift", "concat"],
    answer: "push",
  },
  {
    question:
      "What is the output of the following code: `let arr = [1, 2, 3]; for (let i of arr) console.log(i)",
    choices: ["1, 2, 3", "[1, 2, 3]", "3, 2, 1", "undefined"],
    answer: "1, 2, 3",
  },
  {
    question: "What built-in function sorts an array alphabetically?",
    choices: ["sort()", "order()", "alphabetize()", "sortArray()"],
    answer: "sort()",
  },
  {
    question: "How do you check if an element exists in an array?",
    choices: ["includes()", "contains()", "hasElement()", "in"],
    answer: "includes()",
  },
  {
    question:
      "Which loop is best suited for iterating over the indexes of an array?",
    choices: ["for ... in", "for", "for ... of", "while"],
    answer: "for",
  },
  {
    question:
      "What is the difference between `arr.splice(2, 0, 'a')` and `arr.push('a')`?",
    choices: [
      "Both add 'a' to the end of the array",
      "splice removes elements, push adds",
      "splice inserts at specific index, push adds to the end",
      "There is no difference",
    ],
    answer: "splice inserts at specific index, push adds to the end",
  },
  {
    question: "What is the return value of `Math.max(...[1, 5, 3, 7])`?",
    choices: [
      "Maximum element",
      "Array with maximum element",
      "undefined",
      "Syntax error",
    ],
    answer: "Maximum element",
  },
  {
    question: "How do you convert an array into a comma-separated string?",
    choices: ["join()", "toString()", "serialize()", "arrayToString()"],
    answer: "join()",
  },
  {
    question:
      "How do you access the second element of an array with 3 elements?",
    choices: ["[2]", "[1]", "arr[1]", "array.get(2)"],
    answer: "arr[1]",
  },
];

submitBtn.addEventListener("click", () => {
  questionBox.innerHTML = "";
  if (nameInput.value === "") {
    alert("Please enter your name");
    return;
  }

  quizQuestions.forEach((question, index) => {
    const questionElement = document.createElement("div");
    questionElement.classList.add("question");

    const questionText = document.createElement("h1");
    questionText.textContent = `${index + 1}. ${question.question}`;
    questionElement.appendChild(questionText);

    const choicesElement = document.createElement("ol");
    choicesElement.classList.add("choices");

    let allowSelect = true;
    choicesElement.addEventListener("click", () => {
      if (allowSelect) {
        selectedQuestion++;
        allowSelect = false;
        console.log("Selected");
        console.log(selectedQuestion);
      }
    });

    question.choices.forEach((choice) => {
      const choiceElement = document.createElement("li");

      choiceElement.textContent = choice;

      let isOptionSelected = false;
      choiceElement.addEventListener("click", () => {
        if (!isOptionSelected) {
          if (choice === question.answer) {
            choiceElement.style.color = "green";
            console.log("Disabled");
            score++;
          } else {
            choiceElement.style.color = "red";
          }
          isOptionSelected = true;
        }
      });

      choicesElement.appendChild(choiceElement);
    });

    questionElement.appendChild(choicesElement);

    questionBox.appendChild(questionElement);
  });
});

resultBtn.addEventListener("click", () => {
  if(selectedQuestion<10){
    alert("Answer the All Questions")
    return;
  }
  resultBox.innerHTML = "";
  const resultText = document.createElement("h1");
  resultText.classList.add('ResultAdd');
  resultText.textContent = `${nameInput.value} score is ${score} out of ${quizQuestions.length} `;
  resultBox.appendChild(resultText);
});
