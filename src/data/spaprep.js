export const data = [
    {
        id: 1,
        question: "What is the core advantage of a Single Page Application (SPA)?",
        options: [
            "Improved SEO out of the box",
            "Full page reloads for every route change",
            "Faster client-side navigation without full reloads",
            "Back-end logic is handled on the client"
        ],
        correctAnswer: "C",
        explanation: "SPAs allow faster navigation since they load content dynamically without refreshing the whole page.",
        domain: "SPA",
        competency: "Concepts",
        answerDescription: ""
    },
    {
        id: 2,
        question: "Which React library is most commonly used to handle routing in SPAs?",
        options: [
            "react-dom",
            "react-router-dom",
            "redux-router",
            "history-js"
        ],
        correctAnswer: "B",
        explanation: "`react-router-dom` provides routing components like `<BrowserRouter>`, `<Route>`, and `<Link>` for SPA navigation.",
        domain: "SPA",
        competency: "Routing",
        answerDescription: ""
    },
    {
        id: 3,
        question: "In SPAs, which API is primarily used by routing libraries to manipulate the browser URL without reloading?",
        options: [
            "localStorage API",
            "setTimeout API",
            "History API",
            "Navigator API"
        ],
        correctAnswer: "C",
        explanation: "The History API (`pushState`, `replaceState`) allows SPAs to update the URL without a page reload.",
        domain: "SPA",
        competency: "Routing",
        answerDescription: ""
    },
    {
        id: 4,
        question: "What problem does 'code-splitting' solve in large SPAs?",
        options: [
            "Excessive CSS loading",
            "Exposing global variables",
            "Long initial load times",
            "Excessive server requests"
        ],
        correctAnswer: "C",
        explanation: "Code-splitting helps reduce initial bundle size by loading code only when needed.",
        domain: "SPA",
        competency: "Performance",
        answerDescription: ""
    },
    {
        id: 5,
        question: "What causes a SPA to fail navigation on a hard browser refresh (F5) if not configured properly?",
        options: [
            "Too many routes defined",
            "Missing favicon.ico",
            "Server not redirecting all requests to index.html",
            "React not loaded before DOM"
        ],
        correctAnswer: "C",
        explanation: "SPAs rely on client-side routing, so the server must redirect unknown paths to `index.html`.",
        domain: "SPA",
        competency: "Deployment",
        answerDescription: ""
    },
    {
        id: 6,
        question: "What is a downside of SPAs regarding search engine optimization (SEO)?",
        options: [
            "They don’t support dynamic imports",
            "Client-rendered content might not be crawled properly",
            "They only work with Redux",
            "They require a lot of CSS"
        ],
        correctAnswer: "B",
        explanation: "Since SPAs load data client-side, some search engines may not index the content properly.",
        domain: "SPA",
        competency: "SEO",
        answerDescription: ""
    },
    {
        id: 7,
        question: "Which React hook is commonly used to detect and handle route changes?",
        options: [
            "useCallback",
            "useRouteMatch",
            "useEffect",
            "useLocation"
        ],
        correctAnswer: "D",
        explanation: "`useLocation()` from `react-router-dom` allows components to respond to URL changes.",
        domain: "SPA",
        competency: "Routing",
        answerDescription: ""
    },
    {
        id: 8,
        question: "Which type of navigation should be used within SPAs to avoid full page reloads?",
        options: [
            "<a href='/about'>",
            "window.location.href = '/about'",
            "<Link to='/about'>",
            "meta refresh"
        ],
        correctAnswer: "C",
        explanation: "`<Link>` is a client-side navigation component that prevents full reloads in SPAs.",
        domain: "SPA",
        competency: "Routing",
        answerDescription: ""
    },
    {
        id: 9,
        question: "Which of the following is a common memory leak issue in SPAs?",
        options: [
            "Using `setTimeout` in render method",
            "Storing state in props",
            "Not clearing subscriptions or timers on unmount",
            "Re-rendering without JSX"
        ],
        correctAnswer: "C",
        explanation: "Subscriptions or timers should be cleaned up in `useEffect` cleanup to prevent memory leaks.",
        domain: "SPA",
        competency: "Performance",
        answerDescription: ""
    },
    {
        id: 10,
        question: "What is the role of the `<BrowserRouter>` component in React SPAs?",
        options: [
            "It sends requests to the backend",
            "It handles query string parsing",
            "It provides routing context for child components",
            "It renders headers"
        ],
        correctAnswer: "C",
        explanation: "`<BrowserRouter>` uses the HTML5 history API to manage routing context in SPAs.",
        domain: "SPA",
        competency: "Routing",
        answerDescription: ""
    },
    {
        id: 11,
        question: "Which HTTP status code should be returned for all SPA routes on the server?",
        options: [
            "200 OK",
            "301 Moved Permanently",
            "404 Not Found",
            "403 Forbidden"
        ],
        correctAnswer: "A",
        explanation: "The server should return a 200 status and serve `index.html` so the SPA can handle routing.",
        domain: "SPA",
        competency: "Deployment",
        answerDescription: ""
    },
    {
        id: 12,
        question: "What’s a good way to improve performance in a large SPA?",
        options: [
            "Store all data in localStorage",
            "Avoid component keys",
            "Use React.lazy and Suspense to load components on demand",
            "Load all routes at once"
        ],
        correctAnswer: "C",
        explanation: "`React.lazy` allows lazy-loading components to reduce bundle size and initial load time.",
        domain: "SPA",
        competency: "Performance",
        answerDescription: ""
    },
    {
        id: 13,
        question: "Which of the following best describes a hash-based router?",
        options: [
            "It reloads the page on route change",
            "It uses the hash (#) part of the URL to simulate navigation",
            "It only works on mobile browsers",
            "It encrypts the URL"
        ],
        correctAnswer: "B",
        explanation: "Hash-based routing uses the `#` symbol to maintain client-side navigation without server configuration.",
        domain: "SPA",
        competency: "Routing",
        answerDescription: ""
    },
    {
        id: 14,
        question: "What is the main benefit of using SPA architecture?",
        options: [
            "Fewer JavaScript dependencies",
            "Higher SEO ranking",
            "Better user experience through fast navigation",
            "Improved backend scalability"
        ],
        correctAnswer: "C",
        explanation: "SPAs provide a fluid experience with faster transitions between pages.",
        domain: "SPA",
        competency: "UX",
        answerDescription: ""
    },
    {
        id: 15,
        question: "What is the best way to protect client-only routes in an SPA?",
        options: [
            "Render null components",
            "Use a guard pattern or `PrivateRoute` component",
            "Hide routes in the UI",
            "Only export routes conditionally"
        ],
        correctAnswer: "B",
        explanation: "`PrivateRoute` wrappers prevent unauthorized users from accessing protected pages.",
        domain: "SPA",
        competency: "Security",
        answerDescription: ""
    },
    {
        id: 16,
        question: "In a React SPA, what can cause a component to remount unnecessarily?",
        options: [
            "Using React.memo",
            "Using the same route name",
            "Using a different key prop on each render",
            "Setting state to null"
        ],
        correctAnswer: "C",
        explanation: "Changing the key prop forces React to unmount and remount the component.",
        domain: "SPA",
        competency: "Performance",
        answerDescription: ""
    },
    {
        id: 17,
        question: "What React feature lets you persist state across route changes in an SPA?",
        options: [
            "Hooks",
            "Refs",
            "Context API or global state like Redux",
            "JSX"
        ],
        correctAnswer: "C",
        explanation: "Redux or Context allows maintaining shared state across routes in an SPA.",
        domain: "SPA",
        competency: "State Management",
        answerDescription: ""
    },
    {
        id: 18,
        question: "What is the default behavior when using `Link` in `react-router-dom`?",
        options: [
            "Forces full page reload",
            "Adds a new entry to the browser history stack",
            "Redirects through server",
            "Triggers React’s error boundary"
        ],
        correctAnswer: "B",
        explanation: "`Link` adds a history entry, allowing back/forward navigation without reload.",
        domain: "SPA",
        competency: "Routing",
        answerDescription: ""
    },
    {
        id: 19,
        question: "What role does `Suspense` play in a SPA with dynamic imports?",
        options: [
            "Blocks rendering until global CSS is ready",
            "Renders fallback UI while lazy-loaded components are loading",
            "Prevents hydration",
            "Replaces Redux"
        ],
        correctAnswer: "B",
        explanation: "`Suspense` provides fallback UI while a lazy-loaded component is being fetched.",
        domain: "SPA",
        competency: "Code Splitting",
        answerDescription: ""
    },
    {
        id: 20,
        question: "Why are SPAs more reliant on client-side caching strategies?",
        options: [
            "To cache server logic",
            "To reduce DOM operations",
            "To improve repeated route load performance",
            "To prevent React re-renders"
        ],
        correctAnswer: "C",
        explanation: "SPAs benefit from caching resources (like JS and APIs) to speed up repeat visits and navigation.",
        domain: "SPA",
        competency: "Performance",
        answerDescription: ""
    }
];
