import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { data } from "../data/mini-websocket";
import { QuestionCard } from "../components/QuestionsCard";
import { Link } from "react-router-dom";
import ResetButton from "./ResetButton";
const TOTAL = 30;
const WIN_SCORE = 25;
const getLocalData = () => {
    const answered = JSON.parse(localStorage.getItem("answered") || "[]");
    const score = parseInt(localStorage.getItem("score") || "0", 10);
    return { answered, score };
};
const MiniWebsocket = () => {
    const [answered, setAnswered] = useState([]);
    const [score, setScore] = useState(0);
    const [current, setCurrent] = useState(null);
    const [feedback, setFeedback] = useState("");
    const [showNext, setShowNext] = useState(false);
    const [finished, setFinished] = useState(false);
    useEffect(() => {
        const { answered, score } = getLocalData();
        setAnswered(answered);
        setScore(score);
        pickQuestion(answered);
    }, []);
    const pickQuestion = (answeredIds) => {
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
    const handleAnswer = (isCorrect) => {
        if (!current)
            return;
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
    return (_jsx("div", { className: "min-h-screen bg-gray-100 p-6 text-black", children: _jsxs("div", { className: "max-w-2xl mx-auto space-y-6", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("h1", { className: "text-3xl font-extrabold", children: "Mini Web Socket Prep " }), _jsx(Link, { to: "/", className: "underline font-semibold", children: "Home" })] }), _jsxs("div", { className: "bg-white p-4 rounded-xl shadow", children: [_jsxs("div", { className: "bg-white p-4 rounded-xl shadow flex justify-between items-center", children: [_jsxs("p", { className: "text-lg", children: ["Score: ", _jsxs("strong", { children: [score, " / ", TOTAL] })] }), _jsx(ResetButton, { onReset: restart })] }), score >= WIN_SCORE && (_jsx("p", { className: "text-green-700 font-semibold mt-1", children: "\uD83C\uDF89 Certified Graduate!" }))] }), finished ? (_jsxs("div", { className: "bg-white p-6 rounded-2xl shadow text-center space-y-4", children: [_jsx("h2", { className: "text-xl font-bold", children: score >= WIN_SCORE ? "🏆 Congratulations!" : "🛑 Session Over" }), _jsxs("p", { className: "text-lg", children: ["Final Score: ", score, " / ", TOTAL] }), score < WIN_SCORE && (_jsx("p", { className: "text-red-700 font-medium", children: "Try again to score 80+ to pass." })), _jsxs("div", { className: "flex justify-center gap-4", children: [_jsx("button", { onClick: restart, className: "bg-black text-white px-4 py-2 rounded-lg hover:bg-opacity-80", children: "Restart" }), _jsx(Link, { to: "/", className: "bg-white text-black px-4 py-2 rounded-lg border hover:bg-gray-100", children: "Home" })] })] })) : current ? (_jsxs(_Fragment, { children: [_jsx(QuestionCard, { question: current, onAnswer: handleAnswer, showNext: showNext }, current.id), feedback && _jsx("p", { className: "text-xl font-semibold", children: feedback }), showNext && (_jsxs("div", { className: "flex justify-between mt-6", children: [_jsx("button", { onClick: nextQuestion, className: "bg-black text-white px-4 py-2 rounded-lg", children: "Next Question" }), _jsx("button", { onClick: stopPlaying, className: "text-black underline text-sm hover:text-red-600", children: "Stop Playing" })] }))] })) : (_jsx("p", { children: "Loading question..." }))] }) }));
};
export default MiniWebsocket;
