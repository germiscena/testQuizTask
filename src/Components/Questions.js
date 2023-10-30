import React from "react";
import "../styles/Questions.scss";
import { useNavigate } from "react-router";
const Questions = () => {
  const quest = ["Сколько вам лет?", "Какой у вас тип кожи?", "Беспокоят ли воспаления на лице?"];
  const answers = [
    [
      "Нужны средства для ребёнка младше 10 лет",
      "Мне меньше 25 лет",
      "От 25 до 35 лет",
      "От 35 до 45 лет",
      "Мне больше 45 лет",
    ],
    ["Сухая", "Нормальная", "Комбинированная", "Жирная"],
    ["Да", "Нет", "Иногда"],
  ];
  const [input, setInput] = React.useState(null);
  const [clicked, setClicked] = React.useState(false);
  const [question, setQuestion] = React.useState(0);
  const navigate = useNavigate();
  const clickInput = (value) => {
    setInput(value);
    setClicked(true);
  };
  const nextQuestion = () => {
    question == 2 ? navigate("res") : setQuestion((prev) => prev + 1);
    setClicked(false);
    setInput(null);
  };
  const prevQuestion = () => {
    setQuestion((prev) => prev - 1);
    setClicked(false);
    setInput(null);
  };
  return (
    <div className='Questions'>
      <div className='Questions_circles'>
        {question == 0 ? (
          <div
            style={{ marginRight: "10px", backgroundColor: "#00a5ff" }}
            className='Questions_circles_circle'></div>
        ) : (
          <div style={{ marginRight: "10px" }} className='Questions_circles_circle'></div>
        )}
        {question == 1 ? (
          <div
            style={{ marginRight: "10px", backgroundColor: "#00a5ff" }}
            className='Questions_circles_circle'></div>
        ) : (
          <div style={{ marginRight: "10px" }} className='Questions_circles_circle'></div>
        )}
        {question == 2 ? (
          <div style={{ backgroundColor: "#00a5ff" }} className='Questions_circles_circle'></div>
        ) : (
          <div className='Questions_circles_circle'></div>
        )}
      </div>
      <p className='Questions_questionNumber'>Вопрос {question + 1} из 3</p>
      <h1 className='Questions_question'>{quest[question]}</h1>
      <div className='Questions_answers'>
        {answers[question].map((item, index) => {
          return (
            <div key={index} className='Questions_answers_single'>
              <input
                type='radio'
                name='radioGroup'
                checked={input === item[index]}
                onChange={() => clickInput(item[index])}
                className='Questions_answers_single_input'
              />
              <p className='Questions_answers_single_text'>{item}</p>
            </div>
          );
        })}
      </div>
      <div className='Questions_buttons'>
        {question != 0 ? (
          <button onClick={() => prevQuestion()} className='Questions_buttons_button back'>
            Назад
          </button>
        ) : (
          ""
        )}
        <button
          onClick={() => nextQuestion()}
          className={
            clicked
              ? "Questions_buttons_button continue"
              : "Questions_buttons_button continue hidden"
          }>
          Дальше
        </button>
      </div>
    </div>
  );
};

export default Questions;
