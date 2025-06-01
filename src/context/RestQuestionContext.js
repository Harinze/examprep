import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
import { data } from "../data/rest";
const QuestionContext = createContext(undefined);
export const QuestionProvider = ({ children }) => {
    return (_jsx(QuestionContext.Provider, { value: { questions: data }, children: children }));
};
export const useQuestionContext = () => {
    const context = useContext(QuestionContext);
    if (!context)
        throw new Error("useQuestionContext must be used within a QuestionProvider");
    return context;
};
