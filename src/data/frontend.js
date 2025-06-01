export const questions = [
    {
        id: 1,
        question: "What is the purpose of the useCallback hook in React?",
        options: [
            "To memoize the returned value of a function",
            "To create a new function every render",
            "To prevent unnecessary re-renders by memoizing a callback",
            "To execute a function after every render"
        ],
        correctAnswer: "C",
        explanation: "useCallback returns a memoized version of the callback that only changes if one of the dependencies has changed.",
        answerDescription: "",
        domain: "React.js",
        competency: "Hooks"
    },
    {
        id: 2,
        question: "Why would you use useMemo instead of useEffect?",
        options: [
            "To execute code on mount",
            "To perform side effects",
            "To memoize expensive calculations",
            "To fetch data from APIs"
        ],
        correctAnswer: "C",
        explanation: "useMemo is used to memoize the result of expensive computations, improving performance by avoiding recalculations on every render.",
        answerDescription: "",
        domain: "React.js",
        competency: "Hooks"
    },
    {
        id: 3,
        question: "What is the difference between controlled and uncontrolled components in React?",
        options: [
            "Controlled components rely on state, uncontrolled components do not",
            "Controlled components cannot use refs",
            "Uncontrolled components manage state through Redux",
            "Controlled components don’t use events"
        ],
        correctAnswer: "A",
        explanation: "Controlled components derive their input values from React state, while uncontrolled components store their state internally in the DOM.",
        answerDescription: "",
        domain: "React.js",
        competency: "Forms"
    },
    {
        id: 4,
        question: "What does React.memo do?",
        options: [
            "Forces a re-render of a component",
            "Prevents a component from updating",
            "Memoizes the rendered output of a functional component",
            "Caches the entire component tree"
        ],
        correctAnswer: "C",
        explanation: "React.memo is a higher-order component that prevents unnecessary re-renders by memoizing the rendered output based on props.",
        answerDescription: "",
        domain: "React.js",
        competency: "Performance Optimization"
    },
    {
        id: 5,
        question: "Which method ensures side-effects like API calls are made only after a component has mounted?",
        options: [
            "useEffect with empty dependency array",
            "useMemo",
            "useLayoutEffect",
            "componentWillUnmount"
        ],
        correctAnswer: "A",
        explanation: "useEffect with an empty dependency array runs once after the component is mounted, ideal for side-effects like API calls.",
        answerDescription: "",
        domain: "React.js",
        competency: "Hooks"
    },
    {
        id: 6,
        question: "Why would you use useReducer over useState?",
        options: [
            "For simpler state updates",
            "To manage side effects",
            "For complex state logic or multiple sub-values",
            "To reduce component rendering"
        ],
        correctAnswer: "C",
        explanation: "useReducer is suitable for managing complex state logic involving multiple sub-values or when the next state depends on the previous one.",
        answerDescription: "",
        domain: "React.js",
        competency: "Hooks"
    },
    {
        id: 7,
        question: "How can you share logic across multiple React components?",
        options: [
            "Using JSX",
            "Using Custom Hooks",
            "Using render props only",
            "Using HOCs exclusively"
        ],
        correctAnswer: "B",
        explanation: "Custom Hooks allow logic to be reused between components while keeping code concise and readable.",
        answerDescription: "",
        domain: "React.js",
        competency: "Hooks & Code Reuse"
    },
    {
        id: 8,
        question: "What is the best way to handle global state in a large React application?",
        options: [
            "Using local state only",
            "Using useEffect everywhere",
            "Using Context API with useReducer or a state management library like Redux",
            "Passing props deeply"
        ],
        correctAnswer: "C",
        explanation: "For global state, using Context API with useReducer or Redux helps manage and scale state logic efficiently.",
        answerDescription: "",
        domain: "React.js",
        competency: "State Management"
    },
    {
        id: 9,
        question: "What problem does the key prop solve in React lists?",
        options: [
            "Prevents unnecessary re-renders",
            "Helps React identify which items have changed, been added, or removed",
            "Improves CSS styling",
            "Creates unique DOM IDs"
        ],
        correctAnswer: "B",
        explanation: "The key prop helps React identify which items in a list have changed to enable efficient updates and reconciliation.",
        answerDescription: "",
        domain: "React.js",
        competency: "Rendering & Performance"
    },
    {
        id: 10,
        question: "Which hook would you use to reference a DOM element?",
        options: [
            "useMemo",
            "useEffect",
            "useRef",
            "useCallback"
        ],
        correctAnswer: "C",
        explanation: "useRef allows access to DOM elements or persistent values across renders without triggering a re-render.",
        answerDescription: "",
        domain: "React.js",
        competency: "Refs & DOM Interaction"
    },
    {
        id: 11,
        question: "What is reconciliation in React?",
        options: [
            "The process of resolving errors",
            "The process of updating the virtual DOM and syncing with the real DOM",
            "The process of merging two components",
            "The process of restarting a component lifecycle"
        ],
        correctAnswer: "B",
        explanation: "Reconciliation is how React updates the virtual DOM and figures out the minimal set of changes needed for the real DOM.",
        answerDescription: "",
        domain: "React.js",
        competency: "Rendering"
    },
    {
        id: 12,
        question: "Why should you avoid mutating state directly in React?",
        options: [
            "It causes a memory leak",
            "It triggers unnecessary re-renders",
            "It bypasses React’s internal tracking and won’t trigger a re-render",
            "It causes the app to crash"
        ],
        correctAnswer: "C",
        explanation: "Mutating state directly bypasses React's change detection, so the component may not re-render as expected.",
        answerDescription: "",
        domain: "React.js",
        competency: "State Management"
    },
    {
        id: 13,
        question: "What does the Context API help solve?",
        options: [
            "Excessive DOM manipulation",
            "Performance bottlenecks",
            "Prop drilling in deeply nested components",
            "Asynchronous data fetching"
        ],
        correctAnswer: "C",
        explanation: "Context API provides a way to share values across the component tree without passing props at every level.",
        answerDescription: "",
        domain: "React.js",
        competency: "Context"
    },
    {
        id: 14,
        question: "Which lifecycle method is replaced by the useEffect hook?",
        options: [
            "componentDidMount",
            "shouldComponentUpdate",
            "getDerivedStateFromProps",
            "componentWillUnmount only"
        ],
        correctAnswer: "A",
        explanation: "useEffect with an empty dependency array mimics componentDidMount behavior.",
        answerDescription: "",
        domain: "React.js",
        competency: "Lifecycle & Hooks"
    },
    {
        id: 15,
        question: "What is the virtual DOM in React?",
        options: [
            "A direct reference to the real DOM",
            "A simplified version of the DOM kept in memory",
            "A server-rendered version of the DOM",
            "An external library for DOM manipulation"
        ],
        correctAnswer: "B",
        explanation: "The virtual DOM is an in-memory representation of the real DOM. React uses it to perform efficient updates.",
        answerDescription: "",
        domain: "React.js",
        competency: "Rendering"
    },
    {
        id: 16,
        question: "What is the primary benefit of using `getServerSideProps` in Next.js?",
        options: [
            "To generate static content at build time",
            "To fetch data client-side after rendering",
            "To fetch data server-side on every request",
            "To hydrate pages with client-specific data"
        ],
        correctAnswer: "C",
        explanation: "`getServerSideProps` runs on the server at request time, allowing dynamic data to be fetched before rendering the page.",
        answerDescription: "",
        domain: "Next.js",
        competency: "Data Fetching"
    },
    {
        id: 17,
        question: "Which directory structure in Next.js automatically creates routes?",
        options: [
            "/views",
            "/pages",
            "/src/components",
            "/routes"
        ],
        correctAnswer: "B",
        explanation: "The `/pages` directory in Next.js automatically maps files to routes based on file names and structure.",
        answerDescription: "",
        domain: "Next.js",
        competency: "Routing"
    },
    {
        id: 18,
        question: "Which of these runs only during the build time in Next.js?",
        options: [
            "getServerSideProps",
            "getInitialProps",
            "getStaticProps",
            "useEffect"
        ],
        correctAnswer: "C",
        explanation: "`getStaticProps` runs at build time and generates static pages that can be cached and served via CDN.",
        answerDescription: "",
        domain: "Next.js",
        competency: "Data Fetching"
    },
    {
        id: 19,
        question: "What happens when you use dynamic routes like `[slug].tsx` in the `pages` directory?",
        options: [
            "It creates a wildcard redirect",
            "It creates a client-side route only",
            "It enables catch-all routing for the given path",
            "It maps the route to any path matching the slug"
        ],
        correctAnswer: "D",
        explanation: "Next.js dynamic routes using `[slug].tsx` will match any route with a single dynamic segment and make the slug available via `getStaticPaths` or `getServerSideProps`.",
        answerDescription: "",
        domain: "Next.js",
        competency: "Routing"
    },
    {
        id: 20,
        question: "Which lifecycle method or hook is unavailable in `getStaticProps`?",
        options: [
            "Database querying",
            "Reading cookies",
            "Using `useEffect`",
            "Fetching from an API"
        ],
        correctAnswer: "C",
        explanation: "`useEffect` is a React client-side hook and cannot be used in `getStaticProps`, which runs server-side at build time.",
        answerDescription: "",
        domain: "Next.js",
        competency: "Data Fetching"
    },
    {
        id: 21,
        question: "How does Next.js support internationalized routing?",
        options: [
            "Using the i18n routing system in the pages directory",
            "Using `next-i18next` automatically",
            "Using locale detection in the `next.config.js` file",
            "Using custom middleware routing"
        ],
        correctAnswer: "C",
        explanation: "Internationalized routing in Next.js is configured via `i18n` in `next.config.js`, enabling automatic locale detection and routing.",
        answerDescription: "",
        domain: "Next.js",
        competency: "Routing"
    },
    {
        id: 22,
        question: "What does Next.js do with API routes under `/pages/api`?",
        options: [
            "They are treated like frontend routes",
            "They are ignored unless explicitly imported",
            "They are exposed as serverless functions",
            "They compile into client bundles"
        ],
        correctAnswer: "C",
        explanation: "Files in `/pages/api` are mapped to serverless functions deployed on the backend by Next.js.",
        answerDescription: "",
        domain: "Next.js",
        competency: "API Routes"
    },
    {
        id: 23,
        question: "Which method allows pre-rendering paths based on data in Next.js?",
        options: [
            "getInitialProps",
            "getStaticPaths",
            "useRouter",
            "getPageContext"
        ],
        correctAnswer: "B",
        explanation: "`getStaticPaths` works with `getStaticProps` to generate static pages for dynamic routes based on available data.",
        answerDescription: "",
        domain: "Next.js",
        competency: "Static Generation"
    },
    {
        id: 24,
        question: "In which scenario would `getInitialProps` be preferred over `getStaticProps` or `getServerSideProps`?",
        options: [
            "When only client-side rendering is needed",
            "When using a custom App or Document component",
            "When deploying to Vercel only",
            "When data is fetched in useEffect"
        ],
        correctAnswer: "B",
        explanation: "`getInitialProps` is commonly used in custom `_app.tsx` or `_document.tsx` for data fetching, though it disables automatic static optimization.",
        answerDescription: "",
        domain: "Next.js",
        competency: "Legacy Patterns"
    },
    {
        id: 25,
        question: "What is the impact of using `getServerSideProps` on performance?",
        options: [
            "It reduces initial load time",
            "It allows full CDN caching",
            "It increases server load per request",
            "It eliminates the need for pre-rendering"
        ],
        correctAnswer: "C",
        explanation: "Since `getServerSideProps` runs on each request, it can increase server load compared to static generation.",
        answerDescription: "",
        domain: "Next.js",
        competency: "Performance"
    },
    {
        id: 26,
        question: "Which is NOT a benefit of static site generation in Next.js?",
        options: [
            "Fast load times",
            "Improved SEO",
            "Reduced server cost",
            "Real-time dynamic content"
        ],
        correctAnswer: "D",
        explanation: "Static generation is great for performance and SEO but is not suitable for real-time dynamic data.",
        answerDescription: "",
        domain: "Next.js",
        competency: "Static Generation"
    },
    {
        id: 27,
        question: "How does Next.js handle client-side navigation between routes?",
        options: [
            "Using standard `<a>` tags",
            "Using `Router.push` only",
            "Using the `<Link>` component from `next/link`",
            "Using HTML forms"
        ],
        correctAnswer: "C",
        explanation: "Next.js uses the `<Link>` component for client-side transitions, preventing full page reloads.",
        answerDescription: "",
        domain: "Next.js",
        competency: "Routing"
    },
    {
        id: 28,
        question: "Which Next.js configuration file is used to define redirects and rewrites?",
        options: [
            "next.config.js",
            "routes.config.js",
            "package.json",
            "rewrites.js"
        ],
        correctAnswer: "A",
        explanation: "`next.config.js` supports setting up redirects and rewrites to control routing behavior.",
        answerDescription: "",
        domain: "Next.js",
        competency: "Routing"
    },
    {
        id: 29,
        question: "When using ISR (Incremental Static Regeneration), what property must be added to `getStaticProps` return object?",
        options: [
            "fallback",
            "paths",
            "revalidate",
            "redirect"
        ],
        correctAnswer: "C",
        explanation: "`revalidate` tells Next.js how often to regenerate a page after deployment, enabling ISR.",
        answerDescription: "",
        domain: "Next.js",
        competency: "Static Generation"
    },
    {
        id: 30,
        question: "How can you access query parameters in a dynamic route component in Next.js?",
        options: [
            "Using `useParams()`",
            "Using `useQuery()`",
            "Using `useRouter().query`",
            "Using `props.query`"
        ],
        correctAnswer: "C",
        explanation: "`useRouter().query` is the correct way to access dynamic route parameters in functional components.",
        answerDescription: "",
        domain: "Next.js",
        competency: "Routing"
    },
    {
        id: 31,
        question: "Which HTTP method is considered safe and idempotent in RESTful APIs?",
        options: ["POST", "PUT", "GET", "DELETE", "PATCH"],
        correctAnswer: "C",
        explanation: "GET requests retrieve data without changing server state and are both safe and idempotent.",
        answerDescription: "",
        domain: "REST APIs",
        competency: "HTTP Methods"
    },
    {
        id: 32,
        question: "Which status code is appropriate when a requested resource cannot be found?",
        options: ["200 OK", "400 Bad Request", "401 Unauthorized", "404 Not Found", "500 Internal Server Error"],
        correctAnswer: "D",
        explanation: "404 indicates the server cannot find the requested resource.",
        answerDescription: "",
        domain: "REST APIs",
        competency: "Error Handling"
    },
    {
        id: 33,
        question: "What is the recommended format for versioning a REST API?",
        options: ["/api/v1/resource", "/resource?version=1", "/v1-api/resource", "/resource#v1", "/version1/resource"],
        correctAnswer: "A",
        explanation: "URI versioning using /api/v1/ is the most common and clean approach to API versioning.",
        answerDescription: "",
        domain: "REST APIs",
        competency: "Versioning"
    },
    {
        id: 34,
        question: "Which HTTP status code should be returned when a request is valid but the server refuses to authorize it?",
        options: ["401 Unauthorized", "403 Forbidden", "404 Not Found", "400 Bad Request", "500 Internal Server Error"],
        correctAnswer: "B",
        explanation: "403 Forbidden is used when the user is authenticated but not authorized.",
        answerDescription: "",
        domain: "REST APIs",
        competency: "Error Handling"
    },
    {
        id: 35,
        question: "What is a key advantage of using pagination in REST APIs?",
        options: ["Improves API security", "Enhances data integrity", "Optimizes performance and response time", "Increases request frequency", "Reduces authentication complexity"],
        correctAnswer: "C",
        explanation: "Pagination prevents large payloads and improves response times and performance.",
        answerDescription: "",
        domain: "REST APIs",
        competency: "Performance Optimization"
    },
    {
        id: 36,
        question: "Which header is used to define the media type of the request body?",
        options: ["Authorization", "Accept", "Content-Type", "Cache-Control", "Host"],
        correctAnswer: "C",
        explanation: "The Content-Type header indicates the media type of the resource in the request body.",
        answerDescription: "",
        domain: "REST APIs",
        competency: "HTTP Headers"
    },
    {
        id: 37,
        question: "In REST, which HTTP method is typically used for partial updates to a resource?",
        options: ["POST", "PUT", "GET", "PATCH", "HEAD"],
        correctAnswer: "D",
        explanation: "PATCH is used for partial updates of a resource, while PUT replaces the entire resource.",
        answerDescription: "",
        domain: "REST APIs",
        competency: "HTTP Methods"
    },
    {
        id: 38,
        question: "Which practice improves REST API client-side cache efficiency?",
        options: ["Using POST for all operations", "Avoiding resource versioning", "Adding ETag headers", "Limiting response codes", "Ignoring cache headers"],
        correctAnswer: "C",
        explanation: "ETag headers help clients validate cached data, reducing unnecessary requests.",
        answerDescription: "",
        domain: "REST APIs",
        competency: "Performance Optimization"
    },
    {
        id: 39,
        question: "What is the appropriate status code for a successful resource creation?",
        options: ["200 OK", "201 Created", "202 Accepted", "204 No Content", "304 Not Modified"],
        correctAnswer: "B",
        explanation: "201 Created indicates that a new resource has been successfully created.",
        answerDescription: "",
        domain: "REST APIs",
        competency: "HTTP Status Codes"
    },
    {
        id: 40,
        question: "Why should you avoid using verbs in RESTful API endpoint names?",
        options: ["To reduce endpoint length", "To maintain HTTP method semantics", "To improve server performance", "To align with JSON formatting", "To avoid GET/POST confusion"],
        correctAnswer: "B",
        explanation: "REST emphasizes nouns (resources) in endpoint paths, as the HTTP method conveys the action.",
        answerDescription: "",
        domain: "REST APIs",
        competency: "Design Principles"
    },
    {
        id: 41,
        question: "What does idempotency mean in RESTful APIs?",
        options: ["The request returns a unique identifier", "A request can be made repeatedly without side effects", "The request is only processed once", "The response is cached", "The request always fails safely"],
        correctAnswer: "B",
        explanation: "Idempotency means repeating the same request will not change the result beyond the first application.",
        answerDescription: "",
        domain: "REST APIs",
        competency: "HTTP Methods"
    },
    {
        id: 42,
        question: "Which of the following is NOT a benefit of RESTful architecture?",
        options: ["Stateless interactions", "Uniform interface", "Tightly coupled services", "Scalability", "Cacheable responses"],
        correctAnswer: "C",
        explanation: "REST promotes loosely coupled services for better scalability and flexibility.",
        answerDescription: "",
        domain: "REST APIs",
        competency: "Design Principles"
    },
    {
        id: 43,
        question: "What is a downside of using URI-based versioning like `/api/v1/`?",
        options: ["It's not RESTful", "It doesn't support content negotiation", "It breaks backward compatibility", "It complicates authentication", "It hides endpoints from search engines"],
        correctAnswer: "B",
        explanation: "URI-based versioning doesn’t allow using the Accept header for versioning via content negotiation.",
        answerDescription: "",
        domain: "REST APIs",
        competency: "Versioning"
    },
    {
        id: 44,
        question: "Which REST API design principle encourages stateless communication?",
        options: ["Caching", "Layered system", "Uniform interface", "Client-server separation", "Statelessness"],
        correctAnswer: "E",
        explanation: "Statelessness ensures that each request contains all necessary context for the server to process it.",
        answerDescription: "",
        domain: "REST APIs",
        competency: "Design Principles"
    },
    {
        id: 45,
        question: "Which header should a REST API return to inform clients about supported request methods on a resource?",
        options: ["Allow", "Accept", "Access-Control-Allow-Methods", "Content-Type", "X-Methods-Supported"],
        correctAnswer: "A",
        explanation: "The Allow header in the response indicates which HTTP methods are supported for the target resource.",
        answerDescription: "",
        domain: "REST APIs",
        competency: "HTTP Headers"
    }, {
        id: 46,
        question: "What is the primary goal of implementing a Content Security Policy (CSP) in a web application?",
        options: [
            "To enforce session timeouts",
            "To restrict the sources of executable scripts",
            "To encrypt data in transit",
            "To prevent SQL injection attacks",
            "To optimize browser rendering"
        ],
        correctAnswer: "B",
        explanation: "CSP helps mitigate XSS attacks by restricting the sources from which content like scripts, styles, and images can be loaded.",
        answerDescription: "",
        domain: "Browser Security",
        competency: "Content Security Policy (CSP)"
    },
    {
        id: 47,
        question: "Which of the following HTTP headers is used to enforce a strict CSP?",
        options: [
            "X-XSS-Protection",
            "Strict-Transport-Security",
            "Content-Security-Policy",
            "X-Frame-Options",
            "X-Content-Type-Options"
        ],
        correctAnswer: "C",
        explanation: "`Content-Security-Policy` is the header that specifies the allowed sources of content to enhance security.",
        answerDescription: "",
        domain: "Browser Security",
        competency: "Content Security Policy (CSP)"
    },
    {
        id: 48,
        question: "What is the risk of not sanitizing user input in a web application?",
        options: [
            "Increased bandwidth usage",
            "Inconsistent UI rendering",
            "Potential for XSS (Cross-Site Scripting) attacks",
            "Reduced server performance",
            "SEO ranking loss"
        ],
        correctAnswer: "C",
        explanation: "Unsanitized input can be used to inject malicious scripts into the DOM, resulting in XSS vulnerabilities.",
        answerDescription: "",
        domain: "Browser Security",
        competency: "Sanitization"
    },
    {
        id: 49,
        question: "Which JavaScript library is commonly used to prevent XSS attacks through input sanitization?",
        options: [
            "React",
            "DOMPurify",
            "Lodash",
            "Axios",
            "Helmet"
        ],
        correctAnswer: "B",
        explanation: "`DOMPurify` sanitizes HTML to ensure it doesn't include malicious scripts or markup.",
        answerDescription: "",
        domain: "Browser Security",
        competency: "Sanitization"
    },
    {
        id: 50,
        question: "What does the 'HttpOnly' flag on cookies help protect against?",
        options: [
            "Cookie theft via XSS",
            "Cross-Site Request Forgery (CSRF)",
            "Phishing attacks",
            "Open redirects",
            "Clickjacking"
        ],
        correctAnswer: "A",
        explanation: "HttpOnly cookies are inaccessible to JavaScript, reducing the risk of cookie theft via XSS attacks.",
        answerDescription: "",
        domain: "Browser Security",
        competency: "Secure Cookie Handling"
    },
    {
        id: 51,
        question: "Why should 'SameSite' cookies be used in authentication flows?",
        options: [
            "To reduce server load",
            "To prevent session fixation",
            "To mitigate CSRF attacks",
            "To enforce HTTPS only connections",
            "To increase cookie size limit"
        ],
        correctAnswer: "C",
        explanation: "The `SameSite` attribute restricts cookies from being sent in cross-site requests, mitigating CSRF risks.",
        answerDescription: "",
        domain: "Browser Security",
        competency: "Secure Cookie Handling"
    },
    {
        id: 52,
        question: "In OAuth 2.0, what is the purpose of the 'state' parameter during the auth flow?",
        options: [
            "To specify user permissions",
            "To define token expiration",
            "To protect against CSRF attacks",
            "To encrypt the authorization code",
            "To limit request frequency"
        ],
        correctAnswer: "C",
        explanation: "The `state` parameter is used to maintain state between the request and callback and to prevent CSRF attacks.",
        answerDescription: "",
        domain: "Browser Security",
        competency: "Auth Flows"
    },
    {
        id: 53,
        question: "Which of the following is a recommended practice when handling tokens in a browser-based app?",
        options: [
            "Store tokens in localStorage",
            "Use cookies without any flags",
            "Store tokens in memory or HttpOnly cookies",
            "Append tokens to every URL",
            "Expose tokens via global window object"
        ],
        correctAnswer: "C",
        explanation: "HttpOnly cookies or in-memory storage reduce the risk of token theft via XSS attacks.",
        answerDescription: "",
        domain: "Browser Security",
        competency: "Auth Flows"
    },
    {
        id: 54,
        question: "What kind of attack is mitigated by the use of the `X-Frame-Options` header?",
        options: [
            "Cross-Site Scripting (XSS)",
            "Cross-Site Request Forgery (CSRF)",
            "Clickjacking",
            "Man-in-the-middle",
            "Brute force"
        ],
        correctAnswer: "C",
        explanation: "`X-Frame-Options` prevents a site from being embedded in an iframe, thereby preventing clickjacking attacks.",
        answerDescription: "",
        domain: "Browser Security",
        competency: "Content Security Policy (CSP)"
    },
    {
        id: 55,
        question: "What does 'nonce' mean in a CSP header?",
        options: [
            "A type of hash function",
            "An expiration timestamp",
            "A random value to allow specific inline scripts",
            "A header for HTTP2 requests",
            "An encoded cookie"
        ],
        correctAnswer: "C",
        explanation: "A CSP nonce is a cryptographic random value added to allow specific inline scripts in a secure way.",
        answerDescription: "",
        domain: "Browser Security",
        competency: "Content Security Policy (CSP)"
    },
    {
        id: 56,
        question: "Which of the following can help prevent DOM-based XSS?",
        options: [
            "Using server-side rendering only",
            "Minifying JavaScript",
            "Avoiding direct manipulation of innerHTML",
            "Using WebSockets over HTTP",
            "Storing data in IndexedDB"
        ],
        correctAnswer: "C",
        explanation: "Avoiding use of `innerHTML` or sanitizing it ensures malicious scripts can't be injected into the DOM.",
        answerDescription: "",
        domain: "Browser Security",
        competency: "Sanitization"
    },
    {
        id: 57,
        question: "Which strategy is best for securing authentication tokens in a React app?",
        options: [
            "Saving them to sessionStorage with global access",
            "Keeping them in Redux state",
            "Using HttpOnly, Secure cookies",
            "Storing them in query parameters",
            "Setting them in a global JavaScript variable"
        ],
        correctAnswer: "C",
        explanation: "HttpOnly cookies cannot be accessed via JavaScript and are recommended for securing tokens in browsers.",
        answerDescription: "",
        domain: "Browser Security",
        competency: "Auth Flows"
    },
    {
        id: 58,
        question: "Why is it a bad idea to store tokens in `localStorage` for authentication?",
        options: [
            "They are too large for localStorage",
            "They get deleted too quickly",
            "They are vulnerable to XSS attacks",
            "They can't be parsed by browsers",
            "They slow down rendering"
        ],
        correctAnswer: "C",
        explanation: "`localStorage` is accessible via JavaScript and can be exploited in an XSS attack.",
        answerDescription: "",
        domain: "Browser Security",
        competency: "Auth Flows"
    },
    {
        id: 59,
        question: "What is the most secure way to transmit cookies?",
        options: [
            "With the Secure flag over HTTPS",
            "With domain set to localhost",
            "Over HTTP only",
            "Via GET parameters",
            "As part of the HTML meta tags"
        ],
        correctAnswer: "A",
        explanation: "Using the `Secure` flag ensures cookies are only sent over HTTPS, reducing the risk of MITM attacks.",
        answerDescription: "",
        domain: "Browser Security",
        competency: "Secure Cookie Handling"
    },
    {
        id: 60,
        question: "How can a developer prevent sensitive authentication cookies from being exposed to client-side scripts?",
        options: [
            "Set the cookie path to `/admin`",
            "Use JSON Web Tokens instead",
            "Enable the HttpOnly flag",
            "Use Base64 encoding",
            "Store them in memory"
        ],
        correctAnswer: "C",
        explanation: "The HttpOnly flag ensures cookies are inaccessible to JavaScript, reducing the risk of theft.",
        answerDescription: "",
        domain: "Browser Security",
        competency: "Secure Cookie Handling"
    },
    {
        id: 61,
        question: "What is the main advantage of using WebSockets over traditional HTTP requests for real-time features?",
        options: [
            "Better SEO optimization",
            "Lower server costs",
            "Bi-directional communication with low latency",
            "Faster page loads",
            "Enhanced security through encryption"
        ],
        correctAnswer: "C",
        explanation: "WebSockets provide full-duplex communication over a single connection, making it ideal for real-time interactions like chats or notifications.",
        answerDescription: "",
        domain: "WebSockets",
        competency: "Architecture & Benefits"
    },
    {
        id: 62,
        question: "Which HTTP status code indicates a successful WebSocket handshake?",
        options: [
            "200",
            "201",
            "101",
            "403",
            "426"
        ],
        correctAnswer: "C",
        explanation: "The HTTP 101 status code means the server is switching protocols to WebSocket, confirming a successful upgrade.",
        answerDescription: "",
        domain: "WebSockets",
        competency: "Connection Handshake"
    },
    {
        id: 63,
        question: "Which WebSocket event is triggered when the connection is successfully established?",
        options: [
            "onmessage",
            "onerror",
            "onopen",
            "onconnect",
            "onready"
        ],
        correctAnswer: "C",
        explanation: "`onopen` is fired when a WebSocket connection is successfully opened and ready for communication.",
        answerDescription: "",
        domain: "WebSockets",
        competency: "Client-side API"
    },
    {
        id: 64,
        question: "In a typical WebSocket server implementation using Node.js, which package is commonly used?",
        options: [
            "axios",
            "express-ws",
            "wss",
            "ws",
            "socket-server"
        ],
        correctAnswer: "D",
        explanation: "`ws` is a popular WebSocket library in Node.js that supports server and client WebSocket APIs.",
        answerDescription: "",
        domain: "WebSockets",
        competency: "Server-side Implementation"
    },
    {
        id: 65,
        question: "How do WebSockets maintain a persistent connection?",
        options: [
            "They use HTTP long polling",
            "They reopen HTTP connections periodically",
            "They upgrade the HTTP connection to a full-duplex TCP connection",
            "They use repeated GET requests",
            "They cache socket responses"
        ],
        correctAnswer: "C",
        explanation: "WebSockets upgrade the HTTP connection to a TCP connection allowing persistent, two-way communication.",
        answerDescription: "",
        domain: "WebSockets",
        competency: "Protocol Fundamentals"
    },
    {
        id: 66,
        question: "Which strategy helps scale WebSocket connections across multiple Node.js instances?",
        options: [
            "Using serverless functions",
            "Stateless sockets",
            "Sticky sessions or shared Redis pub/sub",
            "Caching WebSocket messages",
            "Using CDN edge servers"
        ],
        correctAnswer: "C",
        explanation: "Sticky sessions or using Redis pub/sub helps coordinate messages and state between instances.",
        answerDescription: "",
        domain: "WebSockets",
        competency: "Scalability"
    },
    {
        id: 67,
        question: "Which method is used on the client to send data over a WebSocket connection?",
        options: [
            "socket.push()",
            "socket.send()",
            "socket.emit()",
            "socket.post()",
            "socket.dispatch()"
        ],
        correctAnswer: "B",
        explanation: "`send()` is the standard WebSocket method used to transmit messages from the client to the server.",
        answerDescription: "",
        domain: "WebSockets",
        competency: "Client-side API"
    },
    {
        id: 68,
        question: "What does the `onmessage` event handler do in a WebSocket connection?",
        options: [
            "Closes the connection",
            "Sends a message to the server",
            "Handles incoming messages from the server",
            "Re-establishes the socket connection",
            "Encodes messages"
        ],
        correctAnswer: "C",
        explanation: "`onmessage` is triggered when a message is received from the server on an open WebSocket.",
        answerDescription: "",
        domain: "WebSockets",
        competency: "Client-side API"
    },
    {
        id: 69,
        question: "What’s a common approach to detect a broken WebSocket connection from the client?",
        options: [
            "Use an iframe-based fallback",
            "Send pings or heartbeats periodically",
            "Reinitialize the socket every minute",
            "Set a timeout on socket.send",
            "Use setInterval to check network state"
        ],
        correctAnswer: "B",
        explanation: "Heartbeats or pings are sent at regular intervals to ensure the connection is still alive.",
        answerDescription: "",
        domain: "WebSockets",
        competency: "Connection Reliability"
    },
    {
        id: 70,
        question: "In a production app with thousands of clients, how can you manage socket rooms efficiently?",
        options: [
            "Assign each socket to its own namespace",
            "Use WebRTC instead of WebSockets",
            "Group sockets using identifiers and Redis pub/sub",
            "Disable socket broadcasting",
            "Use separate servers for each client"
        ],
        correctAnswer: "C",
        explanation: "Redis pub/sub can manage rooms across multiple servers, ensuring scalable, consistent messaging.",
        answerDescription: "",
        domain: "WebSockets",
        competency: "Scalability & Room Management"
    },
    {
        id: 71,
        question: "Which transport fallback technique was used before WebSockets became widely supported?",
        options: [
            "WebRTC",
            "XHR streaming",
            "GraphQL Subscriptions",
            "IP tunneling",
            "gRPC"
        ],
        correctAnswer: "B",
        explanation: "XHR streaming or long polling were used before WebSockets for near-real-time updates.",
        answerDescription: "",
        domain: "WebSockets",
        competency: "Legacy Real-time Approaches"
    },
    {
        id: 72,
        question: "Which security risk is associated with poorly secured WebSocket connections?",
        options: [
            "SQL Injection",
            "XSS",
            "Cross-Site WebSocket Hijacking",
            "Content Spoofing",
            "Clickjacking"
        ],
        correctAnswer: "C",
        explanation: "WebSocket hijacking can occur if origin headers or tokens are not validated properly.",
        answerDescription: "",
        domain: "WebSockets",
        competency: "Security"
    },
    {
        id: 73,
        question: "How can you authenticate a user before establishing a WebSocket connection?",
        options: [
            "Set a token in URL query string only",
            "Use JWT or cookies during the handshake phase",
            "Send credentials after connection",
            "Skip authentication to improve performance",
            "Use global state"
        ],
        correctAnswer: "B",
        explanation: "Authentication can be done during the handshake using JWTs or secure cookies.",
        answerDescription: "",
        domain: "WebSockets",
        competency: "Authentication"
    },
    {
        id: 74,
        question: "Which of the following is a recommended pattern to handle WebSocket disconnections?",
        options: [
            "Exit the app",
            "Retry connection using exponential backoff",
            "Use only polling as fallback",
            "Alert the user to reload manually",
            "Disable socket retry entirely"
        ],
        correctAnswer: "B",
        explanation: "Exponential backoff helps gracefully reconnect without overwhelming the server.",
        answerDescription: "",
        domain: "WebSockets",
        competency: "Connection Reliability"
    },
    {
        id: 75,
        question: "Which protocol layer does WebSocket operate on?",
        options: [
            "Application layer directly over IP",
            "TCP layer without HTTP",
            "It upgrades HTTP to operate over TCP",
            "TLS directly",
            "UDP-based streaming"
        ],
        correctAnswer: "C",
        explanation: "WebSockets begin as HTTP and then upgrade to a TCP-based protocol for bidirectional communication.",
        answerDescription: "",
        domain: "WebSockets",
        competency: "Protocol Fundamentals"
    },
    {
        id: 76,
        question: "Which function is used in Jest to create a mock function?",
        options: [
            "jest.create()",
            "jest.mockFunction()",
            "jest.fn()",
            "jest.fake()",
            "jest.spy()"
        ],
        correctAnswer: "C",
        explanation: "`jest.fn()` creates a mock function that you can inspect and control in your tests.",
        answerDescription: "",
        domain: "Unit Testing",
        competency: "Jest Basics"
    },
    {
        id: 77,
        question: "What is the main goal of unit testing?",
        options: [
            "Testing network latency",
            "Validating third-party APIs",
            "Ensuring individual units of code behave correctly in isolation",
            "Measuring browser compatibility",
            "Testing infrastructure performance"
        ],
        correctAnswer: "C",
        explanation: "Unit tests focus on verifying the behavior of isolated pieces of functionality, such as functions or components.",
        answerDescription: "",
        domain: "Unit Testing",
        competency: "Testing Principles"
    },
    {
        id: 78,
        question: "Which function is used to render a component in React Testing Library?",
        options: [
            "renderComponent()",
            "shallow()",
            "mount()",
            "render()",
            "display()"
        ],
        correctAnswer: "D",
        explanation: "`render()` is the core utility in React Testing Library to render a component for testing its behavior.",
        answerDescription: "",
        domain: "Unit Testing",
        competency: "React Testing Library"
    },
    {
        id: 79,
        question: "In React Testing Library, how do you query for a button with the text 'Submit'?",
        options: [
            "getElementByText('Submit')",
            "findButton('Submit')",
            "screen.getByLabel('Submit')",
            "screen.getByText('Submit')",
            "getText('Submit')"
        ],
        correctAnswer: "D",
        explanation: "`screen.getByText()` queries the rendered DOM for an element that matches the given text.",
        answerDescription: "",
        domain: "Unit Testing",
        competency: "React Testing Library"
    },
    {
        id: 80,
        question: "Which method is used to group related tests in Jest?",
        options: [
            "group()",
            "testGroup()",
            "describe()",
            "combine()",
            "suite()"
        ],
        correctAnswer: "C",
        explanation: "`describe()` lets you group related tests, which improves readability and organization.",
        answerDescription: "",
        domain: "Unit Testing",
        competency: "Jest Structure"
    },
    {
        id: 81,
        question: "What is the purpose of `beforeEach` in a Jest test suite?",
        options: [
            "Define a global mock",
            "Run setup code once before all tests",
            "Run setup code before each individual test",
            "Clean up after all tests",
            "Reload mocks"
        ],
        correctAnswer: "C",
        explanation: "`beforeEach` runs a specific block of code before each test, useful for setting up consistent test conditions.",
        answerDescription: "",
        domain: "Unit Testing",
        competency: "Jest Lifecycle"
    },
    {
        id: 82,
        question: "How can you test a click event on a button using React Testing Library?",
        options: [
            "simulateClick(button)",
            "fireEvent.click(button)",
            "triggerEvent(button)",
            "simulateEvent('click', button)",
            "button.trigger('click')"
        ],
        correctAnswer: "B",
        explanation: "`fireEvent.click()` simulates a click event on a DOM element in RTL.",
        answerDescription: "",
        domain: "Unit Testing",
        competency: "Event Testing"
    },
    {
        id: 83,
        question: "How do you mock a module like axios in Jest?",
        options: [
            "axios.mockThis()",
            "jest.spyOn(axios)",
            "jest.mock('axios')",
            "jest.replace(axios)",
            "mock.axios()"
        ],
        correctAnswer: "C",
        explanation: "`jest.mock('axios')` automatically mocks all functions in the axios module.",
        answerDescription: "",
        domain: "Unit Testing",
        competency: "Mocking Modules"
    },
    {
        id: 84,
        question: "Which of the following is considered a best practice when writing unit tests?",
        options: [
            "Avoid assertions",
            "Use real API calls",
            "Test only the public API of a module",
            "Depend on actual database state",
            "Test the whole app at once"
        ],
        correctAnswer: "C",
        explanation: "Unit tests should test the public API of modules and avoid implementation details.",
        answerDescription: "",
        domain: "Unit Testing",
        competency: "Best Practices"
    },
    {
        id: 85,
        question: "What does the `toBeInTheDocument()` matcher check in RTL + Jest?",
        options: [
            "If a component is visible",
            "If a variable is truthy",
            "If an element exists in the rendered DOM",
            "If the document is rendered",
            "If props are passed"
        ],
        correctAnswer: "C",
        explanation: "`toBeInTheDocument()` checks that a queried element is present in the DOM.",
        answerDescription: "",
        domain: "Unit Testing",
        competency: "Assertions"
    },
    {
        id: 86,
        question: "Which testing utility is used to wait for async UI updates in React Testing Library?",
        options: [
            "waitFor()",
            "setTimeout()",
            "asyncUpdate()",
            "onIdle()",
            "sleep()"
        ],
        correctAnswer: "A",
        explanation: "`waitFor()` is used to wait for async DOM changes such as data loading or re-rendering.",
        answerDescription: "",
        domain: "Unit Testing",
        competency: "Async Testing"
    },
    {
        id: 87,
        question: "How can code coverage be measured using Jest?",
        options: [
            "Using a separate library",
            "Enable `--coverage` flag during test run",
            "Check browser console logs",
            "Add comments in each test",
            "Coverage can't be measured in Jest"
        ],
        correctAnswer: "B",
        explanation: "Jest provides code coverage out of the box using the `--coverage` CLI flag.",
        answerDescription: "",
        domain: "Unit Testing",
        competency: "Coverage"
    },
    {
        id: 88,
        question: "Which term describes testing a function in isolation without its dependencies?",
        options: [
            "Integration Testing",
            "System Testing",
            "Unit Testing",
            "Smoke Testing",
            "End-to-End Testing"
        ],
        correctAnswer: "C",
        explanation: "Unit testing focuses on testing small units of logic in isolation, without external dependencies.",
        answerDescription: "",
        domain: "Unit Testing",
        competency: "Testing Types"
    },
    {
        id: 89,
        question: "Why is high unit test coverage important in a large React project?",
        options: [
            "Reduces need for CI/CD",
            "Improves test speed",
            "Ensures code is tested thoroughly and regressions are caught early",
            "Boosts runtime performance",
            "Guarantees 100% bug-free code"
        ],
        correctAnswer: "C",
        explanation: "High coverage ensures a majority of logic paths are verified, helping catch regressions and bugs earlier.",
        answerDescription: "",
        domain: "Unit Testing",
        competency: "Coverage Strategy"
    },
    {
        id: 90,
        question: "Which of the following should be avoided in unit tests?",
        options: [
            "Mocking functions",
            "Snapshot testing",
            "Testing visual layout",
            "Using fake timers",
            "Testing error boundaries"
        ],
        correctAnswer: "C",
        explanation: "Unit tests should avoid layout testing and focus on logic and behavior, not appearance.",
        answerDescription: "",
        domain: "Unit Testing",
        competency: "Best Practices"
    },
    {
        id: 91,
        question: "In a typical RBAC system, what is the primary unit that determines access to resources?",
        options: [
            "User groups",
            "Usernames",
            "Roles",
            "Permissions",
            "Tokens"
        ],
        correctAnswer: "C",
        explanation: "Roles are the core concept in RBAC; users are assigned roles which have defined permissions.",
        answerDescription: "",
        domain: "Complex Permissions",
        competency: "RBAC Concepts"
    },
    {
        id: 92,
        question: "What distinguishes ABAC from RBAC in terms of access decision logic?",
        options: [
            "ABAC only supports admin roles",
            "RBAC is more dynamic than ABAC",
            "ABAC uses user and resource attributes, not just roles",
            "RBAC is not supported in SPAs",
            "ABAC ignores user roles entirely"
        ],
        correctAnswer: "C",
        explanation: "ABAC bases decisions on attributes (like time, department, user status) for more flexible control.",
        answerDescription: "",
        domain: "Complex Permissions",
        competency: "ABAC vs RBAC"
    },
    {
        id: 93,
        question: "Which of the following is a **best practice** when implementing RBAC in a React SPA?",
        options: [
            "Hide buttons using inline styles only",
            "Check roles during rendering and also on the backend",
            "Store permissions only in the Redux store",
            "Never use backend validation for access",
            "Hardcode all access rules in the component"
        ],
        correctAnswer: "B",
        explanation: "Security should be enforced both at the UI and backend levels to prevent unauthorized access.",
        answerDescription: "",
        domain: "Complex Permissions",
        competency: "RBAC Best Practices"
    },
    {
        id: 94,
        question: "In a scalable ABAC system, how is access typically defined?",
        options: [
            "By mapping role to token in localStorage",
            "Through conditional rendering only",
            "Using policies based on multiple attributes like age, department, and time",
            "By checking CSS class names",
            "Directly inside UI components"
        ],
        correctAnswer: "C",
        explanation: "ABAC uses policies that evaluate attributes of users and resources to make access decisions.",
        answerDescription: "",
        domain: "Complex Permissions",
        competency: "ABAC Policy Design"
    },
    {
        id: 95,
        question: "What is the main downside of implementing RBAC solely on the client side in SPAs?",
        options: [
            "Slower rendering",
            "Increased code duplication",
            "Security risks due to tampering with roles in the browser",
            "Too many user roles",
            "It doesn’t work with React"
        ],
        correctAnswer: "C",
        explanation: "Client-side RBAC alone is insecure because local roles can be modified; server-side enforcement is essential.",
        answerDescription: "",
        domain: "Complex Permissions",
        competency: "Security Risks"
    },
    {
        id: 96,
        question: "Which of the following methods is suitable for storing and securely validating user roles in SPAs?",
        options: [
            "localStorage without encryption",
            "Redux state only",
            "JWT tokens signed by the backend",
            "Plain cookies with no flags",
            "Environment variables"
        ],
        correctAnswer: "C",
        explanation: "JWTs signed with a secret/key are secure ways to carry user claims like roles and can be validated on both ends.",
        answerDescription: "",
        domain: "Complex Permissions",
        competency: "Token-Based Roles"
    },
    {
        id: 97,
        question: "Which scenario would **most benefit** from ABAC instead of RBAC?",
        options: [
            "Users with fixed roles like admin, editor, viewer",
            "Granting access based on user's email domain only",
            "Access based on multiple changing factors like IP, time, location",
            "Simple CRUD applications",
            "Static blog with public content"
        ],
        correctAnswer: "C",
        explanation: "ABAC excels in dynamic environments where access rules depend on many contextual attributes.",
        answerDescription: "",
        domain: "Complex Permissions",
        competency: "RBAC vs ABAC Use Cases"
    },
    {
        id: 98,
        question: "In a React-based RBAC system, what is a good architectural pattern for permission checks?",
        options: [
            "Using `if` statements in each component",
            "Global `canAccess()` utility with context or hooks",
            "Hardcoding role checks in every button",
            "Storing user roles in sessionStorage only",
            "Creating a separate UI per user role"
        ],
        correctAnswer: "B",
        explanation: "Using a centralized utility like `canAccess()` with context/hook allows consistent and scalable permission checks.",
        answerDescription: "",
        domain: "Complex Permissions",
        competency: "Frontend Architecture"
    },
    {
        id: 99,
        question: "What is a **common challenge** in implementing ABAC in SPAs?",
        options: [
            "Browser caching",
            "Too few permissions",
            "Complexity in managing dynamic attribute combinations and policies",
            "Slow component loading",
            "Lack of React support"
        ],
        correctAnswer: "C",
        explanation: "ABAC's power lies in flexibility, but that comes with complexity in defining, storing, and evaluating policies.",
        answerDescription: "",
        domain: "Complex Permissions",
        competency: "ABAC Implementation"
    },
    {
        id: 100,
        question: "Why is it recommended to define access rules declaratively rather than imperatively in SPAs?",
        options: [
            "Declarative rules are less secure",
            "Imperative code runs faster",
            "Declarative logic allows centralized control and easier maintenance",
            "Only class components support declarative logic",
            "It's required by React 18"
        ],
        correctAnswer: "C",
        explanation: "Declarative access rules (e.g. via hooks/context) improve scalability, consistency, and ease of reasoning about permissions.",
        answerDescription: "",
        domain: "Complex Permissions",
        competency: "Best Practices"
    }
];
