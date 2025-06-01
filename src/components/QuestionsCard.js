import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
export const QuestionCard = ({ question, onAnswer }) => {
    const [selected, setSelected] = useState(null);
    const handleClick = (option) => {
        if (!selected) {
            setSelected(option);
            onAnswer(option === question.correctAnswer, question.explanation);
        }
    };
    const getOptionLetter = (index) => ["A", "B", "C", "D", "E"][index];
    return (_jsxs("div", { className: "bg-white p-6 rounded-2xl shadow-lg", children: [_jsx("h2", { className: "text-black text-xl font-bold mb-4", children: question.question }), _jsx("div", { className: "flex flex-col gap-3", children: question.options.map((opt, i) => {
                    const letter = getOptionLetter(i);
                    return (_jsxs("button", { onClick: () => handleClick(letter), disabled: !!selected, className: `p-3 text-left rounded-xl border transition-all duration-300 ${selected
                            ? letter === question.correctAnswer
                                ? "bg-green-200 border-green-500"
                                : letter === selected
                                    ? "bg-red-300 border-red-500"
                                    : "bg-gray-100"
                            : "bg-yellow-100 hover:bg-yellow-300"}`, children: [_jsxs("span", { className: "font-semibold", children: [letter, "."] }), " ", opt] }, i));
                }) }), selected && (_jsxs("div", { className: "mt-4 space-y-2 text-sm text-gray-800", children: [_jsxs("p", { children: [_jsx("strong", { children: "Explanation:" }), " ", question.explanation] }), question.domain && (_jsxs("p", { children: [_jsx("strong", { children: "Domain:" }), " ", question.domain] })), question.competency && (_jsxs("p", { children: [_jsx("strong", { children: "Competency:" }), " ", question.competency] }))] }))] }));
};
