export const data = [
    {
        id: 1,
        question: "What is the primary purpose of React Testing Library?",
        options: [
            "To mock network requests in React components",
            "To ensure components are rendering without errors",
            "To test the integration of React with third-party libraries",
            "To test the behavior of components from the user's perspective",
            "None of the above"
        ],
        correctAnswer: "D",
        explanation: "React Testing Library focuses on testing the behavior and interactions of components from the user's perspective rather than testing implementation details.",
        answerDescription: "",
        domain: "React Testing",
        competency: "Best Practices"
    },
    {
        id: 2,
        question: "Which of the following is the recommended query for selecting elements in React Testing Library?",
        options: [
            "getById",
            "getByText",
            "getByClass",
            "getByTag",
            "getByName"
        ],
        correctAnswer: "B",
        explanation: "The recommended query is `getByText` as it simulates the way users interact with the UI, based on visible text.",
        answerDescription: "",
        domain: "React Testing",
        competency: "Queries"
    },
    {
        id: 3,
        question: "Which of the following is NOT a valid query provided by React Testing Library?",
        options: [
            "getByText",
            "getByRole",
            "getByTestId",
            "getByClassName",
            "getByLabelText"
        ],
        correctAnswer: "D",
        explanation: "React Testing Library does not have `getByClassName` query. Instead, it promotes queries like `getByRole`, `getByText`, etc., to find elements based on their role or text.",
        answerDescription: "",
        domain: "React Testing",
        competency: "Queries"
    },
    {
        id: 4,
        question: "What is the purpose of the `fireEvent` method in React Testing Library?",
        options: [
            "To trigger state changes in components",
            "To simulate user interactions with the DOM",
            "To render components in tests",
            "To handle async operations",
            "None of the above"
        ],
        correctAnswer: "B",
        explanation: "`fireEvent` is used to simulate user interactions like clicks, typing, etc., to test how components react to those events.",
        answerDescription: "",
        domain: "React Testing",
        competency: "Events"
    },
    {
        id: 5,
        question: "How do you test asynchronous behavior in React Testing Library?",
        options: [
            "By using `await` and `findBy` queries",
            "By using `setTimeout` in test cases",
            "By using `done()` callback",
            "By mocking network requests with Jest",
            "None of the above"
        ],
        correctAnswer: "A",
        explanation: "React Testing Library provides `findBy` queries for asynchronous tests, allowing you to wait for elements to appear before interacting with them.",
        answerDescription: "",
        domain: "React Testing",
        competency: "Asynchronous Testing"
    },
    {
        id: 6,
        question: "What is the purpose of `waitFor` in React Testing Library?",
        options: [
            "To wait for an element to be present in the DOM",
            "To wait for a state update before continuing the test",
            "To wait for asynchronous operations like API calls to complete",
            "All of the above",
            "None of the above"
        ],
        correctAnswer: "D",
        explanation: "`waitFor` is used to wait for elements to appear, state updates to occur, or asynchronous operations to complete before continuing with the test.",
        answerDescription: "",
        domain: "React Testing",
        competency: "Asynchronous Testing"
    },
    {
        id: 7,
        question: "How do you test user input handling in React Testing Library?",
        options: [
            "By simulating key events using `fireEvent.change`",
            "By testing the form's submit event only",
            "By directly manipulating the component's state",
            "By using `act()` method only",
            "None of the above"
        ],
        correctAnswer: "A",
        explanation: "To test user input handling, you simulate `fireEvent.change` for input fields and verify the expected behavior in the component.",
        answerDescription: "",
        domain: "React Testing",
        competency: "Events"
    },
    {
        id: 8,
        question: "Which of the following should be avoided when testing with React Testing Library?",
        options: [
            "Querying elements based on accessible roles",
            "Querying elements based on text content",
            "Querying elements based on their test IDs",
            "Querying elements based on CSS class names",
            "None of the above"
        ],
        correctAnswer: "D",
        explanation: "React Testing Library promotes querying elements based on accessibility features like roles, text, and labels. Avoid querying by CSS class names, as it is more implementation detail than user-centric.",
        answerDescription: "",
        domain: "React Testing",
        competency: "Best Practices"
    },
    {
        id: 9,
        question: "What is the best practice for handling cleanup after each test in React Testing Library?",
        options: [
            "Using `cleanup()` manually after each test",
            "Letting React Testing Library handle cleanup automatically",
            "Calling `jest.clearAllMocks()` before each test",
            "Calling `unmount()` on components manually",
            "None of the above"
        ],
        correctAnswer: "B",
        explanation: "React Testing Library automatically handles cleanup after each test, so you don't need to manually call `cleanup()` unless needed.",
        answerDescription: "",
        domain: "React Testing",
        competency: "Best Practices"
    },
    {
        id: 10,
        question: "What does the `getByRole` query do in React Testing Library?",
        options: [
            "Finds an element by its CSS class name",
            "Finds an element by its HTML tag",
            "Finds an element based on its role (e.g., button, heading)",
            "Finds an element by its text content",
            "None of the above"
        ],
        correctAnswer: "C",
        explanation: "`getByRole` queries an element based on its accessibility role, which is a user-centric approach for testing.",
        answerDescription: "",
        domain: "React Testing",
        competency: "Queries"
    },
    {
        id: 11,
        question: "What is the purpose of `screen` in React Testing Library?",
        options: [
            "To query elements in the test environment",
            "To simulate screen rendering for tests",
            "To trigger UI updates on the screen",
            "To test the visibility of components",
            "None of the above"
        ],
        correctAnswer: "A",
        explanation: "`screen` is an object that provides access to query methods like `getByText`, `getByRole`, and others. It is used to query DOM elements in your tests.",
        answerDescription: "",
        domain: "React Testing",
        competency: "Queries"
    },
    {
        id: 12,
        question: "Which query should be used for finding form labels in React Testing Library?",
        options: [
            "getByLabelText",
            "getByText",
            "getByTestId",
            "getByRole",
            "getByPlaceholderText"
        ],
        correctAnswer: "A",
        explanation: "`getByLabelText` is used to query form elements by their associated labels, making it an accessible approach for testing form inputs.",
        answerDescription: "",
        domain: "React Testing",
        competency: "Queries"
    },
    {
        id: 13,
        question: "Which of the following is the proper way to trigger a click event in React Testing Library?",
        options: [
            "fireEvent.click(element)",
            "element.click()",
            "fireEvent('click', element)",
            "simulateClick(element)",
            "None of the above"
        ],
        correctAnswer: "A",
        explanation: "`fireEvent.click` is used to simulate a click event in React Testing Library.",
        answerDescription: "",
        domain: "React Testing",
        competency: "Events"
    },
    {
        id: 14,
        question: "How would you test a component that depends on a prop value?",
        options: [
            "By passing different values for the prop and verifying the rendered output",
            "By checking the internal state of the component",
            "By mocking the prop value in the test",
            "By testing only the component's events",
            "None of the above"
        ],
        correctAnswer: "A",
        explanation: "The correct approach is to pass different prop values to the component and assert the changes in the rendered output to verify its behavior.",
        answerDescription: "",
        domain: "React Testing",
        competency: "Component Testing"
    },
    {
        id: 15,
        question: "What is `act()` used for in React Testing Library?",
        options: [
            "To simulate events that trigger state updates",
            "To wrap all assertions in a component lifecycle",
            "To wait for updates in asynchronous code to propagate before assertions",
            "To trigger automatic cleanup after tests",
            "None of the above"
        ],
        correctAnswer: "C",
        explanation: "`act()` ensures that all state updates and re-renders are processed before making assertions in the test, especially when dealing with async code.",
        answerDescription: "",
        domain: "React Testing",
        competency: "Best Practices"
    },
    {
        id: 16,
        question: "Which of the following queries is most useful for testing forms with multiple inputs?",
        options: [
            "getByLabelText",
            "getByRole",
            "getByPlaceholderText",
            "getByTestId",
            "All of the above"
        ],
        correctAnswer: "E",
        explanation: "All of these queries can be useful for testing form elements. `getByLabelText` is recommended, but `getByRole` or `getByTestId` can also be valid depending on the structure.",
        answerDescription: "",
        domain: "React Testing",
        competency: "Queries"
    },
    {
        id: 17,
        question: "Which hook is commonly used to test components that involve state or props updates in React Testing Library?",
        options: [
            "useEffect",
            "useState",
            "useRef",
            "useLayoutEffect",
            "useMemo"
        ],
        correctAnswer: "B",
        explanation: "The `useState` hook is frequently used in React components, and when testing such components, you may check how state changes affect the rendered output.",
        answerDescription: "",
        domain: "React Testing",
        competency: "Component Testing"
    },
    {
        id: 18,
        question: "How would you test if a component calls an event handler function?",
        options: [
            "By asserting that the event handler function is called after a simulated event",
            "By inspecting the component's state after the event",
            "By directly invoking the event handler inside the test",
            "By testing the output of the handler function",
            "None of the above"
        ],
        correctAnswer: "A",
        explanation: "You would simulate the event and then assert that the event handler was called, usually by checking that the expected function was invoked.",
        answerDescription: "",
        domain: "React Testing",
        competency: "Event Handling"
    },
    {
        id: 19,
        question: "What is the main advantage of using React Testing Library over Enzyme?",
        options: [
            "It focuses on testing components from the user's perspective rather than implementation details",
            "It is faster and more efficient",
            "It uses shallow rendering by default",
            "It has a larger community",
            "None of the above"
        ],
        correctAnswer: "A",
        explanation: "React Testing Library encourages testing behavior based on how the user interacts with the application, as opposed to testing implementation details like state or lifecycle methods.",
        answerDescription: "",
        domain: "React Testing",
        competency: "Best Practices"
    },
    {
        id: 20,
        question: "What is the correct method to mock a component's props in React Testing Library?",
        options: [
            "By passing mocked props directly to the component",
            "By using `jest.mock()` for the entire component",
            "By using `mockReturnValue` inside the test",
            "By using `mockComponent` function",
            "None of the above"
        ],
        correctAnswer: "A",
        explanation: "To mock props, you pass the mocked values directly to the component when rendering it in the test.",
        answerDescription: "",
        domain: "React Testing",
        competency: "Component Testing"
    },
    {
        id: 21,
        question: "When testing React components, which of the following is the correct way to assert if an element is present in the DOM?",
        options: [
            "expect(element).toBeInTheDocument()",
            "expect(element).toBeVisible()",
            "expect(element).toHaveTextContent()",
            "expect(element).toExist()",
            "None of the above"
        ],
        correctAnswer: "A",
        explanation: "The correct way to assert if an element is present in the DOM is using `toBeInTheDocument()`, which is provided by the jest-dom extension.",
        answerDescription: "",
        domain: "React Testing",
        competency: "Assertions"
    },
    {
        id: 22,
        question: "Which of the following is used to simulate a user typing in an input field in React Testing Library?",
        options: [
            "fireEvent.change",
            "fireEvent.input",
            "fireEvent.keyUp",
            "fireEvent.keyDown",
            "None of the above"
        ],
        correctAnswer: "A",
        explanation: "`fireEvent.change` is used to simulate a user typing into an input field in React Testing Library.",
        answerDescription: "",
        domain: "React Testing",
        competency: "Events"
    },
    {
        id: 23,
        question: "How do you handle tests for components that involve timers or setTimeout?",
        options: [
            "By using `jest.useFakeTimers()`",
            "By using `act()` to trigger updates",
            "By using `await` to wait for timers to resolve",
            "By mocking `setTimeout` function",
            "None of the above"
        ],
        correctAnswer: "A",
        explanation: "`jest.useFakeTimers()` is used to mock timers such as `setTimeout` and `setInterval`, allowing you to control the passage of time in tests.",
        answerDescription: "",
        domain: "React Testing",
        competency: "Async Testing"
    },
    {
        id: 24,
        question: "Which of the following assertions is used to check that a function has been called in Jest?",
        options: [
            "expect(fn).toHaveBeenCalled()",
            "expect(fn).toHaveBeenCalledTimes()",
            "expect(fn).toHaveBeenCalledWith()",
            "All of the above",
            "None of the above"
        ],
        correctAnswer: "D",
        explanation: "All of the above assertions can be used to check whether a function has been called in Jest, depending on the specific use case.",
        answerDescription: "",
        domain: "React Testing",
        competency: "Mocking"
    },
    {
        id: 25,
        question: "How would you handle a component that triggers an async action in response to user interaction?",
        options: [
            "By using `await` and testing the final state",
            "By simulating the interaction and asserting the side effect immediately",
            "By using `act()` to wrap the async action",
            "By mocking the async function and asserting it was called",
            "None of the above"
        ],
        correctAnswer: "C",
        explanation: "When testing async actions, it’s important to use `act()` to ensure all updates are processed before making assertions.",
        answerDescription: "",
        domain: "React Testing",
        competency: "Async Testing"
    },
    {
        id: 26,
        question: "What is the role of `screen` in the context of React Testing Library?",
        options: [
            "It is used for mocking DOM elements",
            "It provides methods to query elements in the DOM during tests",
            "It is used to simulate screen rendering",
            "It is used to test CSS properties",
            "None of the above"
        ],
        correctAnswer: "B",
        explanation: "`screen` provides a set of query methods (`getByText`, `getByRole`, etc.) that are used to query elements in the DOM during tests.",
        answerDescription: "",
        domain: "React Testing",
        competency: "Queries"
    },
    {
        id: 27,
        question: "Which of the following is a recommended way to test for the presence of a specific text inside a component?",
        options: [
            "getByText",
            "getByLabelText",
            "getByTestId",
            "getByRole",
            "None of the above"
        ],
        correctAnswer: "A",
        explanation: "`getByText` is the recommended query to find elements by their visible text content, which is a user-centric approach.",
        answerDescription: "",
        domain: "React Testing",
        competency: "Queries"
    },
    {
        id: 28,
        question: "Which Jest matcher is used to assert that an element is not present in the document?",
        options: [
            "expect(element).not.toBeInTheDocument()",
            "expect(element).not.toHaveTextContent()",
            "expect(element).toHaveClass('hidden')",
            "expect(element).toBeNull()",
            "None of the above"
        ],
        correctAnswer: "A",
        explanation: "`expect(element).not.toBeInTheDocument()` is the correct matcher to assert that an element is not present in the document.",
        answerDescription: "",
        domain: "React Testing",
        competency: "Assertions"
    },
    {
        id: 29,
        question: "How would you test if a component correctly renders a loading spinner while waiting for data?",
        options: [
            "By asserting the spinner is visible before data is fetched and hidden after",
            "By mocking the API call and asserting loading states",
            "By simulating user interactions and checking for spinner visibility",
            "All of the above",
            "None of the above"
        ],
        correctAnswer: "D",
        explanation: "All the approaches are valid. You can test loading behavior by checking if the spinner is visible during the fetch and hidden afterward.",
        answerDescription: "",
        domain: "React Testing",
        competency: "Component Testing"
    },
    {
        id: 30,
        question: "Which of the following is a best practice when testing React components?",
        options: [
            "Test components in isolation using shallow rendering",
            "Test components with mock data instead of real props",
            "Focus on testing the component's implementation details",
            "Test components from the user's perspective",
            "None of the above"
        ],
        correctAnswer: "D",
        explanation: "React Testing Library encourages testing components as users would interact with them, avoiding reliance on implementation details.",
        answerDescription: "",
        domain: "React Testing",
        competency: "Best Practices"
    }
];
