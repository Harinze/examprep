import type { Question } from "./kcna-questions";


export const data: Question[] = [
  {
    id: 1,
    question: "What does REST stand for?",
    options: [
      "Remote Event Service Transport",
      "Representational State Transfer",
      "Real-time Streaming Engine",
      "Request State Transformation",
      "None of the above"
    ],
    correctAnswer: "B",
    explanation: "REST stands for Representational State Transfer, an architectural style for distributed systems.",
    answerDescription: "",
    domain: "REST API",
    competency: "Fundamentals"
  },
  {
    id: 2,
    question: "Which HTTP method is used to retrieve data from a REST API?",
    options: [
      "GET",
      "POST",
      "PUT",
      "DELETE",
      "PATCH"
    ],
    correctAnswer: "A",
    explanation: "The GET method is used to retrieve data from a REST API without modifying the data.",
    answerDescription: "",
    domain: "REST API",
    competency: "HTTP Methods"
  },
  {
    id: 3,
    question: "Which HTTP status code is used to indicate that a resource was successfully created?",
    options: [
      "200 OK",
      "201 Created",
      "400 Bad Request",
      "500 Internal Server Error",
      "404 Not Found"
    ],
    correctAnswer: "B",
    explanation: "The HTTP status code 201 Created indicates that a resource was successfully created.",
    answerDescription: "",
    domain: "REST API",
    competency: "HTTP Status Codes"
  },
  {
    id: 4,
    question: "What is the purpose of the 'Accept' header in an HTTP request?",
    options: [
      "To specify the expected response content type",
      "To provide authentication credentials",
      "To define the data format of the request",
      "To set cookies for the request",
      "None of the above"
    ],
    correctAnswer: "A",
    explanation: "The 'Accept' header is used to specify the response format, such as JSON or XML.",
    answerDescription: "",
    domain: "REST API",
    competency: "Headers"
  },
  {
    id: 5,
    question: "Which of the following HTTP methods is idempotent, meaning repeated requests have the same effect?",
    options: [
      "POST",
      "GET",
      "PUT",
      "PATCH",
      "DELETE"
    ],
    correctAnswer: "C",
    explanation: "PUT is idempotent, meaning repeated requests to update the same resource have the same effect.",
    answerDescription: "",
    domain: "REST API",
    competency: "HTTP Methods"
  },
  {
    id: 6,
    question: "What is the primary purpose of API versioning in REST APIs?",
    options: [
      "To keep track of changes in API documentation",
      "To allow backward compatibility when making breaking changes",
      "To reduce the response time of API calls",
      "To avoid the use of HTTP headers",
      "None of the above"
    ],
    correctAnswer: "B",
    explanation: "API versioning is used to maintain backward compatibility while introducing changes to the API.",
    answerDescription: "",
    domain: "REST API",
    competency: "Versioning"
  },
  {
    id: 7,
    question: "What does the HTTP status code 404 indicate?",
    options: [
      "Request Timeout",
      "Internal Server Error",
      "Resource Not Found",
      "Forbidden Access",
      "Bad Request"
    ],
    correctAnswer: "C",
    explanation: "The 404 status code indicates that the requested resource could not be found on the server.",
    answerDescription: "",
    domain: "REST API",
    competency: "HTTP Status Codes"
  },
  {
    id: 8,
    question: "Which of the following HTTP methods is used to delete a resource from a REST API?",
    options: [
      "GET",
      "POST",
      "PUT",
      "DELETE",
      "PATCH"
    ],
    correctAnswer: "D",
    explanation: "The DELETE method is used to remove a resource from the server.",
    answerDescription: "",
    domain: "REST API",
    competency: "HTTP Methods"
  },
  {
    id: 9,
    question: "Which header is used to send authentication credentials in a REST API request?",
    options: [
      "Authorization",
      "Content-Type",
      "User-Agent",
      "Accept",
      "Cookie"
    ],
    correctAnswer: "A",
    explanation: "The 'Authorization' header is used to send authentication credentials, such as a Bearer token.",
    answerDescription: "",
    domain: "REST API",
    competency: "Authentication"
  },
  {
    id: 10,
    question: "What does the HTTP status code 500 indicate?",
    options: [
      "Internal Server Error",
      "Request Timeout",
      "Bad Gateway",
      "Service Unavailable",
      "Forbidden Access"
    ],
    correctAnswer: "A",
    explanation: "The 500 status code indicates an internal server error, meaning something went wrong on the server side.",
    answerDescription: "",
    domain: "REST API",
    competency: "HTTP Status Codes"
  },
  {
    id: 11,
    question: "How can you handle errors in a REST API?",
    options: [
      "Using try-catch blocks on the client-side",
      "Using custom error messages in the response body",
      "Logging errors to the server",
      "All of the above",
      "None of the above"
    ],
    correctAnswer: "D",
    explanation: "Errors can be handled in multiple ways, including using try-catch blocks, custom error messages, and logging errors.",
    answerDescription: "",
    domain: "REST API",
    competency: "Error Handling"
  },
  {
    id: 12,
    question: "Which of the following is a common practice for improving REST API performance?",
    options: [
      "Using pagination for large data sets",
      "Optimizing database queries",
      "Caching frequent responses",
      "All of the above",
      "None of the above"
    ],
    correctAnswer: "D",
    explanation: "Improving performance can be achieved by using pagination, optimizing database queries, and caching frequent responses.",
    answerDescription: "",
    domain: "REST API",
    competency: "Performance Optimization"
  },
  {
    id: 13,
    question: "What is the difference between REST and GraphQL?",
    options: [
      "REST is a query language; GraphQL is an API architecture",
      "REST sends all data at once; GraphQL allows querying specific data",
      "REST requires fixed endpoints; GraphQL allows flexible queries",
      "Both B and C",
      "None of the above"
    ],
    correctAnswer: "D",
    explanation: "GraphQL allows more flexible queries and retrieving only the necessary data, whereas REST typically sends all data associated with an endpoint.",
    answerDescription: "",
    domain: "REST API",
    competency: "Comparison"
  },
  {
    id: 14,
    question: "Which of the following HTTP methods is used for partial updates of a resource?",
    options: [
      "POST",
      "PUT",
      "DELETE",
      "PATCH",
      "GET"
    ],
    correctAnswer: "D",
    explanation: "The PATCH method is used for making partial updates to an existing resource.",
    answerDescription: "",
    domain: "REST API",
    competency: "HTTP Methods"
  },
  {
    id: 15,
    question: "How should sensitive information like passwords be transmitted in REST API requests?",
    options: [
      "Over HTTP",
      "Over HTTPS",
      "In URL parameters",
      "In the request body",
      "None of the above"
    ],
    correctAnswer: "B",
    explanation: "Sensitive information like passwords should always be transmitted securely using HTTPS to encrypt the data.",
    answerDescription: "",
    domain: "REST API",
    competency: "Security"
  },
  {
    id: 16,
    question: "What is the purpose of HTTP status codes?",
    options: [
      "To identify the type of data being transferred",
      "To indicate the result of the HTTP request",
      "To show the time it took to process a request",
      "To indicate the HTTP method being used",
      "None of the above"
    ],
    correctAnswer: "B",
    explanation: "HTTP status codes indicate the outcome of an HTTP request, such as success, error, or redirection.",
    answerDescription: "",
    domain: "REST API",
    competency: "HTTP Status Codes"
  },
  {
    id: 17,
    question: "What does the 'Content-Type' header specify?",
    options: [
      "The type of data being sent by the server",
      "The type of data being sent by the client",
      "The format of the request body",
      "The encoding of the request",
      "None of the above"
    ],
    correctAnswer: "C",
    explanation: "The 'Content-Type' header specifies the format of the request or response body (e.g., application/json).",
    answerDescription: "",
    domain: "REST API",
    competency: "Headers"
  },
  {
    id: 18,
    question: "What does the 405 HTTP status code indicate?",
    options: [
      "Method Not Allowed",
      "Internal Server Error",
      "Service Unavailable",
      "Forbidden Access",
      "Unauthorized"
    ],
    correctAnswer: "A",
    explanation: "The 405 status code indicates that the HTTP method used is not allowed for the requested resource.",
    answerDescription: "",
    domain: "REST API",
    competency: "HTTP Status Codes"
  },
  {
    id: 19,
    question: "Which of the following is a valid HTTP header for controlling caching behavior in REST APIs?",
    options: [
      "Cache-Control",
      "Authorization",
      "Location",
      "Content-Encoding",
      "None of the above"
    ],
    correctAnswer: "A",
    explanation: "The 'Cache-Control' header is used to specify caching policies for the client and server.",
    answerDescription: "",
    domain: "REST API",
    competency: "Caching"
  },
  {
    id: 20,
    question: "What is a commonly used method for handling authentication in REST APIs?",
    options: [
      "Session-based authentication",
      "Token-based authentication (JWT)",
      "OAuth 2.0",
      "All of the above",
      "None of the above"
    ],
    correctAnswer: "D",
    explanation: "REST APIs commonly use session-based authentication, token-based authentication (JWT), or OAuth 2.0 for handling authentication.",
    answerDescription: "",
    domain: "REST API",
    competency: "Authentication"
  }
]
