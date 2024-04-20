import React, { useState, useEffect } from "react";
import "./Modulepaper.css";
import Header from "../Header";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Modulepaper = ({ setassesmentUser, user }) => {
  const [questions, setQuestions] = useState([]);
  const [isPass, setisPass] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [testData, settestData] = useState("");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const modules = queryParams.get("modules");
  const questionSet = queryParams.get("questionSet");
  console.log(modules);
  console.log(questionSet);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // Fetch the JSON file based on the modules parameter
        const moduleTest = await import(`./${questionSet}`);
        setQuestions(moduleTest.questions);

        // Initialize selected options
        const initialSelectedOptions = {};
        moduleTest.questions.forEach((_, index) => {
          initialSelectedOptions[index] = null;
        });
        setSelectedOptions(initialSelectedOptions);
      } catch (error) {
        console.error("Error loading questions data:", error);
      }
    };

    fetchQuestions();
  }, [modules]);

  const handleQuestionClick = (index) => {
    setCurrentQuestion(index);
  };

  const handleOptionClick = (option) => {
    setSelectedOptions({
      ...selectedOptions,
      [currentQuestion]: option,
    });
  };

  const handleNextClick = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentQuestion < questions.length) {
      if (currentQuestion >= 1) {
        setCurrentQuestion(currentQuestion - 1);
      }
    }
  };

  let obtainedMarks = 0;
  const handleSubmit = async (e) => {
    e.preventDefault();

    questions.forEach((question, index) => {
      const selectedOption = selectedOptions[index];
      const correctOption = question.correct_answer;

      if (selectedOption === correctOption) {
        obtainedMarks += 1;
      }
    });

    console.log("Total Marks:", obtainedMarks);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/assesmentData",
        {
          username: user.username,

          modules: modules,

          obtainedMarks: obtainedMarks,
        }
      );
      console.log("Assessment data sent successfully:", response.data);
      setassesmentUser(response.data);
      // Assuming `testData` state is not necessary, you can directly navigate
      navigate(`/userPannel-assesments?data=${JSON.stringify(response.data)}`); // Use navigate instead of history.push
    } catch (error) {
      console.error("Error sending assessment data:", error);
      alert("Assessment failed ");
    }
  };
  return (
    <div className="ModulePaper">
      <Header user={user} />

      <div className="questionSets">
        <div className="testLeftPannel">
          {questions.map((_, index) => (
            <li
              key={index}
              onClick={() => handleQuestionClick(index)}
              className={index === currentQuestion ? "active" : ""}
            >
              Q. {index + 1}
            </li>
          ))}
        </div>
        <div className="testRightPanel">
          <div className="TestSeriesSet">
            <div className="testHead11">
              <span>
                Questions {currentQuestion + 1} of {questions.length}
              </span>
            </div>
            <div className="testHead12">
              <span>{questions[currentQuestion]?.question}</span>
              <div className="testHeadAns">
                {questions[currentQuestion]?.options &&
                  Object.entries(questions[currentQuestion].options).map(
                    ([key, option]) => (
                      <span
                        key={key}
                        onClick={() => handleOptionClick(key)}
                        className={
                          selectedOptions[currentQuestion] === key
                            ? "selected"
                            : ""
                        }
                      >
                        {option}
                      </span>
                    )
                  )}
              </div>
            </div>
          </div>
          {currentQuestion + 1 === 10 ? (
            <button className="SubmitQuestions" onClick={handleSubmit}>
              Submit
            </button>
          ) : (
            ""
          )}
          {currentQuestion + 1 < 10 ? (
            <button className="nextBtnQuestion" onClick={handleNextClick}>
              Next
            </button>
          ) : (
            <button className="prevBtnQuestion" onClick={handlePrevClick}>
              Previous
            </button>
          )}
          {currentQuestion + 1 < 10 ? (
            <button className="prevBtnQuestion" onClick={handlePrevClick}>
              Previous
            </button>
          ) : (
            ""
          )}
          {isSubmitted && (
            <div className="submitted-message">
              {isPass ? (
                <span>Passes the Test</span>
              ) : (
                <span>You got failed</span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modulepaper;
