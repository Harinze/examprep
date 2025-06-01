import { type Question } from "./kcna-questions";

export const data: Question[]  = [
  {
    id: 1,
    question: "What is a primary benefit of WebSockets over HTTP for real-time applications?",
    options: [
      "Lower bandwidth costs",
      "Stateless architecture",
      "Support for RESTful principles",
      "Bi-directional persistent connection"
    ],
    correctAnswer: "D",
    explanation: "WebSockets allow for a persistent, full-duplex connection, ideal for real-time communication.",
    answerDescription: "",
    domain: "WebSocket Fundamentals",
    competency: "Comparison with HTTP"
  },
  {
    id: 2,
    question: "What HTTP header initiates the WebSocket handshake?",
    options: [
      "Upgrade: websocket",
      "Connection: keep-alive",
      "Sec-WebSocket-Version",
      "Authorization"
    ],
    correctAnswer: "A",
    explanation: "The 'Upgrade: websocket' header is crucial to switch from HTTP to WebSocket protocol.",
    answerDescription: "",
    domain: "WebSocket Fundamentals",
    competency: "Handshake"
  },
  {
    id: 3,
    question: "Which of the following use cases is best suited for WebSockets?",
    options: [
      "Static blog hosting",
      "Authentication pages",
      "Real-time collaborative editing",
      "File uploads"
    ],
    correctAnswer: "C",
    explanation: "WebSockets are ideal for continuous bi-directional communication, like collaborative apps.",
    answerDescription: "",
    domain: "WebSocket Fundamentals",
    competency: "Use Cases"
  },
  {
    id: 4,
    question: "How does a WebSocket client typically handle incoming JSON messages?",
    options: [
      "Using JSON.stringify()",
      "By directly injecting into DOM",
      "With JSON.parse() on 'message' event",
      "Using WebWorker postMessage"
    ],
    correctAnswer: "C",
    explanation: "JSON data received from the WebSocket is parsed using JSON.parse in the 'message' event.",
    answerDescription: "",
    domain: "Integration",
    competency: "Parsing"
  },
  {
    id: 5,
    question: "What hook pattern is common for encapsulating WebSocket logic in React?",
    options: [
      "useReducer",
      "useCallback",
      "useSocketListener",
      "useForm"
    ],
    correctAnswer: "C",
    explanation: "`useSocketListener` (custom hook) helps encapsulate connection, events, and cleanup.",
    answerDescription: "",
    domain: "Integration",
    competency: "React Hooks"
  },
  {
    id: 6,
    question: "What happens when the WebSocket connection closes unexpectedly?",
    options: [
      "It automatically reconnects",
      "The server restarts",
      "The client can detect it via the 'close' event",
      "An HTTP fallback is triggered"
    ],
    correctAnswer: "C",
    explanation: "You can detect an unexpected disconnect using the 'close' event and implement reconnection.",
    answerDescription: "",
    domain: "Lifecycle Management",
    competency: "Disconnects"
  },
  {
    id: 7,
    question: "How can you securely authenticate WebSocket connections?",
    options: [
      "With a JSON body",
      "By passing a token in the query string or headers during the handshake",
      "Using React Context",
      "Via Redux middleware"
    ],
    correctAnswer: "B",
    explanation: "Tokens are often passed in query params or headers during the initial handshake.",
    answerDescription: "",
    domain: "Authentication & Security",
    competency: "Handshake Security"
  },
  {
    id: 8,
    question: "Which strategy is best for reconnecting WebSocket connections on failure?",
    options: [
      "Linear retry",
      "Retry only once",
      "Exponential backoff with jitter",
      "Synchronous retry loop"
    ],
    correctAnswer: "C",
    explanation: "Exponential backoff with jitter prevents flooding the server with connection attempts.",
    answerDescription: "",
    domain: "Resilience",
    competency: "Reconnect Strategy"
  },
  {
    id: 9,
    question: "Which protocol is used for encrypted WebSocket communication?",
    options: [
      "ws://",
      "wss://",
      "https://",
      "ssl://"
    ],
    correctAnswer: "B",
    explanation: "`wss://` is the secure version of WebSockets, similar to `https://`.",
    answerDescription: "",
    domain: "Authentication & Security",
    competency: "Encryption"
  },
  {
    id: 10,
    question: "In a React app, when should you ideally close a WebSocket connection?",
    options: [
      "On every render",
      "Inside the event handler",
      "On component unmount",
      "When the user clicks a button"
    ],
    correctAnswer: "C",
    explanation: "You should close WebSocket connections during the cleanup phase (e.g., useEffect cleanup).",
    answerDescription: "",
    domain: "Integration",
    competency: "Lifecycle"
  },
  {
    id: 11,
    question: "Which WebSocket event is triggered when a new message is received from the server?",
    options: [
      "'open'",
      "'close'",
      "'message'",
      "'send'"
    ],
    correctAnswer: "C",
    explanation: "The 'message' event is triggered when data is received from the WebSocket server.",
    answerDescription: "",
    domain: "WebSocket Fundamentals",
    competency: "Event Handling"
  },
  {
    id: 12,
    question: "What does the WebSocket `readyState` value of `1` represent?",
    options: [
      "Connecting",
      "Open",
      "Closing",
      "Closed"
    ],
    correctAnswer: "B",
    explanation: "`1` means the WebSocket connection is open and ready to communicate.",
    answerDescription: "",
    domain: "WebSocket Fundamentals",
    competency: "State Management"
  },
  {
    id: 13,
    question: "What’s the main reason to use a singleton WebSocket instance in large React apps?",
    options: [
      "To avoid re-renders",
      "To reduce useEffect dependencies",
      "To maintain a single shared connection across components",
      "To support SSR"
    ],
    correctAnswer: "C",
    explanation: "A singleton pattern ensures that only one connection is shared across the app to avoid redundancy.",
    answerDescription: "",
    domain: "Architecture",
    competency: "Design Patterns"
  },
  {
    id: 14,
    question: "Which of the following best helps prevent stale data in WebSocket-connected apps?",
    options: [
      "Using Redux Toolkit Query",
      "Using `useEffect` without dependencies",
      "Using ref-based data synchronization",
      "Synchronizing updates with timestamps or versioning"
    ],
    correctAnswer: "D",
    explanation: "Using timestamps or versioning avoids overwriting fresh data with older updates.",
    answerDescription: "",
    domain: "State Management",
    competency: "Data Integrity"
  },
  {
    id: 15,
    question: "What is a common pattern to route incoming WebSocket messages in the frontend?",
    options: [
      "By HTTP method",
      "Using switch-case on a `type` field",
      "By Redux middleware only",
      "Using GraphQL queries"
    ],
    correctAnswer: "B",
    explanation: "Routing is often handled by switching on a `type` field in the incoming message JSON.",
    answerDescription: "",
    domain: "Message Routing",
    competency: "Pattern Matching"
  },
  {
    id: 16,
    question: "Which package is commonly used for mocking WebSockets in Jest tests?",
    options: [
      "jest-websocket-mock",
      "msw",
      "supertest",
      "redux-mock-store"
    ],
    correctAnswer: "A",
    explanation: "`jest-websocket-mock` helps simulate WebSocket servers for frontend testing.",
    answerDescription: "",
    domain: "Testing",
    competency: "Mocking"
  },
  {
    id: 17,
    question: "How do you ensure messages sent before a connection is open aren’t lost?",
    options: [
      "Use WebRTC instead",
      "Log the messages",
      "Queue messages until `readyState` is OPEN",
      "Ignore the readyState"
    ],
    correctAnswer: "C",
    explanation: "Messages should be queued and sent only after the connection is confirmed open.",
    answerDescription: "",
    domain: "Performance",
    competency: "Message Reliability"
  },
  {
    id: 18,
    question: "What is a potential downside of sending large messages over WebSocket?",
    options: [
      "They automatically get split into multiple requests",
      "They block the event loop",
      "They require JSON.stringify twice",
      "They can cause frame fragmentation or latency"
    ],
    correctAnswer: "D",
    explanation: "Large messages may suffer from fragmentation or delay over WebSocket frames.",
    answerDescription: "",
    domain: "Performance",
    competency: "Payload Handling"
  },
  {
    id: 19,
    question: "How do you verify a token during a WebSocket handshake?",
    options: [
      "Using cookies only",
      "Via a custom `Authorization` header or query param",
      "It is not possible",
      "Using JWT in localStorage"
    ],
    correctAnswer: "B",
    explanation: "The token should be passed during the handshake, often in headers or query string.",
    answerDescription: "",
    domain: "Authentication & Security",
    competency: "Handshake Validation"
  },
  {
    id: 20,
    question: "What does the ping/pong mechanism help detect in WebSockets?",
    options: [
      "Token expiration",
      "Data sync issues",
      "Client-server time mismatch",
      "Dead connections"
    ],
    correctAnswer: "D",
    explanation: "Ping/pong frames help verify the connection is still alive, detecting timeouts.",
    answerDescription: "",
    domain: "Resilience",
    competency: "Heartbeat Detection"
  },
  {
    id: 21,
    question: "What should your app do if it receives malformed data over WebSocket?",
    options: [
      "Crash the UI",
      "Display it anyway",
      "Log and discard the message",
      "Retry sending the same message"
    ],
    correctAnswer: "C",
    explanation: "Malformed messages should be safely logged and ignored to preserve app integrity.",
    answerDescription: "",
    domain: "Error Handling",
    competency: "Data Validation"
  },
  {
    id: 22,
    question: "Which library enables automatic reconnection with customizable strategies?",
    options: [
      "ws",
      "sockjs",
      "ReconnectingWebSocket",
      "axios"
    ],
    correctAnswer: "C",
    explanation: "`ReconnectingWebSocket` adds reconnection logic to standard WebSocket clients.",
    answerDescription: "",
    domain: "Resilience",
    competency: "Client Libraries"
  },
  {
    id: 23,
    question: "In a Redux app, how do you typically propagate WebSocket messages?",
    options: [
      "By emitting them to props",
      "Using Redux actions and reducers",
      "Calling setState directly",
      "Using GraphQL subscriptions"
    ],
    correctAnswer: "B",
    explanation: "WebSocket messages are dispatched as Redux actions and handled by reducers.",
    answerDescription: "",
    domain: "State Management",
    competency: "Redux Integration"
  },
  {
    id: 24,
    question: "Which of the following is an effective scaling strategy for WebSocket servers?",
    options: [
      "Serve static content via WebSockets",
      "Use load balancers with sticky sessions",
      "Disable message batching",
      "Restart the server periodically"
    ],
    correctAnswer: "B",
    explanation: "Sticky sessions ensure the client always connects to the same instance across a cluster.",
    answerDescription: "",
    domain: "Scaling",
    competency: "Infrastructure"
  },
  {
    id: 25,
    question: "How do you prevent message spoofing from clients?",
    options: [
      "By using HTTPS",
      "Validating message signatures and sender identity on server",
      "Encrypting data client-side",
      "Minifying client code"
    ],
    correctAnswer: "B",
    explanation: "Server-side validation ensures the authenticity of received messages.",
    answerDescription: "",
    domain: "Security",
    competency: "Spoofing Prevention"
  },
  {
    id: 26,
    question: "What is multiplexing in WebSocket architecture?",
    options: [
      "Using multiple tabs for connection",
      "Sending multiple protocols over HTTP",
      "Sharing one connection for multiple message types",
      "Encoding binary and JSON together"
    ],
    correctAnswer: "C",
    explanation: "Multiplexing enables handling multiple topics or channels through one connection.",
    answerDescription: "",
    domain: "Architecture",
    competency: "Connection Optimization"
  },
  {
    id: 27,
    question: "What is a Pub/Sub model in frontend WebSocket usage?",
    options: [
      "Each client can only send messages",
      "Clients subscribe to topics and receive updates published by server",
      "Publish data to Web APIs",
      "Push-only subscription model"
    ],
    correctAnswer: "B",
    explanation: "In Pub/Sub, clients subscribe to specific channels and receive messages broadcasted to them.",
    answerDescription: "",
    domain: "Architecture",
    competency: "Design Patterns"
  },
  {
    id: 28,
    question: "What’s a common way to avoid race conditions with real-time data in React?",
    options: [
      "Use uncontrolled components",
      "Use useEffect without cleanup",
      "Track update timestamps and ignore stale ones",
      "Send data twice for confirmation"
    ],
    correctAnswer: "C",
    explanation: "Timestamps help resolve which update is most recent and prevent race condition issues.",
    answerDescription: "",
    domain: "State Management",
    competency: "Concurrency"
  },
  {
    id: 29,
    question: "How can CPU-heavy WebSocket message processing be offloaded in the browser?",
    options: [
      "Use CSS animations",
      "Move logic to a Web Worker",
      "Use useMemo",
      "Use Service Workers"
    ],
    correctAnswer: "B",
    explanation: "Web Workers handle CPU-intensive tasks in a separate thread, keeping the UI responsive.",
    answerDescription: "",
    domain: "Performance",
    competency: "Optimization"
  },
  {
    id: 30,
    question: "When testing a WebSocket-based React component, which is MOST important?",
    options: [
      "Simulating server messages and asserting UI response",
      "Checking component mount only",
      "Mocking Redux store",
      "Running full end-to-end test"
    ],
    correctAnswer: "A",
    explanation: "Validating that the component reacts correctly to socket messages is critical.",
    answerDescription: "",
    domain: "Testing",
    competency: "Behavioral Testing"
  }
];
