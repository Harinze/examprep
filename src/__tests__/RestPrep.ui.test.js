"use strict";
// import { render, screen, fireEvent } from "@testing-library/react";
// import RestPrep from "../components/RestPrep";
// import { MemoryRouter } from "react-router-dom";
// jest.mock("../context/RestQuestionContext", () => ({
//   useQuestionContext: () => ({
//     questions: [
//       {
//         id: 1,
//         question: "What does REST stand for?",
//         options: [
//           "Wrong",
//           "Representational State Transfer",
//           "Wrong again",
//           "Nope",
//           "None"
//         ],
//         correctAnswer: "B",
//         explanation: "REST means Representational State Transfer",
//         answerDescription: "",
//         domain: "REST API",
//         competency: "Basics",
//       },
//     ],
//   }),
// }));
// describe("RestPrep UI", () => {
//   beforeEach(() => localStorage.clear());
//   it("shows the question and answers", async () => {
//     render(
//       <MemoryRouter>
//         <RestPrep />
//       </MemoryRouter>
//     );
//     expect(await screen.findByText("What does REST stand for?")).toBeInTheDocument();
//     expect(screen.getByText("Representational State Transfer")).toBeInTheDocument();
//   });
//   it("handles correct answer", async () => {
//     render(
//       <MemoryRouter>
//         <RestPrep />
//       </MemoryRouter>
//     );
//     fireEvent.click(screen.getByText("Representational State Transfer"));
//     expect(await screen.findByText("✅ Correct!")).toBeInTheDocument();
//   });
//   it("handles incorrect answer", async () => {
//     render(
//       <MemoryRouter>
//         <RestPrep />
//       </MemoryRouter>
//     );
//     fireEvent.click(screen.getByText("Wrong"));
//     expect(await screen.findByText("❌ Incorrect.")).toBeInTheDocument();
//   });
// });
