import { type Question } from "./kcna-questions";

export const data: Question[] = [
  {
    id: 1,
    question: "What is the primary goal of Content Security Policy (CSP)?",
    options: [
      "To increase page load speed",
      "To encrypt all data sent from the server",
      "To mitigate cross-site scripting (XSS) attacks",
      "To enforce user authentication",
      "To validate cookies"
    ],
    correctAnswer: "C",
    explanation: "CSP is designed to reduce XSS risks by specifying which dynamic resources are allowed to load.",
    answerDescription: "",
    domain: "Browser Security",
    competency: "CSP"
  },
  {
    id: 2,
    question: "What is the purpose of the `HttpOnly` flag on cookies?",
    options: [
      "To allow access from JavaScript",
      "To prevent the cookie from being sent over HTTPS",
      "To ensure the cookie is only available to the server",
      "To set cookie expiration",
      "To prevent cookie duplication"
    ],
    correctAnswer: "C",
    explanation: "`HttpOnly` cookies are not accessible via JavaScript, which helps prevent XSS attacks from stealing cookies.",
    answerDescription: "",
    domain: "Browser Security",
    competency: "Cookies"
  },
  {
    id: 3,
    question: "What type of attack does input sanitization primarily prevent?",
    options: [
      "CSRF",
      "XSS",
      "DDoS",
      "SQL Injection",
      "MITM"
    ],
    correctAnswer: "B",
    explanation: "Sanitizing inputs prevents malicious scripts from being injected into the DOM, a core part of defending against XSS.",
    answerDescription: "",
    domain: "Browser Security",
    competency: "Sanitization"
  },
  {
    id: 4,
    question: "Which attribute ensures a cookie is only sent over HTTPS connections?",
    options: [
      "Secure",
      "HttpOnly",
      "SameSite",
      "Expires",
      "Domain"
    ],
    correctAnswer: "A",
    explanation: "The `Secure` flag ensures cookies are only sent over encrypted HTTPS connections.",
    answerDescription: "",
    domain: "Browser Security",
    competency: "Cookies"
  },
  {
    id: 5,
    question: "What is a key protection provided by the `SameSite` attribute in cookies?",
    options: [
      "Prevents XSS",
      "Controls third-party access to cookies",
      "Sets cookie expiration",
      "Encrypts cookie values",
      "Protects from DNS spoofing"
    ],
    correctAnswer: "B",
    explanation: "`SameSite` helps defend against CSRF by controlling whether cookies are sent with cross-site requests.",
    answerDescription: "",
    domain: "Browser Security",
    competency: "Cookies"
  },
  {
    id: 6,
    question: "Which of these is a secure authentication method for SPAs?",
    options: [
      "Storing tokens in localStorage",
      "Embedding user credentials in the frontend",
      "Using HttpOnly cookies with secure flags",
      "Passing credentials in URL params",
      "Using GET requests for login"
    ],
    correctAnswer: "C",
    explanation: "HttpOnly cookies with secure and SameSite flags are a secure method to manage session tokens.",
    answerDescription: "",
    domain: "Browser Security",
    competency: "Authentication"
  },
  {
    id: 7,
    question: "Why is `innerHTML` discouraged when injecting dynamic content in React?",
    options: [
      "It can break component re-renders",
      "It slows down page rendering",
      "It increases the risk of XSS attacks",
      "It's not supported in modern browsers",
      "It triggers re-renders on every state change"
    ],
    correctAnswer: "C",
    explanation: "`innerHTML` bypasses React's rendering and exposes the app to XSS vulnerabilities.",
    answerDescription: "",
    domain: "Browser Security",
    competency: "Sanitization"
  },
  {
    id: 8,
    question: "Which method is best to prevent malicious scripts from being executed?",
    options: [
      "Enable CORS",
      "Use cookies",
      "Apply strict CSP rules",
      "Use HTTP instead of HTTPS",
      "Minify JavaScript"
    ],
    correctAnswer: "C",
    explanation: "Strict CSP rules block untrusted scripts from being executed, reducing the attack surface.",
    answerDescription: "",
    domain: "Browser Security",
    competency: "CSP"
  },
  {
    id: 9,
    question: "Which of these best describes a Cross-Site Scripting (XSS) attack?",
    options: [
      "Executing SQL commands on a remote server",
      "Using invalid JWT tokens",
      "Injecting malicious scripts into trusted websites",
      "Manipulating HTTP headers",
      "Replaying API calls"
    ],
    correctAnswer: "C",
    explanation: "XSS attacks involve injecting scripts into web apps viewed by other users.",
    answerDescription: "",
    domain: "Browser Security",
    competency: "XSS"
  },
  {
    id: 10,
    question: "What is one limitation of using localStorage for sensitive tokens?",
    options: [
      "It requires server-side access",
      "It can be read by third-party APIs",
      "It is vulnerable to XSS attacks",
      "It cannot store large objects",
      "It deletes data on page reload"
    ],
    correctAnswer: "C",
    explanation: "localStorage is accessible via JavaScript, making it vulnerable to token theft via XSS.",
    answerDescription: "",
    domain: "Browser Security",
    competency: "Authentication"
  },
  {
    id: 11,
    question: "Which HTTP header is used to instruct the browser to only connect over HTTPS?",
    options: [
      "Strict-Transport-Security",
      "X-Content-Type-Options",
      "X-Frame-Options",
      "Referrer-Policy",
      "Content-Security-Policy"
    ],
    correctAnswer: "A",
    explanation: "`Strict-Transport-Security` ensures the browser only uses secure HTTPS connections.",
    answerDescription: "",
    domain: "Browser Security",
    competency: "Headers"
  },
  {
    id: 12,
    question: "What is a potential risk of enabling `dangerouslySetInnerHTML` in React?",
    options: [
      "Memory leak",
      "Routing failure",
      "Performance lag",
      "Cross-site scripting",
      "Broken event handlers"
    ],
    correctAnswer: "D",
    explanation: "`dangerouslySetInnerHTML` disables React's protections, opening up XSS attack vectors.",
    answerDescription: "",
    domain: "Browser Security",
    competency: "XSS"
  },
  {
    id: 13,
    question: "Why is it recommended to validate tokens on every WebSocket or API request?",
    options: [
      "To avoid 404 errors",
      "To ensure valid user sessions",
      "To increase bandwidth usage",
      "To bypass firewall checks",
      "To store session state in the frontend"
    ],
    correctAnswer: "B",
    explanation: "Token validation ensures the request is made by an authenticated and authorized user.",
    answerDescription: "",
    domain: "Browser Security",
    competency: "Authentication"
  },
  {
    id: 14,
    question: "Which of the following best prevents a clickjacking attack?",
    options: [
      "Setting `X-Frame-Options` to DENY",
      "Using `window.open` for all links",
      "Setting cookies with SameSite=None",
      "Using GET requests for authentication",
      "Disabling JavaScript"
    ],
    correctAnswer: "A",
    explanation: "`X-Frame-Options: DENY` prevents the site from being embedded in iframes, mitigating clickjacking.",
    answerDescription: "",
    domain: "Browser Security",
    competency: "Headers"
  },
  {
    id: 15,
    question: "How can React developers avoid XSS vulnerabilities from user-generated content?",
    options: [
      "Use useEffect to escape strings",
      "Only use components from NPM",
      "Sanitize inputs before rendering",
      "Store all data in cookies",
      "Disable CSP"
    ],
    correctAnswer: "C",
    explanation: "Input sanitization prevents the injection of malicious scripts in the DOM.",
    answerDescription: "",
    domain: "Browser Security",
    competency: "Sanitization"
  },
  {
    id: 16,
    question: "Which is the best practice for handling expired authentication tokens in SPAs?",
    options: [
      "Redirect to login on 200 OK",
      "Store tokens in a variable",
      "Refresh the page",
      "Detect 401 errors and trigger logout or refresh",
      "Ignore the error"
    ],
    correctAnswer: "D",
    explanation: "SPAs should handle 401 responses and take appropriate actions like redirecting or refreshing the token.",
    answerDescription: "",
    domain: "Browser Security",
    competency: "Authentication"
  },
  {
    id: 17,
    question: "What does a CSP rule of `default-src 'self'` allow?",
    options: [
      "Only scripts from the same domain",
      "All inline styles",
      "All resources from any origin",
      "No images to be loaded",
      "Inline scripts to run"
    ],
    correctAnswer: "A",
    explanation: "`default-src 'self'` allows resources to load only from the same origin as the page.",
    answerDescription: "",
    domain: "Browser Security",
    competency: "CSP"
  },
  {
    id: 18,
    question: "Why should you avoid storing JWTs in localStorage for production apps?",
    options: [
      "localStorage is slow",
      "JWTs require cookies",
      "localStorage exposes tokens to XSS attacks",
      "localStorage encrypts tokens by default",
      "JWTs expire too quickly"
    ],
    correctAnswer: "C",
    explanation: "Any XSS vulnerability in your app makes localStorage accessible to attackers.",
    answerDescription: "",
    domain: "Browser Security",
    competency: "Authentication"
  },
  {
    id: 19,
    question: "Which of the following is the most secure way to set cookies?",
    options: [
      "No flags are needed",
      "Use Secure, HttpOnly, and SameSite=Strict",
      "Use Secure only",
      "Use Expires only",
      "Use HttpOnly and Domain"
    ],
    correctAnswer: "B",
    explanation: "Combining Secure, HttpOnly, and SameSite=Strict ensures cookies are encrypted, inaccessible to JS, and protected from CSRF.",
    answerDescription: "",
    domain: "Browser Security",
    competency: "Cookies"
  },
  {
    id: 20,
    question: "What is the role of `X-Content-Type-Options: nosniff` header?",
    options: [
      "For caching optimization",
      "To prevent MIME type confusion",
      "To block JavaScript",
      "To restrict API access",
      "To enforce HTTPS"
    ],
    correctAnswer: "B",
    explanation: "This header stops the browser from interpreting files as a different MIME type than declared, mitigating attacks.",
    answerDescription: "",
    domain: "Browser Security",
    competency: "Headers"
  }
];
