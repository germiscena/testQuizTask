import React from "react";
import "../styles/Main.scss";
import Questions from "../Components/Questions";
const Main = () => {
  return (
    <div className='Main'>
      <div className='Main_head'>
        <h1 className='Main_head_title'>Онлайн-подбор средств для лица</h1>
        <p className='Main_head_description'>
          Пройдите короткий тест и получите список наиболее подходящих для вас косметических
          продуктов
        </p>
      </div>
      <div className='Main_quiz'>{<Questions />}</div>
    </div>
  );
};

export default Main;
