import React, { useEffect } from "react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  // const [className, setClassName] = React.useState("option");
  const [selected, notSelected] = React.useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].correctAnswer) {
      setCorrect(correct + 1);
      
      console.log(correct);
    }
  };

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

  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center">
      <div className="w-1/2 h-1/2">
        <div>
          <h1>{questions[currentQuestion].question}</h1>
        </div>
        {questions[currentQuestion].options.map((option, index) => (
          <div className="options" onClick={() => handleAnswer(option)}>
            {option}
          </div>
        ))}
        {currentQuestion < questions.length - 1 && (
          <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>
            next
          </button>
        )}
        {currentQuestion > 0 && (
          <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>
            prev
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
