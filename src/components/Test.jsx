import React, { useState } from "react";

//components
import Result from "./Result";

//toast
import toast from "react-hot-toast";

function Test({ questions: { color, icon, questions, title } }) {
  const [answeredQuestions, setAnsweredQuestions] = useState(1);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [statusDisabeled, setStatusDisabled] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const correctAnswer = questions[questionIndex].answer;

    if (selectedAnswer == null) {
      alert("Please select a answer")
      // toast.error("Please select a answer");
    } else {
      if (selectedAnswer == correctAnswer) {
        setAnswerStatus("correct");
        setCorrectAnswerCount(correctAnswer + 1);
      } else {
        setAnswerStatus("incorrect");
      }
    }
    setShowNextButton(true);
    setStatusDisabled(true);
  };

  const handleNextQuestion = () => {
    setQuestionIndex(questionIndex + 1);
    setAnsweredQuestions(answeredQuestions + 1);
    setSelectedAnswer(null);
    setShowNextButton(false);
    setAnswerStatus(null);
    setStatusDisabled(false);
  };

  if (questionIndex === questions.length) {
    // toast.success("Congratulations");

    return (
      <Result
        title={title}
        color={color}
        icon={icon}
        correctAnswerCount={correctAnswerCount}
        // questionsLenght={questions.length}
        questions={questions}
      />
    );
  }

  return (
    <div className="test-container">
      <div className="test-content">
        <p className="test-description">
          question {answeredQuestions} of {questions.length}
        </p>
        <h2 className="test-title">{questions[questionIndex].question}</h2>

        {/* status bar */}
        <div className="test-proccess-container">
          <div
            className="test-proccess"
            style={{ width: (answeredQuestions / questions.length) * 100 + "" }}
          >
            {" "}
          </div>
        </div>
      </div>
      <div className="test-questions">
        <form onSubmit={handleSubmit} className="">
          <ul className="test-list">
            {questions[questionIndex].options.map((option, index) => {
              const alphabet = String.fromCharCode(65 + index);

              let className = "";
              if (answerStatus == "correct" && option == selectedAnswer) {
                className = "correct";
              } else if (answerStatus == "incorrect") {
                if (option == selectedAnswer) {
                  className = "incorrect";
                }

                if (option == questions[questionIndex].answer) {
                  className = "correct";
                }
              }

              return (
                <li key={option}>
                  <label className={`test-label ${className}`}>
                    <span className="test-letter">{alphabet}</span>
                    <input
                      type="radio"
                      name="option"
                      onChange={() => setSelectedAnswer(option)}
                      disabled={statusDisabeled}
                    />
                    <span className="test-text">{option}</span>

                    {/* icon */}
                    <img
                      className="test-icon-correct"
                      src="../assets/icon-correct.svg"
                      alt="icon"
                      width={37}
                      height={37}
                    />
                    <img
                      className="test-icon-incorrect"
                      src="../assets/icon-incorrect.svg"
                      alt="icon"
                      width={37}
                      height={37}
                    />
                  </label>
                </li>
              );
            })}
          </ul>
          {!showNextButton && (
            <button className="btn test-btn">Submit question</button>
          )}
          {showNextButton && (
            <button className="btn test-btn" onClick={handleNextQuestion}>
              {questions.length == answeredQuestions
                ? "Finish"
                : "Next question"}
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Test;
