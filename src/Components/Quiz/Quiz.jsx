import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Quiz = () => {
  const navigate = useNavigate();
  localStorage.clear();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correct, setCorrect] = useState(0);
  // var correct = 0;
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  // const arr= new Array(6);
  const [arr, setArr] = useState(new Array(6).fill(null));

  const handleAnswer = (optionIndex, qindex) => {
    // const correct;
    // if (optionIndex === selectedOptionInde) {
    //   // setCorrect(0);
    //   return;
    // }
    // // console.log(optionIndex);
    // setSelectedOptionIndex(optionIndex);
    // const option = questions[currentQuestion].options[optionIndex];
    // if (option === questions[currentQuestion].correctAnswer) {
    //   // console.log("before",correct);
    //   // setCorrect((prevCorrect) => prevCorrect + 1);
    //   // console.log("after",correct);
    //   setCorrect(correct + 1);
    //   // correct+=1;
    //   // console.log(correct);
    //   // console.log(optionIndex);
    // }
    // console.log(correct);
    // const newarr= new newarr[6];
    //     newarr[qindex]=optionIndex;
    // arr[qindex] = optionIndex;
    const newArr = [...arr];
    newArr[qindex] = optionIndex;
    setArr(newArr);
  };
  console.log(arr);
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "London", "Rome"],
      correctAnswer: "Paris",
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: ["Harper Lee", "Stephen King", "J.K. Rowling", "Mark Twain"],
      correctAnswer: "Harper Lee",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Jupiter", "Venus", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Vincent van Gogh",
        "Michelangelo",
      ],
      correctAnswer: "Leonardo da Vinci",
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "NaCl", "O2"],
      correctAnswer: "H2O",
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
      correctAnswer: "Blue Whale",
    },
  ];
  const submitQuizHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("quiz", JSON.stringify(arr));
    navigate("/result");
  };

  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center">
      <div className="w-1/2 h-1/2">
        <div>
          <h1>{questions[currentQuestion].question}</h1>
        </div>
        <div className="flex justify-center items-center flex-wrap">
          {questions[currentQuestion].options.map((option, index) => (
            <p
              key={index}
              className={
                "w-72 " + "options"
                // (selectedOptionIndex === index ? " selected" : "")
              }
              onClick={() => handleAnswer(index, currentQuestion)}
            >
              {option}
            </p>
          ))}
        </div>
        {currentQuestion < questions.length - 1 && (
          <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>
            Next
          </button>
        )}
        {currentQuestion > 0 && (
          <button onClick={() => setCurrentQuestion(currentQuestion - 1)}>
            Prev
          </button>
        )}
        <button onClick={submitQuizHandler}>Submit Quiz</button>
      </div>
    </div>
  );
};

export default Quiz;
