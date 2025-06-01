import React, { createContext, useContext } from "react";
import { data } from "../data/rest";
import { type Question } from "../data/kcna-questions";

interface QuestionContextType {
  questions: Question[];
}

const QuestionContext = createContext<QuestionContextType | undefined>(undefined);

export const QuestionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <QuestionContext.Provider value={{ questions: data }}>
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestionContext = () => {
  const context = useContext(QuestionContext);
  if (!context) throw new Error("useQuestionContext must be used within a QuestionProvider");
  return context;
};
