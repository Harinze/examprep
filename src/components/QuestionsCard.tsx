import React, { useState } from "react";

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  domain?: string;
  competency?: string;
}

interface Props {
  question: Question;
  onAnswer: (isCorrect: boolean, explanation: string) => void;
  showNext: boolean;
}

export const QuestionCard: React.FC<Props> = ({ question, onAnswer }) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = (option: string) => {
    if (!selected) {
      setSelected(option);
      onAnswer(option === question.correctAnswer, question.explanation);
    }
  };

  const getOptionLetter = (index: number) => ["A", "B", "C", "D", "E"][index];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-black text-xl font-bold mb-4">{question.question}</h2>
      <div className="flex flex-col gap-3">
        {question.options.map((opt, i) => {
          const letter = getOptionLetter(i);
          return (
            <button
              key={i}
              onClick={() => handleClick(letter)}
              disabled={!!selected}
              className={`p-3 text-left rounded-xl border transition-all duration-300 ${
                selected
                  ? letter === question.correctAnswer
                    ? "bg-green-200 border-green-500"
                    : letter === selected
                    ? "bg-red-300 border-red-500"
                    : "bg-gray-100"
                  : "bg-yellow-100 hover:bg-yellow-300"
              }`}
            >
              <span className="font-semibold">{letter}.</span> {opt}
            </button>
          );
        })}
      </div>

      {selected && (
        <div className="mt-4 space-y-2 text-sm text-gray-800">
          <p>
            <strong>Explanation:</strong> {question.explanation}
          </p>
          {question.domain && (
            <p>
              <strong>Domain:</strong> {question.domain}
            </p>
          )}
          {question.competency && (
            <p>
              <strong>Competency:</strong> {question.competency}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
