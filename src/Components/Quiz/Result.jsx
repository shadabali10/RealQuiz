import React, { useEffect, useState } from "react";

const Result = () => {
  let score = 0;
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
      // const qindex=i;
      if (optionIndex === null) {
        continue;
      }
      if (
        optionIndex !== null &&
        optionIndex === questions[i].options.indexOf(questions[i].correctAnswer)
      ) {
        //   setScore((score) => score + 4);
        console.log("correct");
        score = score + 4;
      }
    }
  }

  //   useEffect(() => {
  //     if (arr) {
  //       // Check if arr is not null or undefined
  //       let newScore = 0;
  //       arr.forEach((optionIndex, index) => {
  //         if (
  //           optionIndex !== null &&
  //           optionIndex ===
  //             questions[index].options.indexOf(questions[index].correctAnswer)
  //         ) {
  //           newScore += 4;
  //         }
  //       });
  //       setScore(newScore);
  //     }
  //   }, [arr]);
  console.log(arr);
  console.log(score);
  return <div>{score}</div>;
};
export default Result;
