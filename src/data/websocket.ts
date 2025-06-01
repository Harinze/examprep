import { type Question } from "./kcna-questions";

export const data: Question[]  = [
  {
    id: 1,
    question: "How does WebSocket differ from HTTP/REST?",
    options: [
      "WebSocket uses multiple requests for real-time communication",
      "WebSocket establishes a persistent, bi-directional connection",
      "WebSocket only works for GET requests",
      "HTTP/REST uses WebSocket for data transfer",
      "HTTP/REST supports bi-directional communication"
    ],
    correctAnswer: "B",
    explanation: "WebSocket allows a persistent, bi-directional connection, while HTTP/REST is a request-response model where each request opens a new connection.",
    answerDescription: "",
    domain: "WebSocket Fundamentals",
    competency: "Differences"
  },
  {
    id: 2,
    question: "What happens during a WebSocket handshake?",
    options: [
      "A connection is closed after the handshake",
      "The client sends a POST request to initiate communication",
      "The HTTP connection is upgraded to a WebSocket connection",
      "The server rejects the connection if it's not an HTTP request",
      "The WebSocket connection is established via a DNS request"
    ],
    correctAnswer: "C",
    explanation: "During the handshake, the client sends an HTTP request to upgrade the connection to WebSocket, allowing for bi-directional communication.",
    answerDescription: "",
    domain: "WebSocket Fundamentals",
    competency: "Handshake Process"
  },
  {
    id: 3,
    question: "Which protocol is used after the WebSocket handshake to establish communication?",
    options: [
      "HTTP",
      "HTTPS",
      "ws:// or wss://",
      "FTP",
      "SMTP"
    ],
    correctAnswer: "C",
    explanation: "Once the handshake is successful, WebSocket uses ws:// (unsecured) or wss:// (secured) for continuous communication.",
    answerDescription: "",
    domain: "WebSocket Fundamentals",
    competency: "Protocol Usage"
  },
  {
    id: 4,
    question: "Which of the following is a typical use case for WebSockets?",
    options: [
      "Fetching user data from a database",
      "Sending occasional background API requests",
      "Real-time notifications in a chat application",
      "Uploading large files to a server",
      "Fetching static assets for a website"
    ],
    correctAnswer: "C",
    explanation: "WebSockets are ideal for use cases like real-time notifications or chat apps where continuous communication is required.",
    answerDescription: "",
    domain: "WebSocket Fundamentals",
    competency: "Use Cases"
  },
  {
    id: 5,
    question: "What is the key advantage of using WebSocket over HTTP/REST for real-time communication?",
    options: [
      "WebSocket allows for secure file uploads",
      "WebSocket uses a single request to maintain persistent communication",
      "WebSocket is faster than HTTP/REST",
      "WebSocket can transfer data in multiple formats",
      "WebSocket supports server-side processing"
    ],
    correctAnswer: "B",
    explanation: "WebSocket allows a single connection to be kept open for continuous, persistent communication, unlike HTTP/REST which requires multiple requests.",
    answerDescription: "",
    domain: "WebSocket Fundamentals",
    competency: "Advantages"
  },
  {
    id: 6,
    question: "What type of connection does WebSocket use?",
    options: [
      "Unidirectional, client to server",
      "Bidirectional, client to server",
      "Unidirectional, server to client",
      "Bidirectional, client and server",
      "One-way, request-response"
    ],
    correctAnswer: "D",
    explanation: "WebSocket creates a persistent, bidirectional connection between the client and server, allowing for real-time communication in both directions.",
    answerDescription: "",
    domain: "WebSocket Fundamentals",
    competency: "Connection Model"
  },
  {
    id: 7,
    question: "Which of the following is NOT a benefit of using WebSockets?",
    options: [
      "Low-latency data transfer",
      "Persistent connection with no need for re-authentication",
      "Real-time updates without repeated HTTP requests",
      "One-time request-response model",
      "Efficient data transfer for real-time applications"
    ],
    correctAnswer: "D",
    explanation: "WebSockets are designed for continuous, low-latency communication and do not use the one-time request-response model of HTTP/REST.",
    answerDescription: "",
    domain: "WebSocket Fundamentals",
    competency: "Benefits"
  },
  {
    id: 8,
    question: "What is the WebSocket URL format used for secure connections?",
    options: [
      "http://",
      "https://",
      "ws://",
      "wss://",
      "ftp://"
    ],
    correctAnswer: "D",
    explanation: "For secure WebSocket connections, the URL uses the wss:// scheme (WebSocket Secure), analogous to HTTPS for HTTP.",
    answerDescription: "",
    domain: "WebSocket Fundamentals",
    competency: "URL Format"
  },
  {
    id: 9,
    question: "What is typically involved in scaling WebSocket-based applications?",
    options: [
      "Increasing HTTP request count to handle more users",
      "Using WebSocket proxies and load balancers to distribute traffic",
      "Implementing serverless architecture for event handling",
      "Optimizing database queries",
      "Reducing the number of incoming WebSocket connections"
    ],
    correctAnswer: "B",
    explanation: "WebSocket-based applications often require proxies and load balancers to distribute incoming WebSocket traffic across multiple servers to handle more users efficiently.",
    answerDescription: "",
    domain: "WebSocket Fundamentals",
    competency: "Scaling"
  },
  {
    id: 10,
    question: "Which of the following is NOT typically supported by WebSocket for real-time communication?",
    options: [
      "Two-way communication between client and server",
      "Broadcasting messages to multiple clients",
      "Persistent connection over time",
      "Request-response model",
      "Real-time data streaming"
    ],
    correctAnswer: "D",
    explanation: "WebSocket enables persistent, two-way communication and is ideal for real-time data streaming and broadcasting, unlike the request-response model of HTTP.",
    answerDescription: "",
    domain: "WebSocket Fundamentals",
    competency: "Features"
  },
  {
    id: 11,
    question: "Which of the following is the main advantage of using `socket.io-client` over the native WebSocket API in React?",
    options: [
      "It offers automatic reconnection, event handling, and broadcasting features",
      "It is only available in server-side applications",
      "It requires no server-side implementation",
      "It allows only one client connection at a time",
      "It doesn't support message parsing"
    ],
    correctAnswer: "A",
    explanation: "`socket.io-client` provides extra features like automatic reconnection, event handling, and broadcasting, which are not available in the native WebSocket API.",
    answerDescription: "",
    domain: "WebSocket Integration in React",
    competency: "Third-Party Libraries"
  },
  {
    id: 12,
    question: "What is the purpose of creating a `useWebSocket` hook in a React application?",
    options: [
      "To manage WebSocket server communication across multiple components",
      "To store the WebSocket connection globally",
      "To handle only incoming messages",
      "To allow server-side rendering of WebSocket data",
      "To improve the visual performance of WebSocket connections"
    ],
    correctAnswer: "A",
    explanation: "Creating a custom `useWebSocket` hook in React allows for centralized management of WebSocket communication across different components, improving reusability and maintainability.",
    answerDescription: "",
    domain: "WebSocket Integration in React",
    competency: "Reusable Hooks"
  },
  {
    id: 13,
    question: "How would you handle the WebSocket connection lifecycle (open/close) in a React component?",
    options: [
      "By using `componentDidMount` and `componentWillUnmount` lifecycle methods in class components",
      "By manually opening and closing the WebSocket connection on every render",
      "By using the `useEffect` hook in functional components to handle mounting and unmounting",
      "By using the `useState` hook to manage the connection status",
      "By implementing the `componentDidUpdate` lifecycle method"
    ],
    correctAnswer: "C",
    explanation: "In functional components, `useEffect` can be used to handle the WebSocket connection lifecycle, opening it on mount and closing it on unmount.",
    answerDescription: "",
    domain: "WebSocket Integration in React",
    competency: "Lifecycle Management"
  },
  {
    id: 14,
    question: "What is the advantage of using the `ReconnectingWebSocket` library in a React application?",
    options: [
      "It automatically reconnects the WebSocket connection if it drops",
      "It allows WebSocket connections to be handled only on the server side",
      "It handles only incoming messages and ignores outgoing ones",
      "It simplifies the WebSocket handshake process",
      "It doesn't require a connection to a server"
    ],
    correctAnswer: "A",
    explanation: "`ReconnectingWebSocket` provides automatic reconnection functionality if the WebSocket connection drops, making it more reliable for real-time communication.",
    answerDescription: "",
    domain: "WebSocket Integration in React",
    competency: "Third-Party Libraries"
  },
  {
    id: 15,
    question: "When handling WebSocket messages in React, what is the best practice for message parsing?",
    options: [
      "Parsing messages with `JSON.parse` and updating the state with the parsed data",
      "Directly updating the state with raw WebSocket message data",
      "Storing raw WebSocket message data in Redux store",
      "Using only plain text messages for simplicity",
      "Ignoring message parsing and relying on backend logic"
    ],
    correctAnswer: "A",
    explanation: "It's a good practice to parse WebSocket messages using `JSON.parse` and then update the state with the parsed data to ensure the state is correctly formatted.",
    answerDescription: "",
    domain: "WebSocket Integration in React",
    competency: "Message Parsing"
  },
  {
    id: 16,
    question: "Which of the following is a good pattern for managing multiple WebSocket connections in a React app?",
    options: [
      "Creating one WebSocket connection per component",
      "Sharing a single WebSocket connection globally across all components",
      "Opening and closing WebSocket connections on every render",
      "Storing WebSocket connections in the component state",
      "Using React Context to pass WebSocket connections to child components"
    ],
    correctAnswer: "B",
    explanation: "Sharing a single WebSocket connection across all components can help manage resources efficiently and reduce unnecessary connections in a React app.",
    answerDescription: "",
    domain: "WebSocket Integration in React",
    competency: "Connection Management"
  },
  {
    id: 17,
    question: "What does the `useSocketListener` hook typically do in a WebSocket-based React app?",
    options: [
      "It listens for WebSocket messages and triggers state updates or actions",
      "It opens the WebSocket connection when invoked",
      "It manages WebSocket connection lifecycle events",
      "It allows sending WebSocket messages with built-in retry logic",
      "It caches incoming WebSocket messages for future use"
    ],
    correctAnswer: "A",
    explanation: "`useSocketListener` listens for WebSocket messages and triggers appropriate state updates or actions in the React application when messages are received.",
    answerDescription: "",
    domain: "WebSocket Integration in React",
    competency: "Hooks Usage"
  },
  {
    id: 18,
    question: "When managing a WebSocket connection in a React component, what should you ensure when the component is unmounted?",
    options: [
      "The WebSocket connection should be manually closed to prevent memory leaks",
      "The WebSocket connection should be left open to allow background data updates",
      "State updates should be ignored to avoid unnecessary renders",
      "WebSocket messages should be stored in a cache for later use",
      "The WebSocket connection should be delayed until the component mounts again"
    ],
    correctAnswer: "A",
    explanation: "To avoid memory leaks, it’s important to close the WebSocket connection manually when the component is unmounted, ensuring resources are freed.",
    answerDescription: "",
    domain: "WebSocket Integration in React",
    competency: "Lifecycle Management"
  },
  {
    id: 19,
    question: "What is the purpose of using the `ws` library in a React application?",
    options: [
      "To simplify the process of handling WebSocket connections",
      "To enable client-side data storage",
      "To handle HTTP requests in React components",
      "To optimize rendering performance of React components",
      "To integrate WebSocket messages with Redux"
    ],
    correctAnswer: "A",
    explanation: "The `ws` library simplifies the process of managing WebSocket connections, providing an easy-to-use API for establishing and handling WebSocket communication.",
    answerDescription: "",
    domain: "WebSocket Integration in React",
    competency: "Third-Party Libraries"
  },
  {
    id: 20,
    question: "What is the role of the `onmessage` event handler in a WebSocket-based React app?",
    options: [
      "It listens for incoming WebSocket messages and handles them",
      "It opens a new WebSocket connection when invoked",
      "It sends data over the WebSocket connection",
      "It parses WebSocket messages into JSON format",
      "It closes the WebSocket connection when invoked"
    ],
    correctAnswer: "A",
    explanation: "`onmessage` is an event handler that listens for incoming WebSocket messages and processes them, triggering state updates or other actions in the app.",
    answerDescription: "",
    domain: "WebSocket Integration in React",
    competency: "Event Handling"
  },
  {
    id: 21,
    question: "How should you handle real-time WebSocket updates in a React application to avoid stale data?",
    options: [
      "By using `useState` directly without syncing with external state management tools",
      "By using `useEffect` to fetch new data from the backend every time",
      "By synchronizing WebSocket updates with state management libraries like Redux",
      "By storing real-time data in local storage for persistence",
      "By ignoring WebSocket updates when the user is not actively interacting with the app"
    ],
    correctAnswer: "C",
    explanation: "Real-time WebSocket updates should be integrated with state management libraries like Redux to ensure data consistency across components and avoid stale data.",
    answerDescription: "",
    domain: "State Management with Real-Time Data",
    competency: "State Sync"
  },
  {
    id: 22,
    question: "Which of the following strategies can help prevent unnecessary re-renders when handling WebSocket updates in React?",
    options: [
      "Using `useState` for each WebSocket event and causing re-renders on every update",
      "Using the `React.memo` function to memoize components that depend on WebSocket updates",
      "Storing WebSocket messages in a global variable to avoid state updates",
      "Using `useEffect` to trigger re-renders on every state change",
      "Using `useCallback` to create new WebSocket listeners on each render"
    ],
    correctAnswer: "B",
    explanation: "`React.memo` can help optimize re-renders by memoizing components and only re-rendering them if their props change, reducing unnecessary updates.",
    answerDescription: "",
    domain: "State Management with Real-Time Data",
    competency: "Performance Optimization"
  },
  {
    id: 23,
    question: "When integrating WebSocket updates with Redux, which method can be used to trigger state changes based on incoming messages?",
    options: [
      "Dispatching actions directly from the WebSocket `onmessage` handler",
      "Using `useEffect` to dispatch actions when WebSocket events occur",
      "Using Redux middleware to intercept WebSocket events",
      "Manually updating the store with raw WebSocket data",
      "Both A and C are valid methods"
    ],
    correctAnswer: "E",
    explanation: "You can either dispatch actions directly in the WebSocket `onmessage` handler or use middleware like `redux-thunk` or `redux-saga` to intercept WebSocket events.",
    answerDescription: "",
    domain: "State Management with Real-Time Data",
    competency: "Redux Integration"
  },
  {
    id: 24,
    question: "What is a key consideration when handling WebSocket updates during UI transitions, such as navigating between pages?",
    options: [
      "Allowing WebSocket updates to continue without buffering to avoid delays",
      "Buffering WebSocket updates to prevent UI from being overwhelmed during transitions",
      "Blocking WebSocket updates until the UI transition is complete",
      "Discarding WebSocket updates that occur during transitions",
      "Automatically synchronizing WebSocket updates with the server"
    ],
    correctAnswer: "B",
    explanation: "Buffering WebSocket updates during UI transitions helps prevent the UI from being overwhelmed by real-time data, providing a smoother user experience.",
    answerDescription: "",
    domain: "State Management with Real-Time Data",
    competency: "UI Optimization"
  },
  {
    id: 25,
    question: "Which of the following methods can be used to manage WebSocket state in a Redux store to avoid performance issues?",
    options: [
      "Directly storing every WebSocket message as a separate action in the store",
      "Aggregating messages into batches and dispatching them as a single action",
      "Only storing WebSocket message IDs and fetching full data on demand",
      "Ignoring WebSocket updates when the app is idle",
      "Using `localStorage` to persist WebSocket data"
    ],
    correctAnswer: "B",
    explanation: "Aggregating messages into batches and dispatching them as a single action reduces the frequency of state updates and minimizes performance overhead.",
    answerDescription: "",
    domain: "State Management with Real-Time Data",
    competency: "Redux Integration"
  },
  {
    id: 26,
    question: "What is a common approach to prevent stale data when managing WebSocket connections in a React app?",
    options: [
      "Using an interval to manually refresh the state every few seconds",
      "Using a polling mechanism in addition to WebSocket connections",
      "Using `useEffect` to subscribe and update state only when the data changes",
      "Manually clearing the state on every WebSocket message",
      "Switching from WebSocket to HTTP/REST for all updates"
    ],
    correctAnswer: "C",
    explanation: "Using `useEffect` to subscribe to WebSocket messages and updating state only when data changes helps to keep the data fresh without introducing stale information.",
    answerDescription: "",
    domain: "State Management with Real-Time Data",
    competency: "State Sync"
  },
  {
    id: 27,
    question: "What is the role of `useReducer` in handling WebSocket data in React applications?",
    options: [
      "It allows managing state transitions based on incoming WebSocket messages in a predictable way",
      "It is used to trigger WebSocket connections",
      "It optimizes the WebSocket connection performance",
      "It provides a way to cancel WebSocket connections",
      "It handles HTTP responses more efficiently than `useState`"
    ],
    correctAnswer: "A",
    explanation: "`useReducer` is ideal for managing complex state transitions based on multiple WebSocket messages, providing a predictable way to update the state.",
    answerDescription: "",
    domain: "State Management with Real-Time Data",
    competency: "State Sync"
  },
  {
    id: 28,
    question: "Which approach is recommended when implementing queueing or buffering WebSocket updates during UI transitions in a React app?",
    options: [
      "Use `useState` to store the WebSocket messages and manually process them",
      "Use a library like `redux-saga` to manage the queue and dispatch updates in sequence",
      "Use `useEffect` to buffer the updates and process them once the transition is complete",
      "Use `localStorage` to store the updates and sync later",
      "Use `setTimeout` to delay WebSocket updates"
    ],
    correctAnswer: "B",
    explanation: "Using a library like `redux-saga` helps manage the queue and ensures that updates are dispatched in sequence, preventing UI overload during transitions.",
    answerDescription: "",
    domain: "State Management with Real-Time Data",
    competency: "UI Optimization"
  },
  {
    id: 29,
    question: "In the context of WebSocket and Redux, what is a common challenge when managing state during real-time updates?",
    options: [
      "Ensuring that WebSocket updates are immediately reflected in the UI without unnecessary re-renders",
      "Not dispatching any actions on WebSocket updates to prevent performance degradation",
      "Limiting the number of WebSocket connections to just one per application",
      "Buffering all incoming WebSocket messages before dispatching to the store",
      "Only displaying WebSocket updates after user interaction"
    ],
    correctAnswer: "A",
    explanation: "Ensuring real-time updates are reflected immediately without causing unnecessary re-renders is a common challenge when managing WebSocket data in a React app with Redux.",
    answerDescription: "",
    domain: "State Management with Real-Time Data",
    competency: "Performance Optimization"
  },
  {
    id: 30,
    question: "Which of the following is a good practice when managing real-time WebSocket updates in a large-scale React application?",
    options: [
      "Dispatching every WebSocket message as a separate action in Redux",
      "Minimizing the number of WebSocket connections to one per app",
      "Aggregating WebSocket updates into batches to reduce the number of state changes",
      "Buffering WebSocket updates indefinitely to ensure the app never misses any data",
      "Ignoring WebSocket updates when the app is not active"
    ],
    correctAnswer: "C",
    explanation: "Aggregating WebSocket updates into batches helps reduce the frequency of state changes, improving performance and reducing overhead in large-scale applications.",
    answerDescription: "",
    domain: "State Management with Real-Time Data",
    competency: "Performance Optimization"
  }, {
    id: 31,
    question: "Why is it important to use `wss://` (Secure WebSocket) instead of `ws://` in production environments?",
    options: [
      "To ensure data is encrypted during transmission, preventing man-in-the-middle attacks",
      "To improve performance by avoiding encryption overhead",
      "To allow easier configuration of WebSocket servers",
      "To allow WebSocket connections over insecure networks",
      "None of the above"
    ],
    correctAnswer: "A",
    explanation: "`wss://` provides encryption for WebSocket connections, preventing data interception and man-in-the-middle attacks, ensuring secure data transmission.",
    answerDescription: "",
    domain: "Authentication & Security",
    competency: "Security"
  },
  {
    id: 32,
    question: "How can you securely authenticate users during the WebSocket handshake?",
    options: [
      "By passing a token as a query parameter in the URL",
      "By using an HTTP-only cookie to store authentication tokens",
      "By passing the authentication token in the WebSocket header or as a query parameter",
      "By embedding the authentication token inside the WebSocket message payload",
      "All of the above"
    ],
    correctAnswer: "C",
    explanation: "The most common practice is to pass the authentication token in the WebSocket header or as a query parameter during the handshake to authenticate users securely.",
    answerDescription: "",
    domain: "Authentication & Security",
    competency: "Authentication"
  },
  {
    id: 33,
    question: "What is the role of token validation on the server side when handling WebSocket connections?",
    options: [
      "To ensure the WebSocket connection is established by a legitimate user",
      "To prevent brute-force attacks by blocking repeated invalid tokens",
      "To assign the user an anonymous session for WebSocket interactions",
      "To encrypt the WebSocket message content",
      "To limit the number of active WebSocket connections per user"
    ],
    correctAnswer: "A",
    explanation: "Token validation on the server side ensures that only legitimate users can establish a WebSocket connection, verifying that they are authorized to interact with the server.",
    answerDescription: "",
    domain: "Authentication & Security",
    competency: "Authentication"
  },
  {
    id: 34,
    question: "How should token expiration be handled when a WebSocket connection is maintained over time?",
    options: [
      "By disconnecting the WebSocket and requiring the user to reconnect with a new token",
      "By sending a token refresh request whenever the token expires",
      "By storing an expired token in the WebSocket session and continuing the connection",
      "By automatically extending the token expiration upon every new message",
      "None of the above"
    ],
    correctAnswer: "A",
    explanation: "When a token expires, the WebSocket connection should be disconnected, and the user should reconnect with a new, valid token. This ensures secure handling of expired tokens.",
    answerDescription: "",
    domain: "Authentication & Security",
    competency: "Security"
  },
  {
    id: 35,
    question: "What is the best practice for securely handling WebSocket reconnections when the user's authentication token has expired?",
    options: [
      "Allow automatic reconnection without any authentication check",
      "Reauthenticate the user by redirecting them to a login page before attempting reconnection",
      "Attempt reconnection using the expired token until a valid token is retrieved",
      "Use refresh tokens to automatically authenticate the user during reconnections",
      "Allow reconnection only after manually validating the token on the client side"
    ],
    correctAnswer: "D",
    explanation: "Using refresh tokens is a secure way to authenticate users during WebSocket reconnections without requiring them to log in repeatedly.",
    answerDescription: "",
    domain: "Authentication & Security",
    competency: "Security"
  },
  {
    id: 36,
    question: "Which of the following methods helps prevent message spoofing in WebSocket communication?",
    options: [
      "Validating the token during the handshake and using HTTPS for secure connections",
      "Encrypting all WebSocket messages and signing each message with a unique key",
      "Using the WebSocket API's built-in message validation features",
      "Sending messages over unencrypted `ws://` connections",
      "Allowing anyone to send messages without validation"
    ],
    correctAnswer: "B",
    explanation: "Encrypting messages and signing them with a unique key helps prevent message spoofing, ensuring that only authorized parties can send valid messages.",
    answerDescription: "",
    domain: "Authentication & Security",
    competency: "Security"
  },
  {
    id: 37,
    question: "What is a potential security risk when using WebSockets without secure authentication mechanisms?",
    options: [
      "Increased server load from processing multiple connections",
      "Unsecured data transmission over the network, making it vulnerable to man-in-the-middle attacks",
      "Unable to use WebSockets in mobile applications",
      "Messages can be delayed due to security checks",
      "None of the above"
    ],
    correctAnswer: "B",
    explanation: "Without secure authentication, WebSocket messages can be intercepted during transmission, exposing sensitive data to attackers through man-in-the-middle attacks.",
    answerDescription: "",
    domain: "Authentication & Security",
    competency: "Security"
  },
  {
    id: 38,
    question: "What should you do if a WebSocket connection is closed due to token expiration?",
    options: [
      "Automatically reconnect using the expired token",
      "Notify the user and prompt them to log in again or refresh their token",
      "Re-establish the connection with an empty token",
      "Allow the server to reconnect the WebSocket without validating the token",
      "None of the above"
    ],
    correctAnswer: "B",
    explanation: "If the WebSocket connection is closed due to token expiration, the best approach is to notify the user and prompt them to log in again or refresh their token.",
    answerDescription: "",
    domain: "Authentication & Security",
    competency: "Authentication"
  },
  {
    id: 39,
    question: "When passing authentication tokens in the WebSocket handshake, which is the recommended method?",
    options: [
      "Passing the token as a query parameter in the WebSocket URL",
      "Embedding the token directly within the WebSocket message payload",
      "Including the token in an HTTP-only cookie sent with the handshake",
      "Storing the token in local storage and accessing it during the handshake",
      "Sending the token over a non-secure `ws://` connection"
    ],
    correctAnswer: "A",
    explanation: "Passing the token as a query parameter in the WebSocket URL is a common approach, as it allows the server to authenticate the user during the handshake process securely.",
    answerDescription: "",
    domain: "Authentication & Security",
    competency: "Authentication"
  },
  {
    id: 40,
    question: "How can WebSocket messages be securely validated to prevent spoofing or unauthorized messages from being sent?",
    options: [
      "Using tokens and signatures to authenticate each message before it is processed",
      "Relying on IP addresses to validate the sender of the message",
      "Encrypting WebSocket messages and assuming security is guaranteed",
      "Sending messages in plaintext to avoid encryption overhead",
      "Allowing unrestricted message sending for trusted users"
    ],
    correctAnswer: "A",
    explanation: "Using tokens and message signatures ensures that only authenticated users can send valid messages, preventing unauthorized or spoofed messages from being processed.",
    answerDescription: "",
    domain: "Authentication & Security",
    competency: "Security"
  },
  {
    id: 41,
    question: "Why is it important to handle unexpected disconnects in WebSocket communication?",
    options: [
      "To ensure the server does not overload from reconnect attempts",
      "To ensure the client reconnects and maintains real-time updates",
      "To avoid data loss and ensure consistent user experience",
      "To improve connection stability by reducing the number of active WebSocket connections",
      "All of the above"
    ],
    correctAnswer: "B",
    explanation: "Handling unexpected disconnects ensures that the client can reconnect and continue receiving real-time updates, maintaining a seamless user experience.",
    answerDescription: "",
    domain: "WebSocket Stability",
    competency: "Reconnection"
  },
  {
    id: 42,
    question: "What is the purpose of implementing exponential backoff in WebSocket reconnection strategies?",
    options: [
      "To prevent rapid reconnection attempts from overloading the server",
      "To reduce latency during reconnections",
      "To ensure that reconnections happen at regular intervals",
      "To improve message delivery by slowing down the reconnection process",
      "None of the above"
    ],
    correctAnswer: "A",
    explanation: "Exponential backoff delays reconnection attempts, progressively increasing the interval between each attempt, preventing server overload due to rapid retry attempts.",
    answerDescription: "",
    domain: "WebSocket Stability",
    competency: "Reconnection"
  },
  {
    id: 43,
    question: "Which of the following best describes the exponential backoff strategy for handling WebSocket reconnections?",
    options: [
      "Reconnecting immediately on each disconnect with no delay",
      "Doubling the delay between each reconnection attempt until a maximum is reached",
      "Connecting at fixed intervals regardless of disconnect time",
      "Attempting reconnection only once after a disconnect",
      "None of the above"
    ],
    correctAnswer: "B",
    explanation: "Exponential backoff doubles the delay between each reconnection attempt, helping to avoid server overload and giving time for transient issues to resolve.",
    answerDescription: "",
    domain: "WebSocket Stability",
    competency: "Reconnection"
  },
  {
    id: 44,
    question: "What does the heartbeat mechanism (ping/pong) in WebSocket communication help detect?",
    options: [
      "Unexpected disconnections or connection drops",
      "The server's load and connection capacity",
      "The amount of time a WebSocket has been open",
      "The data size of WebSocket messages",
      "All of the above"
    ],
    correctAnswer: "A",
    explanation: "The heartbeat mechanism, using ping/pong messages, helps detect unexpected disconnections or connection drops by ensuring that the connection is still alive.",
    answerDescription: "",
    domain: "WebSocket Stability",
    competency: "Reconnection"
  },
  {
    id: 45,
    question: "What happens when the client does not receive a `pong` message after sending a `ping` in WebSocket communication?",
    options: [
      "The client retries the ping automatically",
      "The connection is assumed to be lost, and reconnection attempts are triggered",
      "The connection remains open, and no action is taken",
      "The server automatically reconnects the client",
      "None of the above"
    ],
    correctAnswer: "B",
    explanation: "If the client does not receive a `pong` message after sending a `ping`, it indicates that the connection is likely lost, and the client may begin reconnection attempts.",
    answerDescription: "",
    domain: "WebSocket Stability",
    competency: "Reconnection"
  },
  {
    id: 46,
    question: "What is the role of the `ping` message in the WebSocket heartbeat mechanism?",
    options: [
      "To check if the server is still responsive and to maintain the connection alive",
      "To trigger a reconnection attempt if the server is unresponsive",
      "To synchronize timestamps between client and server",
      "To monitor data flow between client and server",
      "None of the above"
    ],
    correctAnswer: "A",
    explanation: "The `ping` message is used to check if the server is still responsive and to maintain the WebSocket connection alive by ensuring the link is still open.",
    answerDescription: "",
    domain: "WebSocket Stability",
    competency: "Reconnection"
  },
  {
    id: 47,
    question: "What is the maximum interval you should allow between WebSocket heartbeat `ping/pong` messages before considering the connection lost?",
    options: [
      "It depends on the message size",
      "There should be no maximum interval",
      "Typically 30 seconds to 1 minute, depending on the application's requirements",
      "Around 10 seconds",
      "The connection should never close"
    ],
    correctAnswer: "C",
    explanation: "Typically, WebSocket connections should use `ping/pong` messages at intervals of 30 seconds to 1 minute to ensure the connection is alive. This interval can be adjusted based on application requirements.",
    answerDescription: "",
    domain: "WebSocket Stability",
    competency: "Reconnection"
  },
  {
    id: 48,
    question: "What should be done when an unexpected disconnect occurs in a WebSocket-based chat application?",
    options: [
      "Prompt the user to manually reconnect",
      "Automatically attempt to reconnect, with exponential backoff, until successful",
      "Terminate the session and require the user to refresh the page",
      "Send a reconnect message to the server",
      "None of the above"
    ],
    correctAnswer: "B",
    explanation: "Automatically attempting reconnection with exponential backoff ensures the client can recover from temporary network issues or server-side disconnects without requiring manual intervention.",
    answerDescription: "",
    domain: "WebSocket Stability",
    competency: "Reconnection"
  },
  {
    id: 49,
    question: "What should you include in your WebSocket reconnection strategy to improve user experience during temporary disconnects?",
    options: [
      "Reconnecting as quickly as possible without delays",
      "Informing the user about the disconnection status and attempting reconnection with exponential backoff",
      "Pausing all WebSocket communication until the connection is restored",
      "Only attempting to reconnect once and notifying the user of the failure",
      "None of the above"
    ],
    correctAnswer: "B",
    explanation: "Informing the user about the disconnect status and using exponential backoff ensures a smooth user experience and avoids overwhelming the server with rapid reconnections.",
    answerDescription: "",
    domain: "WebSocket Stability",
    competency: "Reconnection"
  },
  {
    id: 50,
    question: "How can you ensure that the WebSocket connection is properly closed after a disconnection, especially when using reconnection strategies?",
    options: [
      "By manually closing the connection after every message",
      "By using the WebSocket `onclose` event to clean up resources and remove listeners",
      "By ensuring the client tries to reconnect immediately after disconnection",
      "By ignoring any disconnects and continuing the connection",
      "None of the above"
    ],
    correctAnswer: "B",
    explanation: "Using the WebSocket `onclose` event to clean up resources, such as removing listeners and resetting state, ensures proper closure and resource management during disconnects.",
    answerDescription: "",
    domain: "WebSocket Stability",
    competency: "Reconnection"
  },
   {
    id: 51,
    question: "Why is it important to route messages by type or topic in a WebSocket application?",
    options: [
      "To prevent message collisions between different types of data",
      "To improve server performance by prioritizing message types",
      "To enhance message readability by categorizing data",
      "To ensure that different types of data are processed correctly and independently",
      "All of the above"
    ],
    correctAnswer: "D",
    explanation: "Routing messages by type or topic ensures that different types of data are handled independently, reducing errors and improving clarity in processing.",
    answerDescription: "",
    domain: "Error Handling & Message Routing",
    competency: "Best Practices"
  },
  {
    id: 52,
    question: "Which of the following is a best practice when routing WebSocket messages?",
    options: [
      "Directly handling all messages in the same function",
      "Using a message routing system to handle different types of messages separately",
      "Only sending one message per WebSocket connection",
      "Avoiding message types and using raw data for simplicity",
      "None of the above"
    ],
    correctAnswer: "B",
    explanation: "Using a message routing system allows different types of messages to be handled in a structured and modular way, improving maintainability and scalability.",
    answerDescription: "",
    domain: "Error Handling & Message Routing",
    competency: "Best Practices"
  },
  {
    id: 53,
    question: "How can you gracefully fall back to HTTP when WebSocket connections fail?",
    options: [
      "By manually redirecting the client to an HTTP endpoint when the WebSocket connection fails",
      "By setting up a retry mechanism using WebSocket that falls back to HTTP if a timeout occurs",
      "By using a WebSocket library that automatically switches to HTTP in case of failure",
      "By using the `onerror` event to trigger an HTTP request if WebSocket connection fails",
      "All of the above"
    ],
    correctAnswer: "E",
    explanation: "There are several ways to handle fallback mechanisms, including automatically falling back to HTTP using a retry mechanism or using WebSocket libraries that manage connection fallbacks.",
    answerDescription: "",
    domain: "Error Handling & Message Routing",
    competency: "Error Handling"
  },
  {
    id: 54,
    question: "What should you do if a WebSocket connection fails and falls back to HTTP?",
    options: [
      "Send all data as HTTP requests, regardless of the original WebSocket use",
      "Notify the user about the issue and ensure the system retries WebSocket",
      "Store WebSocket messages locally and only send them once the connection is restored",
      "Ignore the failure and continue sending data via WebSocket",
      "None of the above"
    ],
    correctAnswer: "B",
    explanation: "It’s important to notify the user about the connection failure, ensure retries for WebSocket, and handle the failure gracefully while keeping the system functional.",
    answerDescription: "",
    domain: "Error Handling & Message Routing",
    competency: "Error Handling"
  },
  {
    id: 55,
    question: "What is the best way to handle malformed messages received from a WebSocket connection?",
    options: [
      "Ignore the message and continue processing the next one",
      "Log the error, send an error message to the client, and continue processing other messages",
      "Close the WebSocket connection immediately",
      "Send a `pong` response to the client and ignore the error",
      "None of the above"
    ],
    correctAnswer: "B",
    explanation: "Malformed messages should be logged and an error message should be sent to the client. It’s also important to continue processing other messages to avoid blocking the flow.",
    answerDescription: "",
    domain: "Error Handling & Message Routing",
    competency: "Error Handling"
  },
  {
    id: 56,
    question: "What can you use to handle different types of messages in a WebSocket-based chat application?",
    options: [
      "Switch statement in the WebSocket message handler",
      "Message routing based on topic or type using a message type header",
      "A queue to store all messages for later processing",
      "Only allowing a single type of message to be sent",
      "None of the above"
    ],
    correctAnswer: "B",
    explanation: "Routing messages by type or topic allows you to properly categorize messages and process them independently, ensuring efficient and error-free communication.",
    answerDescription: "",
    domain: "Error Handling & Message Routing",
    competency: "Best Practices"
  },
  {
    id: 57,
    question: "Which WebSocket error handling approach should be followed when receiving a malformed message?",
    options: [
      "Send an error response to the sender and continue processing",
      "Retry the operation until it succeeds",
      "Ignore the message and move on to the next one",
      "Notify the user and restart the WebSocket connection",
      "None of the above"
    ],
    correctAnswer: "A",
    explanation: "When receiving a malformed message, it’s essential to handle the error properly by sending an error response and continuing with the next message to prevent blocking the process.",
    answerDescription: "",
    domain: "Error Handling & Message Routing",
    competency: "Error Handling"
  },
  {
    id: 58,
    question: "When would you use HTTP fallback in WebSocket communication?",
    options: [
      "When WebSocket server is overloaded and cannot handle new connections",
      "When the WebSocket connection is slow or unreliable",
      "When the WebSocket connection drops unexpectedly and needs a fail-safe mechanism",
      "When the client is not supporting WebSockets",
      "All of the above"
    ],
    correctAnswer: "E",
    explanation: "HTTP fallback is useful in various situations, including when WebSocket connections fail, the server is overloaded, or when the client doesn’t support WebSockets.",
    answerDescription: "",
    domain: "Error Handling & Message Routing",
    competency: "Error Handling"
  },
  {
    id: 59,
    question: "How can you parse and handle different message types in a WebSocket application?",
    options: [
      "Use JSON parsing and check the `type` field to route messages to the correct handler",
      "Only use a `string` format for all messages",
      "Manually parse messages in raw format for each handler",
      "Use WebSocket message events without checking message type",
      "None of the above"
    ],
    correctAnswer: "A",
    explanation: "Using JSON parsing and checking the `type` field of each message allows you to route and handle different message types efficiently, improving modularity and scalability.",
    answerDescription: "",
    domain: "Error Handling & Message Routing",
    competency: "Message Routing"
  },
  {
    id: 60,
    question: "How should you respond if you receive a malformed JSON message in a WebSocket application?",
    options: [
      "Ignore the message and continue",
      "Throw an error and stop processing the WebSocket connection",
      "Log the error and send a message to the client notifying them of the malformed JSON",
      "Send a `pong` response to keep the connection alive",
      "None of the above"
    ],
    correctAnswer: "C",
    explanation: "Malformed JSON messages should be logged, and the client should be notified of the error to ensure that the sender is aware of the issue and can correct it.",
    answerDescription: "",
    domain: "Error Handling & Message Routing",
    competency: "Error Handling"
  },
  {
    id: 61,
    question: "Why is it important to use efficient message structures in WebSocket applications?",
    options: [
      "To minimize payload size and reduce transmission time",
      "To increase the complexity of messages",
      "To allow for larger message content",
      "To ensure WebSocket messages are human-readable",
      "None of the above"
    ],
    correctAnswer: "A",
    explanation: "Efficient message structures help minimize payload size, reduce transmission time, and improve overall performance by reducing network bandwidth usage.",
    answerDescription: "",
    domain: "Performance and Scaling",
    competency: "Optimization"
  },
  {
    id: 62,
    question: "What is a common strategy for reducing the size of WebSocket messages?",
    options: [
      "Sending raw data without compression",
      "Using efficient binary formats like Protocol Buffers or MessagePack",
      "Sending more data to avoid frequent connections",
      "Using Base64 encoding for all messages",
      "None of the above"
    ],
    correctAnswer: "B",
    explanation: "Using efficient binary formats like Protocol Buffers or MessagePack can significantly reduce message size, improving performance in WebSocket communication.",
    answerDescription: "",
    domain: "Performance and Scaling",
    competency: "Optimization"
  },
  {
    id: 63,
    question: "Which of the following can help reduce the frequency of WebSocket messages in a high-load application?",
    options: [
      "Throttling the messages sent from the server",
      "Sending all messages as fast as possible",
      "Batching multiple updates into a single message",
      "Using longer timeouts for messages",
      "All of the above"
    ],
    correctAnswer: "C",
    explanation: "Batching multiple updates into a single message helps reduce the frequency of messages and optimizes network utilization, improving application performance.",
    answerDescription: "",
    domain: "Performance and Scaling",
    competency: "Optimization"
  },
  {
    id: 64,
    question: "How can throttling help with performance in WebSocket applications?",
    options: [
      "It helps prevent excessive load on the client by reducing the frequency of updates",
      "It increases the load on the server by sending more messages in a shorter time",
      "It ensures that data is transmitted in a timely manner",
      "It avoids message duplication on the server",
      "None of the above"
    ],
    correctAnswer: "A",
    explanation: "Throttling helps by reducing the frequency of updates, preventing server overload and ensuring that clients are not overwhelmed with too many updates at once.",
    answerDescription: "",
    domain: "Performance and Scaling",
    competency: "Optimization"
  },
  {
    id: 65,
    question: "What is the advantage of compressing WebSocket message payloads?",
    options: [
      "It reduces the payload size, improving transmission speed and reducing bandwidth consumption",
      "It increases the complexity of message handling",
      "It causes higher server load due to decompression",
      "It improves the readability of the messages",
      "None of the above"
    ],
    correctAnswer: "A",
    explanation: "Compressing WebSocket payloads reduces the size of the data being transmitted, improving performance and reducing network bandwidth consumption.",
    answerDescription: "",
    domain: "Performance and Scaling",
    competency: "Optimization"
  },
  {
    id: 66,
    question: "How can batching high-frequency WebSocket data help with scaling a real-time application?",
    options: [
      "By sending data less frequently, reducing load on the server and the client",
      "By ensuring data is processed immediately in real-time",
      "By sending larger payloads without any additional logic",
      "By reducing the network's security risks",
      "None of the above"
    ],
    correctAnswer: "A",
    explanation: "Batching high-frequency data helps by sending updates less frequently, reducing the overall load on both the server and the client, which is crucial for scaling real-time applications.",
    answerDescription: "",
    domain: "Performance and Scaling",
    competency: "Optimization"
  },
  {
    id: 67,
    question: "When should you consider using Web Workers in a WebSocket-based application?",
    options: [
      "When you need to offload CPU-bound tasks to a separate thread, improving responsiveness",
      "When the server needs to handle a high volume of incoming messages simultaneously",
      "When you want to compress messages before sending them over WebSocket",
      "When you need to reduce the frequency of data transmission",
      "None of the above"
    ],
    correctAnswer: "A",
    explanation: "Web Workers are useful for offloading CPU-bound tasks to a separate thread, improving application responsiveness by preventing UI-blocking operations in the main thread.",
    answerDescription: "",
    domain: "Performance and Scaling",
    competency: "Optimization"
  },
  {
    id: 68,
    question: "How does batching data help with WebSocket scalability?",
    options: [
      "It allows for fewer messages to be processed, reducing the server's workload",
      "It sends larger payloads, which are easier to manage on the server",
      "It improves message latency by sending all data at once",
      "It avoids network congestion by sending fewer packets",
      "None of the above"
    ],
    correctAnswer: "A",
    explanation: "Batching data into fewer messages reduces the overall number of messages the server needs to process, which can improve scalability, especially in high-traffic applications.",
    answerDescription: "",
    domain: "Performance and Scaling",
    competency: "Optimization"
  },
  {
    id: 69,
    question: "What is the impact of using efficient message structures on WebSocket application performance?",
    options: [
      "It reduces message processing time and improves application responsiveness",
      "It increases message processing time, slowing down the app",
      "It results in more frequent reconnections",
      "It introduces additional server-side logic complexity",
      "None of the above"
    ],
    correctAnswer: "A",
    explanation: "Efficient message structures reduce processing time, enabling faster transmission and improving overall application performance and responsiveness.",
    answerDescription: "",
    domain: "Performance and Scaling",
    competency: "Optimization"
  },
  {
    id: 70,
    question: "Why is compressing WebSocket payloads typically more beneficial in large-scale applications?",
    options: [
      "Because it reduces network bandwidth usage, improving performance for users on slow connections",
      "Because it increases message delivery speed",
      "Because it simplifies the message handling logic",
      "Because it reduces server load",
      "All of the above"
    ],
    correctAnswer: "A",
    explanation: "Compressing WebSocket payloads helps reduce bandwidth usage, which is especially beneficial in large-scale applications where users might be on slower or limited connections.",
    answerDescription: "",
    domain: "Performance and Scaling",
    competency: "Optimization"
  },
  {
    id: 71,
    question: "How can you unit test WebSocket logic in React using mock sockets?",
    options: [
      "By using libraries like mock-socket or jest-mock-websocket to simulate WebSocket behavior",
      "By testing WebSocket logic only in the browser, without any mocks",
      "By sending real WebSocket messages during testing",
      "By writing end-to-end tests for WebSocket functionality",
      "None of the above"
    ],
    correctAnswer: "A",
    explanation: "Mocking WebSocket behavior with libraries like mock-socket or jest-mock-websocket allows you to simulate socket events and responses for testing without relying on real WebSocket connections.",
    answerDescription: "",
    domain: "Testing WebSocket Logic",
    competency: "Unit Testing"
  },
  {
    id: 72,
    question: "When writing unit tests for WebSocket-based components, what is a common approach for simulating socket messages?",
    options: [
      "Using a mock WebSocket object that simulates connection, sending, and receiving messages",
      "Manually connecting to a real WebSocket server",
      "Using real-time WebSocket messages only in the test environment",
      "Skipping tests related to WebSockets altogether",
      "None of the above"
    ],
    correctAnswer: "A",
    explanation: "A mock WebSocket object can simulate the sending and receiving of messages, allowing you to test WebSocket-related logic in isolation without connecting to a real WebSocket server.",
    answerDescription: "",
    domain: "Testing WebSocket Logic",
    competency: "Unit Testing"
  },
  {
    id: 73,
    question: "What is the benefit of using a mock WebSocket server for integration testing?",
    options: [
      "It allows you to test WebSocket logic with real WebSocket connections without affecting production",
      "It makes the tests run slower",
      "It can simulate network failures to test reconnection logic",
      "It tests frontend logic without needing a backend server",
      "All of the above"
    ],
    correctAnswer: "E",
    explanation: "Using a mock WebSocket server for integration testing allows you to simulate real WebSocket behavior, test reconnection logic, and ensure your frontend works as expected with minimal setup and no risk to production systems.",
    answerDescription: "",
    domain: "Testing WebSocket Logic",
    competency: "Integration Testing"
  },
  {
    id: 74,
    question: "In WebSocket testing, why is it important to mock socket events in unit tests?",
    options: [
      "To ensure tests run quickly without actual network latency",
      "To simulate specific WebSocket messages and responses in isolation",
      "To avoid dependency on external WebSocket servers during testing",
      "All of the above",
      "None of the above"
    ],
    correctAnswer: "D",
    explanation: "Mocking socket events allows tests to run faster, avoids reliance on external systems, and enables testing specific scenarios such as receiving certain messages from the server.",
    answerDescription: "",
    domain: "Testing WebSocket Logic",
    competency: "Unit Testing"
  },
  {
    id: 75,
    question: "What is the role of integration testing in WebSocket applications?",
    options: [
      "To ensure that WebSocket connections, events, and data flow work correctly between frontend and backend",
      "To verify that WebSocket logic is isolated from other application layers",
      "To test if WebSocket messages are sent without any validation",
      "To verify that mocks are working correctly",
      "None of the above"
    ],
    correctAnswer: "A",
    explanation: "Integration testing ensures that all components, including WebSocket connections, events, and data flow, function correctly together between the frontend and backend, especially in a real environment.",
    answerDescription: "",
    domain: "Testing WebSocket Logic",
    competency: "Integration Testing"
  },
  {
    id: 76,
    question: "How do you simulate multiple WebSocket messages in unit tests using mock WebSocket?",
    options: [
      "By using a mock WebSocket object and triggering different events with different data sets",
      "By simulating the opening of a WebSocket connection only",
      "By forcing a server-side event to emit multiple messages in sequence",
      "By testing the messages individually using multiple mock WebSocket objects",
      "None of the above"
    ],
    correctAnswer: "A",
    explanation: "You can simulate multiple WebSocket messages by triggering different events in a mock WebSocket object with various data sets, allowing you to test how the component handles different scenarios.",
    answerDescription: "",
    domain: "Testing WebSocket Logic",
    competency: "Unit Testing"
  },
  {
    id: 77,
    question: "What is a common pattern for managing multiple WebSocket event types in a React application?",
    options: [
      "Using a centralized WebSocket service or singleton connection manager",
      "Directly opening new WebSocket connections for each event type",
      "Storing each WebSocket event type as a separate state in components",
      "Using React context for each event",
      "None of the above"
    ],
    correctAnswer: "A",
    explanation: "A centralized WebSocket service or singleton connection manager helps manage multiple WebSocket event types in one place, streamlining the connection logic and reducing redundant code across components.",
    answerDescription: "",
    domain: "Architecture Patterns",
    competency: "Best Practices"
  },
  {
    id: 78,
    question: "How does the Pub/Sub model fit into a frontend WebSocket architecture?",
    options: [
      "By allowing the frontend to subscribe to specific WebSocket topics and handle different events",
      "By sending messages to all connected clients without filtering",
      "By using WebSockets only for sending data, not for receiving",
      "By making all WebSocket messages public to everyone",
      "None of the above"
    ],
    correctAnswer: "A",
    explanation: "The Pub/Sub (Publish/Subscribe) model allows the frontend to subscribe to specific WebSocket topics or event types, ensuring that components only handle the messages relevant to them.",
    answerDescription: "",
    domain: "Architecture Patterns",
    competency: "Design Patterns"
  },
  {
    id: 79,
    question: "What is multiplexing in WebSocket communication?",
    options: [
      "Sending multiple types of data (such as chat, notifications, and updates) over a single WebSocket connection",
      "Establishing multiple WebSocket connections for each data type",
      "Using WebSockets only for one type of data",
      "Opening several WebSocket connections in parallel",
      "None of the above"
    ],
    correctAnswer: "A",
    explanation: "Multiplexing involves sending multiple types of data (like chat messages, notifications, or updates) over a single WebSocket connection, improving performance by reducing the number of open connections.",
    answerDescription: "",
    domain: "Architecture Patterns",
    competency: "Design Patterns"
  },
  {
    id: 80,
    question: "Why is a centralized WebSocket connection manager beneficial in large applications?",
    options: [
      "It allows centralized handling of all WebSocket connections, making it easier to manage and scale",
      "It reduces the need for multiple WebSocket connections in the application",
      "It provides a single place to handle WebSocket events and reconnect logic",
      "All of the above",
      "None of the above"
    ],
    correctAnswer: "D",
    explanation: "A centralized WebSocket connection manager centralizes connection handling, reduces the need for multiple connections, and simplifies reconnect logic, which is crucial for large applications with complex WebSocket requirements.",
    answerDescription: "",
    domain: "Architecture Patterns",
    competency: "Design Patterns"
  }
]
