import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  localStorage.setItem("check", "false");
  console.log(check);
  const navigate = useNavigate();
  localStorage.clear();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [arr, setArr] = useState(new Array(6).fill(null));

  const handleAnswer = (optionIndex, qindex) => {
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
    localStorage.setItem("check", "true");
   console.log(check);
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
              className={"w-72 " + "options"}
              onClick={() => handleAnswer(index, currentQuestion)}
            >
              {option}
            </p>
          ))}
        </div>
        {currentQuestion > 0 && (
          <button onClick={() => setCurrentQuestion(currentQuestion - 1)}>
            Prev
          </button>
        )}
        {currentQuestion < questions.length - 1 &&
          arr[currentQuestion] !== null && (
            <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>
              Next
            </button>
          )}
        {currentQuestion === questions.length - 1 &&
          arr[currentQuestion] !== null && (
            <button onClick={submitQuizHandler}>Submit Quiz</button>
          )}
      </div>
    </div>
  );
};

export default Quiz;
