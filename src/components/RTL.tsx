import React, { useEffect, useState } from "react";
import { data } from "../data/rtl";
import { QuestionCard, type Question } from "../components/QuestionsCard";
import { Link } from "react-router-dom";
import ResetButton from "./ResetButton";

const TOTAL = 30;
const WIN_SCORE = 25;

const getLocalData = () => {
  const answered = JSON.parse(localStorage.getItem("answered") || "[]");
  const score = parseInt(localStorage.getItem("score") || "0", 10);
  return { answered, score };
};

const RTL: React.FC = () => {
  const [answered, setAnswered] = useState<number[]>([]);
  const [score, setScore] = useState<number>(0);
  const [current, setCurrent] = useState<Question | null>(null);
  const [feedback, setFeedback] = useState<string>("");
  const [showNext, setShowNext] = useState<boolean>(false);
  const [finished, setFinished] = useState<boolean>(false);

  useEffect(() => {
    const { answered, score } = getLocalData();
    setAnswered(answered);
    setScore(score);
    pickQuestion(answered);
  }, []);

  const pickQuestion = (answeredIds: number[]) => {
    const pool = data.filter(q => !answeredIds.includes(q.id));
    if (pool.length === 0 || answeredIds.length >= TOTAL) {
      setFinished(true);
      setCurrent(null);
      return;
    }
    const next = pool[Math.floor(Math.random() * pool.length)];
    setCurrent(next);
    setShowNext(false);
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (!current) return;
    const newAnswered = [...answered, current.id];
    const newScore = isCorrect ? score + 1 : score;

    setAnswered(newAnswered);
    setScore(newScore);
    setFeedback(isCorrect ? "✅ Correct!" : "❌ Incorrect.");

    localStorage.setItem("answered", JSON.stringify(newAnswered));
    localStorage.setItem("score", newScore.toString());
    setShowNext(true);
  };

  const nextQuestion = () => {
    setFeedback("");
    pickQuestion([...answered]);
  };

  const restart = () => {
    localStorage.clear();
    setAnswered([]);
    setScore(0);
    setFinished(false);
    pickQuestion([]);
  };

  const stopPlaying = () => {
    setFinished(true);
    setCurrent(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-black">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-extrabold">React Testing Library Exam Prep</h1>
          <Link to="/" className="underline font-semibold">Home</Link>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
         <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
  <p className="text-lg">
    Score: <strong>{score} / {TOTAL}</strong>
  </p>
  <ResetButton onReset={restart} />
</div>
          {score >= WIN_SCORE && (
            <p className="text-green-700 font-semibold mt-1">🎉 Certified Graduate!</p>
          )}
        </div>

        {finished ? (
          <div className="bg-white p-6 rounded-2xl shadow text-center space-y-4">
            <h2 className="text-xl font-bold">
              {score >= WIN_SCORE ? "🏆 Congratulations!" : "🛑 Session Over"}
            </h2>
            <p className="text-lg">Final Score: {score} / {TOTAL}</p>
            {score < WIN_SCORE && (
              <p className="text-red-700 font-medium">Try again to score {WIN_SCORE}+ to pass.</p>
            )}
            <div className="flex justify-center gap-4">
              <button onClick={restart} className="bg-black text-white px-4 py-2 rounded-lg hover:bg-opacity-80">
                Restart
              </button>
              <Link to="/" className="bg-white text-black px-4 py-2 rounded-lg border hover:bg-gray-100">
                Home
              </Link>
            </div>
          </div>
        ) : current ? (
          <>
            <QuestionCard
            key={current.id} 
            question={current}
            onAnswer={handleAnswer}
            showNext={showNext}
            />
            {feedback && <p className="text-xl font-semibold">{feedback}</p>}

            {showNext && (
              <div className="flex justify-between mt-6">
                <button onClick={nextQuestion} className="bg-black text-white px-4 py-2 rounded-lg">
                  Next Question
                </button>
                <button onClick={stopPlaying} className="text-black underline text-sm hover:text-red-600">
                  Stop Playing
                </button>
              </div>
            )}
          </>
        ) : (
          <p>Loading question...</p>
        )}
      </div>
    </div>
  );
};

export default RTL;
