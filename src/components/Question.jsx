import { useState } from "react";
import { questions } from "../data";

const Questions = ({ name }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState([]);
  const [score, setScore] = useState(0);

  const handleClick = (response) => {
    setCurrentQuestion(currentQuestion + 1);
    setResponses([...responses, response]);
    if (
      response == "Lima" ||
      response == "Júpiter" ||
      response == "Definir la estructura de la página web"
    ) {
      setScore(score + 1);
    }
  };

  return (
    <div>
      <section className="flex justify-center items-center mt-10">
        {currentQuestion <= 2 ? (
          <div>
            <img
              src={questions[currentQuestion].image}
              alt="image"
              className="max-h-60 border w-96 rounded-lg mx-auto"
            />
            <h2 className="text-center text-white text-2xl my-5">
              {questions[currentQuestion].question}
            </h2>
            <ul className="flex flex-col gap-4 mx-auto w-fit">
              {questions[currentQuestion].alternatives.map((alternative) => (
                <li
                  className="rounded-full pl-5 bg-white text-lg cursor-pointer w-96"
                  onClick={() => handleClick(alternative.text)}
                  key={alternative.letter}
                >
                  <span className="text-blue-500 font-bold text-xl">
                    {alternative.letter}{" "}
                  </span>
                  {alternative.text}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="bg-white py-5 px-6 rounded-md custom-shadow mt-10">
            <h4 className="text-xl font-medium">
              Tu puntaje <span className="underline font-bold">{name}</span>:{" "}
              {score} /3
            </h4>
          </div>
        )}
      </section>
    </div>
  );
};

export default Questions;
