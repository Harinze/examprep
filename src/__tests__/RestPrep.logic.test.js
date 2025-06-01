"use strict";
// RestPrep.logic.test.ts:
describe("Scoring logic", () => {
    it("adds score for correct answer", () => {
        const currentScore = 5;
        const isCorrect = true;
        const newScore = isCorrect ? currentScore + 1 : currentScore;
        expect(newScore).toBe(6);
    });
    it("does not add score for wrong answer", () => {
        const currentScore = 5;
        const isCorrect = false;
        const newScore = isCorrect ? currentScore + 1 : currentScore;
        expect(newScore).toBe(5);
    });
    it("saves and loads from localStorage", () => {
        localStorage.setItem("score", "8");
        const score = parseInt(localStorage.getItem("score") || "0", 10);
        expect(score).toBe(8);
    });
});
