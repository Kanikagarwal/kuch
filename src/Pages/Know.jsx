import { useState } from "react";
import FriendshipBackground from "./FriendshipBackground";

const questions = [
  {
    question: "When we first met, what did you think about me?",
    options: [
      "Tum husn pari tum jane jahan",
      "Itni kyu tum khubsurat ho?",
      "Teri yado me khoya rehta hu 😉",
      "All of the above"
    ]
  },
  {
    question: "Your comfort food is?",
    options: [
      "Momos",
      "Namkeen",
      "Parathas",
      "Anything homemade"
    ]
  },
  {
    question: "Your favourite drink?",
    options: [
      "Chai",
      "Chai",
      "Chai",
      "Chai 😉"
    ]
  },
  {
    question: "Late night mood?",
    options: [
      "Deep thoughts",
      "Random music",
      "Talking to me 😉",
      "Overthinking again"
    ]
  },
  {
    question: "What you hate about me the most?",
    options: [
      "Wait, is there anything?",
      "Say, No",
      "I know there is nothing",
      "Am I right? 😉"
    ]
  }
];

const KnowingQuiz = ({ onFinish }) => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);

  const nextQuestion = () => {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      onFinish?.();
    }
  };

  return (
    <FriendshipBackground>
        <div>
        <h1 className="text-4xl font-bold text-center mb-2">Answer Carefully</h1>
        <p className="text-xl text-center mb-4 font-light">(Nobody is watching 😉)</p>
    <div className="min-h-max flex items-center justify-center px-4 bg-transparent">
      <div className="bg-white rounded-3xl shadow-xl max-w-3xl w-full p-8 text-center">

        <p className="text-sm text-gray-400 mb-3">
          Question {current + 1} of {questions.length}
        </p>

        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          {questions[current].question}
        </h2>

        <div className="space-y-4">
          {questions[current].options.map((option, index) => (
            <label
              key={index}
              onClick={() => setSelected(index)}
              className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer border transition-all
                ${
                  selected === index
                    ? "bg-pink-100 border-pink-300"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
            >
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center
                  ${
                    selected === index
                      ? "border-pink-400"
                      : "border-gray-300"
                  }`}
              >
                {selected === index && (
                  <div className="w-2 h-2 bg-pink-400 rounded-full" />
                )}
              </div>

              <span className="text-gray-700">{option}</span>
            </label>
          ))}
        </div>

        <button
          onClick={nextQuestion}
          disabled={selected === null}
          className={`mt-8 px-6 py-3 rounded-full font-semibold transition
            ${
              selected === null
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-[#FFB703] text-black hover:bg-[#FFD166]"
            }`}
        >
          {current === questions.length - 1 ? "Finish 💛" : "Next →"}
        </button>

      </div>
    </div>

        </div>
    </FriendshipBackground>
  );
};

export default KnowingQuiz;
