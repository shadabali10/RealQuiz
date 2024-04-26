import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Result = () => {
  const navigate = useNavigate();
  let score = 0;
  useEffect(() => {
    const check = localStorage.getItem("check");
    if (check && !check) {
      navigate("/login");
    }
  });
  const arr = JSON.parse(localStorage.getItem("quiz"));
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

  if (arr) {
    for (let i = 0; i < arr.length; i++) {
      const optionIndex = arr[i];

      if (optionIndex === null) {
        continue;
      }
      if (
        optionIndex !== null &&
        optionIndex === questions[i].options.indexOf(questions[i].correctAnswer)
      ) {
        console.log("correct");
        score = score + 4;
      }
    }
  }

  console.log(arr);
  console.log(score);

  return (
    <div>
      <div className="flex justify-center items-center min-w-screen min-h-screen">
        <div className="w-96 h-96 flex justify-center items-center flex-col bg-gray-100 rounded-lg">
          <h1 className="mb-4 text-2xl font-bold text-green-600">Congratulations</h1>
          <h1 className="mb-8 text-4xl font-bold">Your score is {score}</h1>
          <button className="w-32 h-10 bg-red-500 rounded-lg text-white " onClick={() => navigate("/")}>
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};
//  export {score};
export default Result;
